import { FormularioVideoCategoria } from "../components/Formulario";
import { useEffect, useState } from "react";

import {
  addAPIPost,
  consultaAPI,
  deleteAPIPost,
  editAPIPost,
} from "../api/apiJsonServer";
import swal from "sweetalert";
import LoaderSection from "../components/LoaderSection";
import { consultaAPIYoutube, idVideoYoutube } from "../api/apiyoutube";

const PaginaNuevoVideo = () => {
  const [categorias, setCategorias] = useState([]);
  const [videos, setVideos] = useState([]);
  const [emptyVideo, setEmtpyVideo] = useState(false);
  const [emptyCategoria, setEmtpyCategoria] = useState(false);

  useEffect(() => {
    consultaAPI("categorias", setCategorias).catch(() => {
      setEmtpyVideo(true);
    });
    consultaAPI("videos", setVideos).catch(() => {
      setEmtpyCategoria(true);
    });
  }, [categorias, videos]);

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
      swal("¡ Advertencia !", "Nombre de Categoria ya existe", "warning");
    } else if (
      categorias
        .map((objeto) => objeto.descripcion.toLowerCase())
        .includes(descripcion.toLowerCase())
    ) {
      swal("¡ Advertencia !", "Descripción de Categoría ya existe", "warning");
    } else if (
      categorias
        .map((objeto) => objeto.color.toLowerCase())
        .includes(color.toLowerCase())
    ) {
      swal("¡ Advertencia !", "Color de Categoría ya existe", "warning");
    } else {
      const newObjeto = { id, categoria, descripcion, color };
      addAPIPost("categorias", newObjeto)
        .then(() => {
          swal(
            "¡ Éxito !",
            "Has creado de manera exitosa una nueva categoría 😀. Ahora crea nuevos videos para esa categoría",
            "success"
          );
          setEmtpyCategoria(false);
          consultaAPI("categorias", setCategorias);
        })
        .catch((error) => console.log(error));
    }
  };

  const handleDeleteCategory = (id) => {
    deleteAPIPost("categorias", id)
      .then(() => {
        swal("¡ Éxito !", "Has eliminado la categoria seleccionada", "success");
        consultaAPI("categorias", setCategorias).catch(() => {
          setEmtpyCategoria(true);
          setCategorias([]);
        });
      })
      .catch(() => console.log("Error en borrar categoria"));
  };

  const handleEditCategoryForm = (objeto, handleCleanFormularioCategoria) => {
    const { id, categoria, descripcion, color } = objeto;

    if (categoria === "" && descripcion === "") {
      swal(
        "¡ Advertencia !",
        "No puedes crear categorías sin nombre ni descripción",
        "warning"
      );
      return;
    }
    if (!categorias.map((objetoCategoria) => objetoCategoria.id).includes(id)) {
      //en este código le estoy pasando el id ===0
      swal(
        "¡ Advertencia !",
        "La Categoría a editar no existe. Para editar categorias, selecciona alguna categoría de la tabla haciendo click en editar y a continuación editar los campos mostrados en el formulario. Finalizar haciendo click en el botón Editar Categoría.",
        "warning"
      );
    } else {
      editAPIPost("categorias", objeto)
        .then(() => {
          swal(
            "¡ Éxito !",
            `Felicidades has editado la categoría ${
              categorias.filter(
                (objetoCategoria) => objetoCategoria.id === id
              )[0].categoria
            }`,
            "success"
          );
        })
        .catch(() => console.log("Ha ocurrido un error en el PUT"));

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
            id: videos.length + 1,
            titulo: nombreVideo,
            categoria: categoria.toLowerCase(),
            descripcion: descripcionVideo,
            url: `https://www.youtube.com/embed/${identificadorVideoYoutube}`,
            imagen: `https://i3.ytimg.com/vi/${identificadorVideoYoutube}/maxresdefault.jpg`,
          };

          addAPIPost("videos", nuevoVideo).catch(() =>
            console.log("Ha ocurrido un error en el POST del nuevo video")
          );
          swal("¡ Éxito !", "Se ha guardado el video", "success");
          setEmtpyVideo(false);
          return;
        } else {
          swal("¡ Error !", "El video no es válido o no está activo.", "error");
          return;
        }
      })
      .catch((error) => {
        swal(
          "¡ Error !",
          "La URL ingresada no corresponde a video o no es un video válido.",
          "error"
        );
      });
  };

  if (
    (categorias.length === 0 || videos.length === 0) &&
    !emptyVideo &&
    (categorias.length === 0 || videos.length === 0) &&
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
        />
      </>
    );
  }
};

export default PaginaNuevoVideo;
