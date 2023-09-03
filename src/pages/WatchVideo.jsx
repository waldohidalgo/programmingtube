import { useNavigate, useParams } from "react-router-dom";

import styled from "styled-components";
import hexToRgba from "hex-to-rgba";
import ContenedorCardVideos from "../components/SeccionesCategorias/ContenedorCardVideo";
import { useEffect, useState } from "react";
import { consultaAPI } from "../api/apiJsonServer";
import LoaderSection from "../components/LoaderSection";
import Error404 from "./Error404";

const Contenedor = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${(props) => hexToRgba(props.color, "0.5")};
`;

const Titulo = styled.h1`
  margin-top: 1rem;
  margin-bottom: 1rem;
  text-align: center;
  font-weight: 700;
  font-family: "Carter", sans-serif;
  font-size: 1rem;

  @media screen and (min-width: 550px) {
    font-size: 1.5rem;
  }
`;

const Descripcion = styled.p`
  padding-left: 5%;
  padding-right: 5%;
  text-align: center;
  margin-bottom: 1rem;
  font-weight: 500;
  font-family: "Poppins", sans-serif;

  font-weight: 600;
  line-height: 1.75rem;
`;

const ContenedorIframe = styled.div`
  position: relative;
  width: 80%;
  padding-bottom: 45%; /* Proporción de 16:9 (9 / 16 * 100) */
  overflow: hidden;
  margin-bottom: 1rem;
  border-radius: 15px;
  border: 4px solid ${(props) => props.color};
`;
const Iframe = styled.iframe`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;

const SpanDescripcion = styled.span`
  color: white;
  font-weight: 700;
  font-family: "Carter", sans-serif;
  border-bottom: 2px solid;
  text-shadow: -2px -2px 0 black, 2px -2px 0 black, -2px 2px 0 black,
    2px 2px 0 black;
  margin-right: 15px;
`;

const ContenedorSlider = styled.div`
  width: 100%;
  margin-bottom: 2rem;
  border-top: 3px solid white;
`;

const WatchVideo = () => {
  const params = useParams();
  const [categorias, setCategorias] = useState([]);
  const [videos, setVideos] = useState([]);

  const [id, setId] = useState(0);

  useEffect(() => {
    consultaAPI("videos", setVideos);
    consultaAPI("categorias", setCategorias);
    setId(params.id);
  }, [params]);

  if (videos.length === 0 || categorias.length === 0) {
    return (
      <>
        <LoaderSection>
          <p>⏳ Cargando data ...</p>
          <img
            src={process.env.PUBLIC_URL + "/img/giphy.gif"}
            alt="Cargando data Gif"
          />
        </LoaderSection>
      </>
    );
  } else {
    try {
      const videosFiltrados = videos.filter((elemento) => {
        return elemento.id.toString() === id;
      })[0];

      const { categoria, descripcion, imagen, url, titulo } = videosFiltrados;
      const color = categorias.filter(
        (elemento) => elemento.categoria === categoria
      )[0].color;

      return (
        <>
          {
            <Contenedor color={color}>
              <Titulo>{titulo}</Titulo>

              <Descripcion>
                <SpanDescripcion>
                  Descripción
                  <img
                    style={{ width: "3rem", marginBottom: "-1rem" }}
                    src="https://img.icons8.com/clouds/100/right.png"
                    alt="right"
                  />
                  {":"}
                </SpanDescripcion>

                {descripcion}
              </Descripcion>
              <ContenedorIframe color={color}>
                <Iframe
                  src={url}
                  title="YouTube video player"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                ></Iframe>
              </ContenedorIframe>
              <ContenedorSlider>
                <Titulo>Videos Relacionados 🤓</Titulo>
                <ContenedorCardVideos
                  videosCategoria={videos.filter(
                    (ObjetoVideo) =>
                      ObjetoVideo.categoria.toLowerCase() ===
                      categoria.toLowerCase()
                  )}
                  categoriacolor={color}
                />
              </ContenedorSlider>
            </Contenedor>
          }
        </>
      );
    } catch (error) {
      return <Error404 />;
    }
  }
};

export default WatchVideo;

/*
const { categoria, descripcion, imagen, url, titulo } = dataVideo;
ContextoData().filter((elemento) => {
        return elemento.id.toString() === id;
      })[0]


<h1>{titulo}</h1>
        <p>{descripcion}</p>
        <iframe
          width="560"
          height="315"
          src={url}
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>*/
