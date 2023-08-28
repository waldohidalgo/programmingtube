import styled from "styled-components";

const ContenedorCargandoData = styled.div`
  text-align: center;
  padding-top: 3rem;
  padding-bottom: 3rem;

  p {
    font-weight: 700;
    font-family: "Carter", sans-serif;
    font-size: 2rem;
  }
`;

const LoaderSection = () => {
  return (
    <>
      <ContenedorCargandoData>
        <p>⏳ Cargando data ...</p>
        <img
          src={process.env.PUBLIC_URL + "/img/giphy.gif"}
          alt="Cargando data Gif"
        />
      </ContenedorCargandoData>
    </>
  );
};

export default LoaderSection;
