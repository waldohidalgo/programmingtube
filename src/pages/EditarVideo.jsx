import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { consultaAPI, editAPIPost } from "../api/apiJsonServer";
import { useNavigate } from "react-router-dom";
import LoaderSection from "../components/LoaderSection";
import styled from "styled-components";
import { CampoFormulario } from "../components/CamposFormulario";
import { ListaOpciones } from "../components/CamposFormulario";
import { DescripcionTextArea } from "../components/CamposFormulario";
import Boton from "../components/Boton";
import { firstLetterCapital } from "../funcionesUtiles";
import { consultaAPIYoutube } from "../api/apiyoutube";
import { idVideoYoutube } from "../api/apiyoutube";
import Swal from "sweetalert2";
import Error404 from "./Error404";

const Contenedor = styled.section`
  display: flex;
  justify-content: center;

  padding-top: 1rem;
  padding-bottom: 1rem;
  background-color: #8bb7f0;
`;

const FormularioAddVideo = styled.form`
  background-color: white;
  padding-top: 1rem;
  padding-bottom: 1rem;
  width: 90%;
  border-radius: 15px;
  box-shadow: 7px 8px 5px -1px rgba(0, 0, 0, 0.62);
  padding-left: 5%;
  padding-right: 5%;
  box-sizing: border-box;

  @media (min-width: 550px) {
    width: 80%;
  }

  @media (min-width: 768px) {
    width: 60%;
  }
`;

const TituloFormularioVideo = styled.h1`
  text-align: center;
  font-weight: 800;
  font-family: "Helvetica Neue", sans-serif;
  font-size: 18px;
  padding-bottom: 1rem;
`;

const ContenedorBotones = styled.div`
  padding-top: 1rem;
  display: flex;
  flex-direction: column;
  row-gap: 1rem;
  align-items: center;

  @media (min-width: 768px) and (max-width: 995px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  @media (min-width: 996px) {
    flex-direction: row;
    justify-content: space-between;
  }
`;

const EditarVideo = () => {
  const params = useParams();
  const id = params.id;
  const [videos, setVideos] = useState([]);
  const [categorias, setCategorias] = useState([]);
  const [videoEditar, setVideoEditar] = useState([]);
  const [nombre, setNombre] = useState("");
  const [url, setURL] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const [categoria, setCategoria] = useState("Selecciona una opción");
  const [emptyVideo, setEmtpyVideo] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    consultaAPI("videos", setVideos).catch(() => {
      setVideos([]);
      setEmtpyVideo(true);
    });
    consultaAPI("categorias", setCategorias).catch(() => {
      setCategorias([]);
    });
  }, []);

  useEffect(() => {
    if (videos.length > 0) {
      const arrayId = videos.map((objeto) => objeto.id);
      if (arrayId.includes(parseInt(id, 10))) {
        const arrayVideoEditar = videos.filter((objeto) => {
          if (objeto.id === parseInt(id, 10)) {
            return true;
          } else {
            return false;
          }
        });
        setVideoEditar(arrayVideoEditar[0]);
        setNombre(arrayVideoEditar[0].titulo);
        setDescripcion(arrayVideoEditar[0].descripcion);
        setURL(arrayVideoEditar[0].url);
        setCategoria(firstLetterCapital(arrayVideoEditar[0].categoria));
      } else {
        navigate("/error-404");
      }
    }
  }, [videos, id]);

  if (videoEditar.length === 0) {
    if (emptyVideo) {
      return <Error404 />;
    } else {
      return <LoaderSection />;
    }
  } else {
    const handleCleanFormulario = () => {
      setNombre("");
      setDescripcion("");
      setURL("");
      setCategoria("Selecciona una opción");
    };

    const handleSubmitFormEdit = (e) => {
      e.preventDefault();

      consultaAPIYoutube(url)
        .then((response) => {
          const data = response.data;
          if (data.items.length > 0) {
            const identificadorVideoYoutube = idVideoYoutube(url);

            const objetoEdicion = {
              id,
              titulo: nombre,
              categoria: categoria.toLowerCase(),
              url: `https://www.youtube.com/embed/${identificadorVideoYoutube}`,
              imagen: `https://i3.ytimg.com/vi/${identificadorVideoYoutube}/maxresdefault.jpg`,
              descripcion,
            };

            editAPIPost("videos", objetoEdicion).catch(() =>
              console.log("Ha ocurrido un error en el POST del nuevo video")
            );

            Swal.fire({
              title: "¡ Éxito !",
              text: "Se ha editado el video",
              imageUrl: "/img/minions.gif", // URL de la imagen
              imageAlt: "Success", // Texto alternativo de la imagen
              showCancelButton: false, // Sin botón de cancelar
              confirmButtonText: "OK", // Texto del botón OK
              confirmButtonColor: "#4CAF50", // Color verde para el botón OK
            });

            consultaAPI("videos", setVideos).catch(() => {
              setVideos([]);
              setEmtpyVideo(true);
            });

            return;
          } else {
            Swal.fire({
              title: "¡ Error !",
              text: "El video no es válido o no está activo",
              imageUrl: "/img/car-toy.gif", // URL de la imagen
              imageAlt: "Error", // Texto alternativo de la imagen
              showCancelButton: false, // Sin botón de cancelar
              confirmButtonText: "OK", // Texto del botón OK
              confirmButtonColor: "#FF0000", // Color verde para el botón OK
            });
            return;
          }
        })
        .catch((error) => {
          Swal.fire({
            title: "¡ Error !",
            text: "La URL ingresada no corresponde a un video de youtube o no es un video válido.",
            imageUrl: "/img/car-toy.gif", // URL de la imagen
            imageAlt: "Error", // Texto alternativo de la imagen
            showCancelButton: false, // Sin botón de cancelar
            confirmButtonText: "OK", // Texto del botón OK
            confirmButtonColor: "#FF0000", // Color verde para el botón OK
          });
        });
    };
    return (
      <>
        <Contenedor>
          <FormularioAddVideo onSubmit={handleSubmitFormEdit}>
            <TituloFormularioVideo>Editar Video ✏️</TituloFormularioVideo>
            <CampoFormulario
              type="text"
              titulo="Nombre del Video"
              valor={nombre}
              setValue={setNombre}
            />
            <CampoFormulario
              type="text"
              titulo="URL del Video de Youtube"
              valor={url}
              setValue={setURL}
            />
            <ListaOpciones
              titulo={"Categoría"}
              categorias={categorias.map((categoriasObjeto) =>
                firstLetterCapital(categoriasObjeto.categoria)
              )}
              valor={categoria}
              setCategoria={setCategoria}
            />
            <DescripcionTextArea
              titulo="Descripción del Video"
              setValue={setDescripcion}
              valor={descripcion}
            />
            <ContenedorBotones>
              <Boton
                className="botonSaveAddVideo"
                title="Guardar Video"
                icono="iconoSave"
              />
              <Boton
                className="botonLimpiarAddVideo"
                title="Limpiar Formulario Video"
                icono="iconoClean"
                onClick={handleCleanFormulario}
              />
            </ContenedorBotones>
          </FormularioAddVideo>
        </Contenedor>
      </>
    );
  }
};

export default EditarVideo;
