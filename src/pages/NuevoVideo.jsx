import { FormularioVideoCategoria } from "../components/Formulario";

const PaginaNuevoVideo = ({
  categoriasArray,
  setCategoriasArray,
  handleDataFormAddVideo,
  handleDataFormAddCategoría,
  handleDeleteCategory,
}) => {
  return (
    <>
      <FormularioVideoCategoria
        categoriasArray={categoriasArray}
        setCategoriasArray={setCategoriasArray}
        handleDataFormAddVideo={handleDataFormAddVideo}
        handleDataFormAddCategoría={handleDataFormAddCategoría}
        handleDeleteCategory={handleDeleteCategory}
      />
    </>
  );
};

export default PaginaNuevoVideo;
