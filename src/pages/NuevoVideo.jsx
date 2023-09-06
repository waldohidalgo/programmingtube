import { FormularioVideoCategoria } from "../components/Formulario";
import { useEffect, useState } from "react";

import {
  addAPIPost,
  consultaAPI,
  deleteAPIPost,
  editAPIPost,
} from "../api/apiJsonServer";

import LoaderSection from "../components/LoaderSection";
import { consultaAPIYoutube, idVideoYoutube } from "../api/apiyoutube";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const PaginaNuevoVideo = () => {
  const [categorias, setCategorias] = useState([]);
  const [videos, setVideos] = useState([]);
  const [emptyVideo, setEmtpyVideo] = useState(false);
  const [emptyCategoria, setEmtpyCategoria] = useState(false);
  const [idArray, setIdArray] = useState([]);
  const [categoria, setCategoria] = useState("Selecciona una opción");
  const [cambioCategoria, setCambioCategoria] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    consultaAPI("categorias", setCategorias).catch(() => {
      setEmtpyVideo(true);
    });
    consultaAPI("videos", setVideos).catch(() => {
      setEmtpyCategoria(true);
    });
  }, []);

  useEffect(() => {
    consultaAPI("categorias", setCategorias)
      .then(() => {})
      .catch(() => {
        console.log("Error de GET de Agregar Categoria");
      });
  }, [cambioCategoria]);

  useEffect(() => {
    setIdArray(videos.map((objeto) => objeto.id));
  }, [videos]);

  useEffect(() => {
    if (categorias.length === 0 && idArray.length > 0) {
      idArray.forEach((id) => {
        deleteAPIPost("videos", id).catch(() => console.log("error de delete"));
      });
      setIdArray([]);
      setCategoria("Selecciona una opción");
      setEmtpyCategoria(true);
      setEmtpyVideo(true);
    }
    if (categorias.length === 0 && idArray.length === 0) {
      setEmtpyCategoria(true);
      setEmtpyVideo(true);
    }
  }, [categorias, idArray]);

  const handleDataFormAddCategoría = (dataCategoria) => {
    const {
      id,
      nombreCategoria: categoria,
      descripcionCategoria: descripcion,
      colorCategoria: color,
    } = dataCategoria;

    if (
      categorias
        .map((objeto) => objeto.categoria.toLowerCase())
        .includes(categoria.toLowerCase())
    ) {
      Swal.fire({
        title: "¡ Advertencia !",
        text: "Nombre de Categoria ya existe",
        imageUrl: "/img/warning.gif", // URL de la imagen
        imageAlt: "Warning", // Texto alternativo de la imagen
        showCancelButton: false, // Sin botón de cancelar
        confirmButtonText: "OK", // Texto del botón OK
        confirmButtonColor: "#FFA500", // Color verde para el botón OK
      });
    } else if (
      categorias
        .map((objeto) => objeto.descripcion.toLowerCase())
        .includes(descripcion.toLowerCase())
    ) {
      Swal.fire({
        title: "¡ Advertencia !",
        text: "Descripción de Categoría ya existe",
        imageUrl: "/img/warning.gif", // URL de la imagen
        imageAlt: "Warning", // Texto alternativo de la imagen
        showCancelButton: false, // Sin botón de cancelar
        confirmButtonText: "OK", // Texto del botón OK
        confirmButtonColor: "#FFA500", // Color verde para el botón OK
      });
    } else if (
      categorias
        .map((objeto) => objeto.color.toLowerCase())
        .includes(color.toLowerCase())
    ) {
      Swal.fire({
        title: "¡ Advertencia !",
        text: "Color de Categoría ya existe",
        imageUrl: "/img/warning.gif", // URL de la imagen
        imageAlt: "Warning", // Texto alternativo de la imagen
        showCancelButton: false, // Sin botón de cancelar
        confirmButtonText: "OK", // Texto del botón OK
        confirmButtonColor: "#FFA500", // Color verde para el botón OK
      });
    } else {
      const newObjeto = {
        id,
        categoria: categoria.toLowerCase(),
        descripcion,
        color,
      };
      addAPIPost("categorias", newObjeto)
        .then(() => {})
        .catch((error) => console.log(error));

      Swal.fire({
        title: "¡ Éxito !",
        text: "Has creado de manera exitosa una nueva categoría 😀. Ahora crea nuevos videos para esa categoría",
        imageUrl: "/img/minions.gif", // URL de la imagen
        imageAlt: "Success", // Texto alternativo de la imagen
        showCancelButton: false, // Sin botón de cancelar
        confirmButtonText: "OK", // Texto del botón OK
        confirmButtonColor: "#4CAF50", // Color verde para el botón OK
      });
      setEmtpyCategoria(false);
      setCambioCategoria(!cambioCategoria);
    }
  };

  const handleDeleteCategory = (id) => {
    deleteAPIPost("categorias", id)
      .then(() => {})
      .catch(() => console.log("Error en borrar categoria"));
    Swal.fire({
      title: "¡ Éxito !",
      text: "Has eliminado la categoria seleccionada",
      imageUrl: "/img/minions.gif", // URL de la imagen
      imageAlt: "Success", // Texto alternativo de la imagen
      showCancelButton: false, // Sin botón de cancelar
      confirmButtonText: "OK", // Texto del botón OK
      confirmButtonColor: "#4CAF50", // Color verde para el botón OK
    });
    setCambioCategoria(!cambioCategoria);
  };

  const handleEditCategoryForm = (objeto, handleCleanFormularioCategoria) => {
    const { id, categoria, descripcion, color } = objeto;

    if (categoria === "" && descripcion === "") {
      Swal.fire({
        title: "¡ Advertencia !",
        text: "No puedes crear categorías sin nombre ni descripción",
        imageUrl: "/img/warning.gif", // URL de la imagen
        imageAlt: "Warning", // Texto alternativo de la imagen
        showCancelButton: false, // Sin botón de cancelar
        confirmButtonText: "OK", // Texto del botón OK
        confirmButtonColor: "#FFA500", // Color verde para el botón OK
      });
      return;
    }
    if (!categorias.map((objetoCategoria) => objetoCategoria.id).includes(id)) {
      //en este código le estoy pasando el id ===0
      Swal.fire({
        title: "¡ Advertencia !",
        text: "La Categoría a editar no existe. Para editar categorias, selecciona alguna categoría de la tabla haciendo click en editar y a continuación editar los campos mostrados en el formulario. Finalizar haciendo click en el botón Editar Categoría.",
        imageUrl: "/img/warning.gif", // URL de la imagen
        imageAlt: "Warning", // Texto alternativo de la imagen
        showCancelButton: false, // Sin botón de cancelar
        confirmButtonText: "OK", // Texto del botón OK
        confirmButtonColor: "#FFA500", // Color verde para el botón OK
      });
    } else {
      editAPIPost("categorias", objeto)
        .then(() => {})
        .catch(() => console.log("Ha ocurrido un error en el PUT"));

      Swal.fire({
        title: "¡ Éxito !",
        text: `Felicidades has editado la categoría ${
          categorias.filter((objetoCategoria) => objetoCategoria.id === id)[0]
            .categoria
        }`,
        imageUrl: "/img/minions.gif", // URL de la imagen
        imageAlt: "Success", // Texto alternativo de la imagen
        showCancelButton: false, // Sin botón de cancelar
        confirmButtonText: "OK", // Texto del botón OK
        confirmButtonColor: "#4CAF50", // Color verde para el botón OK
      });

      setCambioCategoria(!cambioCategoria);

      handleCleanFormularioCategoria();
    }
  };

  const handleDataFormAddVideo = (dataVideo) => {
    const { nombreVideo, url, categoria, descripcionVideo } = dataVideo;

    consultaAPIYoutube(url)
      .then((response) => {
        const data = response.data;
        if (data.items.length > 0) {
          const identificadorVideoYoutube = idVideoYoutube(url);

          const nuevoVideo = {
            id: idArray[idArray.length - 1] + 1,
            titulo: nombreVideo,
            categoria: categoria.toLowerCase(),
            descripcion: descripcionVideo,
            url: `https://www.youtube.com/embed/${identificadorVideoYoutube}`,
            imagen: `https://i3.ytimg.com/vi/${identificadorVideoYoutube}/maxresdefault.jpg`,
          };

          addAPIPost("videos", nuevoVideo).catch(() =>
            console.log("Ha ocurrido un error en el POST del nuevo video")
          );
          Swal.fire({
            title: "¡ Éxito !",
            text: "Se ha guardado el video",
            imageUrl: "/img/minions.gif", // URL de la imagen
            imageAlt: "Success", // Texto alternativo de la imagen
            showCancelButton: false, // Sin botón de cancelar
            confirmButtonText: "OK", // Texto del botón OK
            confirmButtonColor: "#4CAF50", // Color verde para el botón OK
          }).then((result) => {
            if (result.isConfirmed) {
              Swal.fire({
                title: "¿Deseas seguir agregando videos?",
                imageUrl: "/img/question.gif",
                showDenyButton: true,
                showCancelButton: false,
                confirmButtonText: "Sí😁",
                confirmButtonColor: "#4CAF50",
                denyButtonText: `No, quiero ir a Inicio`,
              }).then((result) => {
                if (result.isDenied) {
                  navigate("/");
                }
              });
            }
          });
          setEmtpyVideo(false);
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
        }
      })
      .catch((error) => {
        Swal.fire({
          title: "¡ Error !",
          text: "La URL ingresada no corresponde a video o no es un video válido.",
          imageUrl: "/img/car-toy.gif", // URL de la imagen
          imageAlt: "Error", // Texto alternativo de la imagen
          showCancelButton: false, // Sin botón de cancelar
          confirmButtonText: "OK", // Texto del botón OK
          confirmButtonColor: "#FF0000", // Color verde para el botón OK
        });
      });

    setIdArray([...idArray, idArray[idArray.length - 1] + 1]);
  };

  if (
    (categorias.length === 0 || idArray.length === 0) &&
    !emptyVideo &&
    (categorias.length === 0 || idArray.length === 0) &&
    !emptyCategoria
  ) {
    return <LoaderSection />;
  } else {
    return (
      <>
        <FormularioVideoCategoria
          categoriasArray={categorias}
          handleDataFormAddVideo={handleDataFormAddVideo}
          handleDataFormAddCategoría={handleDataFormAddCategoría}
          handleDeleteCategory={handleDeleteCategory}
          handleEditCategoryForm={handleEditCategoryForm}
          categoria={categoria}
          setCategoria={setCategoria}
        />
      </>
    );
  }
};

export default PaginaNuevoVideo;
