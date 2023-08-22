import styled from "styled-components";
import hexToRgba from "hex-to-rgba";
import ContenedorCardVideos from "./ContenedorCardVideo";

const SeccionCategorias = styled.section`
  background-color: ${(props) => hexToRgba(props.color, "0.4")};
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 2rem;
  border-top: 2px solid white;
  border-bottom: 2px solid white;
`;

const TituloCategorias = styled.h1`
  font-weight: 900;

  border-bottom: 4px solid ${(props) => props.color};
  font-size: 35px;
  text-align: center;
  margin-top: 1rem;
  margin-bottom: 1rem;
  font-family: "Carter", sans-serif;
  display: flex;
  align-items: center;
`;

const DescripcionCategorias = styled.p`
  text-align: center;
  padding-bottom: 1rem;
  font-family: "Roboto", sans-serif;
  font-weight: 600;
`;

const SeccionesCategorias = ({ categoriasArray, data }) => {
  return (
    <>
      {categoriasArray.map((categoriaObjeto, index) => {
        return (
          <SeccionCategorias color={categoriaObjeto.color} key={index}>
            <TituloCategorias color={categoriaObjeto.color}>
              {categoriaObjeto.categoria}
            </TituloCategorias>
            <DescripcionCategorias>
              {categoriaObjeto.descripcion}
            </DescripcionCategorias>
            <ContenedorCardVideos
              videosCategoria={data.filter(
                (ObjetoVideo) =>
                  categoriaObjeto.categoria.toLowerCase() ===
                  ObjetoVideo.categoria.toLowerCase()
              )}
              categoriaColor={categoriaObjeto.color}
            />
          </SeccionCategorias>
        );
      })}
    </>
  );
};

export default SeccionesCategorias;
