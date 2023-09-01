import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import { useState, useEffect } from "react";
import LoaderSection from "../components/LoaderSection";
import { consultaAPI } from "../api/apiJsonServer";
import CardVideo from "../components/SeccionesCategorias/CardVideo";
import { firstLetterCapital } from "../funcionesUtiles";
import AmpolletaSelectorTheme from "../components/Ampolleta";
import { temaClaro, temaOscuro } from "../components/UI/temas";
import { ThemeProvider } from "styled-components";

const ContenedorVideosCategoria = styled.section`
  padding-top: 1rem;
  padding-bottom: 1rem;
  background-color: ${(props) => {
    return props.theme.temaSeleccionado.backgroundColor;
  }};
  position: relative;
`;

const SpanCategoriaTitulo = styled.span`
  font-weight: 700;
`;

const SpanCategoriaTituloCategoria = styled.span`
  font-weight: 700;

  font-family: "Carter", sans-serif;
  text-decoration-line: underline;
  text-decoration-thickness: 4px;
  text-decoration-color: ${(props) => props.color};
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

const ContenedorAllVideos = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  padding-left: 5%;
  padding-right: 5%;
  box-sizing: border-box;
  row-gap: 1rem;
  justify-content: space-evenly;
`;

const ContenedorTitulo = styled.div`
  text-align: center;
  padding-top: 2rem;
  padding-bottom: 3rem;
  font-size: 2rem;
  padding-left: 15px;
  padding-right: 15px;
  color: ${(props) => {
    return props.theme.temaSeleccionado.textColor;
  }};
  @media screen and (min-width: 550px) and (max-width: 767px) {
    font-size: 2.5rem;
  }
  @media screen and (min-width: 768px) {
    font-size: 3rem;
  }
`;

const ImagenTitulo = styled.img`
  width: 2rem;
  margin-bottom: -4px;
  padding-right: 5px;
  @media screen and (min-width: 550px) and (max-width: 767px) {
    width: 2rem;
  }
  @media screen and (min-width: 768px) {
    width: 3rem;
  }
`;

const Categorias = () => {
  const params = useParams();
  const [temaSeleccionado, setTemaSeleccionado] = useState(temaOscuro);

  const { categoria } = params;
  const [categorias, setCategorias] = useState([]);
  const [videos, setVideos] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const buildPathUrlCategoria = `categorias?categoria=${categoria}`;
    consultaAPI(buildPathUrlCategoria, setCategorias).catch(() => {
      navigate("no-existe-data");
    });

    const buildPathUrlVideos = `videos?categoria=${categoria}`;
    consultaAPI(buildPathUrlVideos, setVideos).catch(() => {
      navigate("/error-404");
    });
  }, [categoria, navigate]);

  if (categorias.length === 0 || videos.length === 0) {
    return <LoaderSection />;
  } else {
    const handleChangeTheme = (nombreTema) => {
      if (nombreTema === "temaOscuro") {
        setTemaSeleccionado(temaClaro);
      } else {
        setTemaSeleccionado(temaOscuro);
      }
    };
    return (
      <>
        <ThemeProvider theme={{ temaSeleccionado }}>
          <ContenedorVideosCategoria>
            <AmpolletaSelectorTheme
              theme={temaSeleccionado}
              handleChangeTheme={handleChangeTheme}
            />
            <ContenedorTitulo>
              <SpanCategoriaTitulo>
                <ImagenTitulo
                  src="https://img.icons8.com/emoji/48/books-emoji.png"
                  alt="books-emoji"
                />
                Categoría:{" "}
              </SpanCategoriaTitulo>
              <SpanCategoriaTituloCategoria color={categorias[0].color}>
                {firstLetterCapital(categoria)}
              </SpanCategoriaTituloCategoria>
            </ContenedorTitulo>
            <ContenedorAllVideos>
              {videos.map((objeto, index) => {
                return (
                  <ContenedorVideo key={index}>
                    <CardVideo
                      video={objeto}
                      categoriacolor={categorias[0].color}
                    />
                  </ContenedorVideo>
                );
              })}
            </ContenedorAllVideos>
          </ContenedorVideosCategoria>
        </ThemeProvider>
      </>
    );
  }
};

export default Categorias;
