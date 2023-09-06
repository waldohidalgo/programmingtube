import styled from "styled-components";
import Boton from "../../Boton";
import { useNavigate } from "react-router-dom";
import { temaClaro } from "../../UI/temas";
import { firstLetterCapital } from "../../../funcionesUtiles";

const ContenedorCard = styled.div`
  box-sizing: border-box;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  justify-content: space-between;
  border: 1px solid black;
  border-radius: 10px;
  box-shadow: 0px 0px 21px -5px ${(props) => {
      if (!props.theme?.temaSeleccionado?.colorBoxShadow) {
        return temaClaro.colorBoxShadow;
      }
      return props.theme.temaSeleccionado.colorBoxShadow;
    }};
  margin-left: 2px;
  margin-right: 2px;
  margin-bottom: 5px;
  margin-top: 5px;
  background-color: ${(props) => {
    if (!props.theme?.temaSeleccionado?.backgroundColorCard) {
      return temaClaro.backgroundColorCard;
    }
    return props.theme.temaSeleccionado.backgroundColorCard;
  }};

  &:hover {
    background-color: ${(props) => {
      if (!props.theme?.temaSeleccionado?.colorBackgroundHoverCard) {
        return temaClaro.colorBackgroundHoverCard;
      }
      return props.theme.temaSeleccionado.colorBackgroundHoverCard;
    }};
    color: white;

    box-shadow: 0px 0px 21px -5px rgba(255, 255, 255, 1);
    transform: scale(0.95);
    transition: transform 1s ease;
    border: 4px solid
      ${(props) => {
        if (!props.theme?.temaSeleccionado?.borderColor) {
          return temaClaro.borderColor;
        } else {
          return props.theme.temaSeleccionado.borderColor;
        }
      }};
  }
`;

const ImageCard = styled.img`
  width: 100%;
  border: 5px solid ${(props) => props.color};
  border-radius: 15px;
  margin-bottom: 1rem;
`;

const TituloCard = styled.h1`
  margin-top: 1rem;
  margin-bottom: 1rem;
  height: 4.5rem;
  font-family: "Carter", sans-serif;
  font-size: 1.5rem;
  color: black;
  text-shadow: -1px -1px 0 white, 1px -1px 0 white, -1px 1px 0 white,
    1px 1px 0 white;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  text-overflow: ellipsis;
`;

const Categoria = styled.p`
  margin-bottom: 1rem;

  .realce {
    font-weight: 700;
    font-family: "Carter", sans-serif;
  }
`;

const CardVideo = ({ video, categoriacolor }) => {
  const { id, titulo, categoria, descripcion, url, imagen } = video;

  const navigate = useNavigate();

  const handleClick = (id) => {
    navigate(`/watch-video/${id}`);
  };

  const newTitle = (titulo) => {
    if (titulo.length > 40) {
      return titulo.substring(0, 40) + "...";
    } else {
      return titulo;
    }
  };

  return (
    <ContenedorCard>
      <TituloCard>{newTitle(titulo)}</TituloCard>
      <Categoria>
        Categoría:{" "}
        <span className="realce">{firstLetterCapital(categoria)}</span>
      </Categoria>
      <ImageCard src={imagen} alt={titulo} color={categoriacolor} />
      <Boton
        title="Ver Video"
        className="botonVerVideo"
        icono="iconoEye"
        onClick={() => handleClick(id)}
        nombretitulo={titulo}
      />
    </ContenedorCard>
  );
};

export default CardVideo;
