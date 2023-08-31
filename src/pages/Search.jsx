import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { styled } from "styled-components";
import { consultaAPI } from "../api/apiJsonServer";
import LoaderSection from "../components/LoaderSection";
import CardVideo from "../components/SeccionesCategorias/CardVideo";

const TituloParagraph = styled.p`
  padding-top: 2rem;
  padding-bottom: 3rem;
  font-family: "Roboto", sans-serif;
  font-weight: 600;
  text-align: center;
  font-size: 2rem;
  .destaque {
    font-family: "Carter", sans-serif;
    text-decoration: underline;
    text-decoration-thickness: 4px;
    text-decoration-color: red;
  }
`;

const ContenedorAllVideos = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  padding-left: 5%;
  padding-right: 5%;
  box-sizing: border-box;
  row-gap: 1rem;
  justify-content: space-evenly;
  padding-bottom: 3rem;
`;

const ContenedorVideo = styled.div`
  width: 100%;

  @media screen and (min-width: 550px) and (max-width: 767px) {
    width: 50%;
  }
  @media screen and (min-width: 768px) {
    width: 25%;
  }
`;

const ContenedorNotFound = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  .contenedor_notfound_titulo {
    text-align: center;
    width: 100%;
    font-family: "Carter", sans-serif;
    font-size: 1rem;
    padding-bottom: 2rem;

    @media screen and (min-width: 550px) {
      font-size: 2rem;
    }
  }

  .contenedor_notfound_imagen {
    width: 80%;
    border-radius: 15px;
    border: 5px solid yellow;
    @media screen and (min-width: 550px) {
      width: 100%;
    }
  }
`;
const SearchPage = () => {
  const navigate = useNavigate();

  const location = useLocation();
  const [videos, setVideos] = useState([]);
  const [categorias, setCategorias] = useState([]);

  const myParamSearch = new URLSearchParams(location.search).get("search");

  useEffect(() => {
    if (myParamSearch) {
      consultaAPI("videos", setVideos).catch(() =>
        console.log("Error de GET videos de search")
      );
      consultaAPI("categorias", setCategorias).catch(() =>
        console.log("Error de GET categorias de search")
      );
    } else {
      navigate("/error-404");
    }
  }, [myParamSearch, navigate]);

  if (videos.length === 0 || categorias.length === 0) {
    return (
      <>
        <div>
          <TituloParagraph>
            Se ha buscado la palabra:{" "}
            <span className="destaque">{myParamSearch}</span>
          </TituloParagraph>
          {<LoaderSection />}
        </div>
      </>
    );
  } else {
    const videosFiltrados = videos.filter((objetoVideo) => {
      if (
        objetoVideo.titulo.toLowerCase().includes(myParamSearch.toLowerCase())
      ) {
        return true;
      } else {
        return false;
      }
    });

    return (
      <>
        <div>
          <TituloParagraph>
            Se ha buscado la palabra:{" "}
            <span className="destaque">{myParamSearch}</span>
          </TituloParagraph>
          <ContenedorAllVideos>
            {videosFiltrados.length > 0 ? (
              videosFiltrados.map((objeto, index) => {
                return (
                  <ContenedorVideo key={index}>
                    <CardVideo
                      video={objeto}
                      categoriacolor={categorias[0].color}
                    />
                  </ContenedorVideo>
                );
              })
            ) : (
              <ContenedorNotFound>
                <h1 className="contenedor_notfound_titulo">
                  🥺No hay resultados para esta búsqueda
                </h1>
                <img
                  src={process.env.PUBLIC_URL + "/img/sad.gif"}
                  alt="Búsqueda sin Resultados"
                  className="contenedor_notfound_imagen"
                />
              </ContenedorNotFound>
            )}
          </ContenedorAllVideos>
        </div>
      </>
    );
  }
};

export default SearchPage;
