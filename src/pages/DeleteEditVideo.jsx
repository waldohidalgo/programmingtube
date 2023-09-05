import styled from "styled-components";
import { useState, useEffect } from "react";
import { consultaAPI, deleteAPIPost } from "../api/apiJsonServer";
import LoaderSection from "../components/LoaderSection";
import CardVideo from "../components/SeccionesCategorias/CardVideo";
import { ListaOpciones } from "../components/CamposFormulario";
import { firstLetterCapital } from "../funcionesUtiles";
import { FaRegWindowClose } from "react-icons/fa";
import { PiPencilFill } from "react-icons/pi";
import { useNavigate } from "react-router-dom";
import AmpolletaSelectorTheme from "../components/Ampolleta";
import { ThemeProvider } from "styled-components";
import { temaClaro, temaOscuro } from "../components/UI/temas";
import swal from "sweetalert";
import Swal from "sweetalert2";

const Contenedor = styled.section`
  padding-top: 2rem;
  padding-bottom: 2rem;
  padding-left: 5%;
  padding-right: 5%;
  position: relative;
  background-color: ${(props) => {
    return props.theme.temaSeleccionado.backgroundColor;
  }};

  .contenedor__imagen-titulo {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 2rem;

    .contenedor__imagen-titulo_spin {
      padding: 5px;
      background-color: white;
      width: 2.5rem;
      height: 2.5rem;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 50%;
      @media screen and (min-width: 550px) {
        width: 3rem;
        height: 3rem;
      }

      img {
        width: 2rem;
        height: 2rem;

        @media screen and (min-width: 550px) {
          width: 2.5rem;
          height: 2.5rem;
        }
      }
    }
  }
  .contenedor__descripcion {
    text-align: center;
    font-family: "Inter", sans-serif;
    line-height: 1.5rem;
    margin-bottom: 2rem;
    color: ${(props) => props.theme.temaSeleccionado.textColor};
  }

  .contenedor__imagen-titulo__titulo {
    text-align: center;

    font-family: "Carter", sans-serif;
    text-decoration-line: underline;
    text-decoration-color: green;
    text-decoration-thickness: 5px;
    font-size: 2rem;
    color: ${(props) => props.theme.temaSeleccionado.textColor};
    @media screen and (min-width: 550px) {
      font-size: 3rem;
    }
  }

  .cantidadVideosSeleccionados {
    text-align: center;
    margin-bottom: 1rem;
    font-weight: 700;
    color: ${(props) => props.theme.temaSeleccionado.textColor};
    .realce {
      font-size: 1.5rem;
      color: red;
      font-family: "Carter", sans-serif;
      text-decoration: underline;
      text-decoration-color: green;
      text-decoration-thickness: 5px;
    }
  }
`;

const ContenedorVideo = styled.div`
  width: 100%;
  position: relative;

  @media screen and (min-width: 550px) and (max-width: 767px) {
    width: 50%;
  }
  @media screen and (min-width: 768px) {
    width: 25%;
  }

  .contenedor__botones-edit-delete {
    position: absolute;
    top: 15px;
    right: 15px;
    z-index: 1;

    .contenedor__botones-edit-delete_boton {
      background-color: lightsalmon;
      border-radius: 15px;
      padding: 5px;
      border: 2px solid yellow;
      &:hover {
        cursor: pointer;
        background-color: blue;
        .contenedor__botones-edit-delete_boton-icono {
          color: white;
        }
      }
    }
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

const EditDeleteVideoPage = () => {
  const [videos, setVideos] = useState([]);
  const [categorias, setCategorias] = useState([]);
  const navigate = useNavigate();
  const [temaSeleccionado, setTemaSeleccionado] = useState(temaOscuro);
  const [categoriaSeleccionada, setCategoriaSeleccionada] = useState(
    "Selecciona una opción"
  );
  const [videosSeleccionados, setVideosSeleccionados] = useState([]);

  useEffect(() => {
    consultaAPI("videos", setVideos).catch(() => {
      navigate("/no-existe-data");
    });
  }, []);

  useEffect(() => {
    consultaAPI("categorias", setCategorias).catch(() => {
      navigate("/no-existe-data");
    });
  }, []);

  useEffect(() => {
    if (
      categoriaSeleccionada !== "Selecciona una opción" &&
      categoriaSeleccionada !== "Todos"
    ) {
      const nuevosVideos = videos.filter((objeto) => {
        if (objeto.categoria === categoriaSeleccionada.toLowerCase()) {
          return true;
        } else {
          return false;
        }
      });
      setVideosSeleccionados(nuevosVideos);
    }

    if (categoriaSeleccionada === "Todos") {
      setVideosSeleccionados(videos);
    }
  }, [categoriaSeleccionada, videos]);

  const handleDelete = (objetoVideo) => {
    deleteAPIPost("videos", objetoVideo.id).catch(() =>
      console.log("Ha ocurrido un error en la eliminación")
    );
    Swal.fire({
      title: "¡ Éxito !",
      text: "Se ha eliminado el video",
      imageUrl: "/img/minions.gif", // URL de la imagen
      imageAlt: "Success", // Texto alternativo de la imagen
      showCancelButton: false, // Sin botón de cancelar
      confirmButtonText: "OK", // Texto del botón OK
      confirmButtonColor: "#4CAF50", // Color verde para el botón OK
    });
    consultaAPI("videos", setVideos).catch(() => navigate("/no-existe-data"));
  };

  const handleEdit = (objeto) => {
    navigate(`/editar-video/${objeto.id}`);
  };

  if (videos.length === 0 || categorias.length === 0) {
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
          <Contenedor>
            <div className="contenedor__imagen-titulo">
              <div className="contenedor__imagen-titulo_spin">
                <img
                  className="contenedor__imagen-titulo__img"
                  src="/img/lapizspin.gif"
                  alt="pencil spinner"
                />
              </div>

              <h1 className="contenedor__imagen-titulo__titulo">
                Editar o Eliminar Videos
              </h1>
              <AmpolletaSelectorTheme
                theme={temaSeleccionado}
                handleChangeTheme={handleChangeTheme}
              />
            </div>
            <p className="contenedor__descripcion">
              En esta página tú podrás editar o eliminar videos de modo de crear
              tu propia colección de videos. Recuerda que este proyecto utiliza
              una
              <span style={{ fontWeight: 700 }}> FAKE API</span> y la data
              cambiará pero no será persistente. Solo podrás probar la
              aplicación.
            </p>{" "}
            <ListaOpciones
              nuevoCampo="Todos"
              titulo={"Categoría"}
              categorias={categorias.map((categoriasObjeto) =>
                firstLetterCapital(categoriasObjeto.categoria)
              )}
              valor={categoriaSeleccionada}
              setCategoria={setCategoriaSeleccionada}
            />
            <p className="cantidadVideosSeleccionados">
              Cantidad de Videos Filtrados:{" "}
              <span className="realce">{videosSeleccionados.length}</span>
            </p>
            <ContenedorAllVideos>
              {videosSeleccionados.map((objeto, index) => {
                return (
                  <ContenedorVideo key={index}>
                    <div className="contenedor__botones-edit-delete">
                      <div
                        className="contenedor__botones-edit-delete_boton"
                        onClick={() => handleDelete(objeto)}
                      >
                        <FaRegWindowClose
                          className="contenedor__botones-edit-delete_boton-icono"
                          title="Eliminar"
                        />
                      </div>
                      <div
                        className="contenedor__botones-edit-delete_boton"
                        onClick={() => handleEdit(objeto)}
                      >
                        <PiPencilFill
                          className="contenedor__botones-edit-delete_boton-icono"
                          title="Editar"
                        />
                      </div>
                    </div>
                    <CardVideo
                      video={objeto}
                      categoriacolor={categorias[0].color}
                    />
                  </ContenedorVideo>
                );
              })}
            </ContenedorAllVideos>
          </Contenedor>
        </ThemeProvider>
      </>
    );
  }
};

export default EditDeleteVideoPage;
