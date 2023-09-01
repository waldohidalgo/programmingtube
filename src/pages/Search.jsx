import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { styled } from "styled-components";
import { consultaAPI } from "../api/apiJsonServer";
import LoaderSection from "../components/LoaderSection";
import CardVideo from "../components/SeccionesCategorias/CardVideo";
import AmpolletaSelectorTheme from "../components/Ampolleta";
import { temaClaro, temaOscuro } from "../components/UI/temas";
import { ThemeProvider } from "styled-components";

const TituloParagraph = styled.p`
  padding-top: 1rem;
  padding-bottom: 1rem;
  font-family: "Roboto", sans-serif;
  font-weight: 600;
  text-align: center;
  font-size: 2rem;
  color: ${(props) => {
    if (!props.theme?.temaSeleccionado?.textColor) {
      return temaClaro.textColor;
    }
    return props.theme.temaSeleccionado.textColor;
  }};
  .destaque {
    font-family: "Carter", sans-serif;
    text-decoration: underline;
    text-decoration-thickness: 4px;
    text-decoration-color: red;
  }
`;
const SubTituloParagraph = styled.p`
  padding-bottom: 1rem;
  font-family: "Roboto", sans-serif;
  font-weight: 600;
  text-align: center;
  font-size: 1.5rem;
  color: ${(props) => {
    if (!props.theme?.temaSeleccionado?.textColor) {
      return temaClaro.textColor;
    }
    return props.theme.temaSeleccionado.textColor;
  }};
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
    color: ${(props) => {
      return props.theme.temaSeleccionado.textColor;
    }};

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

const ContenedorBusqueda = styled.section`
  position: relative;
  background-color: ${(props) => {
    return props.theme.temaSeleccionado.backgroundColor;
  }};
`;
const SearchPage = () => {
  const [temaSeleccionado, setTemaSeleccionado] = useState(temaOscuro);
  const navigate = useNavigate();

  const location = useLocation();
  const [videos, setVideos] = useState([]);
  const [categorias, setCategorias] = useState([]);

  const myParamSearch = new URLSearchParams(location.search).get("search");

  useEffect(() => {
    if (myParamSearch) {
      consultaAPI("videos", setVideos).catch(() => {
        navigate("/no-existe-data");
      });
      consultaAPI("categorias", setCategorias).catch(() => {
        navigate("/no-existe-data");
      });
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
          <ContenedorBusqueda>
            <AmpolletaSelectorTheme
              theme={temaSeleccionado}
              handleChangeTheme={handleChangeTheme}
            />
            <TituloParagraph>
              Se ha buscado la palabra:{" "}
              <span className="destaque">{myParamSearch}</span>
            </TituloParagraph>
            <SubTituloParagraph>
              Esta búsqueda arrojo:{" "}
              <span className="destaque">{videosFiltrados.length}</span>{" "}
              resultados
            </SubTituloParagraph>
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
          </ContenedorBusqueda>
        </ThemeProvider>
      </>
    );
  }
};

export default SearchPage;
