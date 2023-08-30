import styled from "styled-components";
import hexToRgba from "hex-to-rgba";
import ContenedorCardVideos from "./ContenedorCardVideo";
import Boton from "../Boton";
import { useNavigate } from "react-router-dom";
import { firstLetterCapital } from "../../funcionesUtiles";

const SeccionCategorias = styled.section`
  background-color: ${(props) => hexToRgba(props.color, "0.4")};
  display: flex;
  flex-direction: column;
  align-items: center;

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
  @font-face {
    font-family: "Carter";
    src: url("/CarterOne-Regular.ttf") format("truetype");
  }
  font-family: "Carter", sans-serif;
  display: flex;
  align-items: center;
`;

const DescripcionCategorias = styled.p`
  text-align: center;
  padding-bottom: 1rem;
  font-family: "Roboto", sans-serif;
  font-weight: 600;
  line-height: 2rem;
  padding-left: 15px;
  padding-right: 15px;
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

const ContenedorVerCategorías = styled.div`
  margin-top: 3rem;
  padding-top: 1rem;
  padding-bottom: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #fff6ed;
  width: 100%;
`;

const DescripcionVerCategorías = styled.p`
  font-weight: 600;
  font-family: "Poppins", sans-serif;
  font-size: 1rem;
  text-align: center;
  padding-left: 5%;
  padding-right: 5%;
  line-height: 1.5rem;
  color: #4e1d16;

  @media screen and (min-width: 768px) {
    font-size: 20px;
    line-height: 1.5rem;
  }
`;

const SeccionesCategorias = ({ categoriasArray, data }) => {
  const navigate = useNavigate();
  return (
    <>
      {categoriasArray.map((categoriaObjeto, index) => {
        const dataCategoria = data.filter((ObjetoVideo) => {
          return (
            categoriaObjeto.categoria.toLowerCase() ===
            ObjetoVideo.categoria.toLowerCase()
          );
        });

        return dataCategoria.length ? (
          <SeccionCategorias color={categoriaObjeto.color} key={index}>
            <TituloCategorias color={categoriaObjeto.color}>
              {firstLetterCapital(categoriaObjeto.categoria)}
            </TituloCategorias>
            <DescripcionCategorias>
              <SpanDescripcion>Descripción 🚀 :</SpanDescripcion>
              {categoriaObjeto.descripcion}
            </DescripcionCategorias>
            <ContenedorCardVideos
              videosCategoria={dataCategoria}
              categoriacolor={categoriaObjeto.color}
            />
            <ContenedorVerCategorías>
              <DescripcionVerCategorías>
                Haz click en el botón de abajo (👇) para visualizar{" "}
                <span
                  style={{
                    fontWeight: 900,
                    fontFamily: "'Helvetica Neue', sans-serif",
                    letterSpacing: "2px",
                  }}
                >
                  TODOS
                </span>{" "}
                los videos de la categoría {categoriaObjeto.categoria}
              </DescripcionVerCategorías>
              <Boton
                onClick={() => {
                  navigate(`/categoria/${categoriaObjeto.categoria}`);
                }}
                title="Ver Categoría"
                className="botonVerFullCategoria"
                icono="iconoMasCategoria"
                nombretitulo={firstLetterCapital(categoriaObjeto.categoria)}
              />
            </ContenedorVerCategorías>
          </SeccionCategorias>
        ) : (
          <div key={index}></div>
        );
      })}
    </>
  );
};

export default SeccionesCategorias;
