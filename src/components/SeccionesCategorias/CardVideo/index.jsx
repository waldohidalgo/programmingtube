import styled from "styled-components";

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
  box-shadow: 3px 3px 5px 0px rgba(0, 0, 0, 0.75);
  margin-left: 2px;
  margin-right: 2px;
  margin-bottom: 5px;
  margin-top: 5px;
`;

const ImageCard = styled.img`
  width: 100%;
  border: 5px solid ${(props) => props.categoriaColor};
  border-radius: 15px;
`;

const TituloCard = styled.h1`
  padding-top: 1rem;
  padding-bottom: 1rem;
  height: 4.5rem;
  font-family: "Carter", sans-serif;
  font-size: 1.5rem;
  color: black;
  text-shadow: -1px -1px 0 white, 1px -1px 0 white, -1px 1px 0 white,
    1px 1px 0 white;
`;

const LimitaTitulo = (titulo) => {
  if (titulo.length > 60) {
    return titulo.slice(0, 60) + "...";
  } else {
    return titulo;
  }
};

const CardVideo = (props) => {
  const { titulo, categoria, descripcion, url, imagen } = props.video;
  const { categoriaColor } = props;

  return (
    <ContenedorCard>
      <TituloCard>{LimitaTitulo(titulo)}</TituloCard>
      <ImageCard src={imagen} alt={titulo} categoriaColor={categoriaColor} />
    </ContenedorCard>
  );
};

export default CardVideo;
