import styled from "styled-components";
import Boton from "../components/Boton";
import { useNavigate } from "react-router-dom";
import AmpolletaSelectorTheme from "../components/Ampolleta";
import { temaClaro, temaOscuro } from "../components/UI/temas";
import { ThemeProvider } from "styled-components";
import { useState } from "react";

const Contenedor = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 3rem;
  position: relative;
  background-color: ${(props) => {
    return props.theme.temaSeleccionado.backgroundColor;
  }};
  .contenedor__titulo {
    display: flex;
    align-items: center;
    font-size: 1.5rem;
    font-family: "Carter", sans-serif;
    text-decoration: underline;
    text-decoration-color: green;
    text-decoration-thickness: 5px;

    padding-top: 1rem;
    padding-bottom: 1rem;
    @media screen and (min-width: 550px) {
      font-size: 2rem;
    }
  }

  .contenedor__titulo__imagen {
    width: 1.5rem;
    height: 1.5rem;
    @media screen and (min-width: 550px) {
      width: 2rem;
      height: 2rem;
    }
  }

  p {
    padding-top: 3rem;
    padding-bottom: 3rem;
    padding-left: 5%;
    padding-right: 5%;
    font-family: "Inter", sans-serif;
    line-height: 1.5rem;
    text-align: justify;
    color: ${(props) => {
      return props.theme.temaSeleccionado.textColor;
    }};
  }
  .contenedor__titulo__titulo {
    text-align: center;
    color: ${(props) => {
      return props.theme.temaSeleccionado.textColor;
    }};
  }

  .contenedor__gif {
    width: 50%;
    border-radius: 30px;
    border: 6px solid red;
    @media screen and (min-width: 550px) {
      width: 30%;
    }
  }
`;

const NoExisteData = () => {
  const navigate = useNavigate();
  const [temaSeleccionado, setTemaSeleccionado] = useState(temaOscuro);
  const handleClickBotonNuevoVideo = () => {
    navigate("/add-video");
  };
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
          <AmpolletaSelectorTheme
            theme={temaSeleccionado}
            handleChangeTheme={handleChangeTheme}
          />
          <div className="contenedor__titulo">
            <img
              className="contenedor__titulo__imagen"
              src="https://img.icons8.com/color/48/shocked.png"
              alt="shocked"
            />
            <h1 className="contenedor__titulo__titulo">
              No existe data en la API
            </h1>
          </div>
          <img
            className="contenedor__gif"
            src="/img/shocked.gif"
            alt="shocked"
          />
          <p>
            No existe data en la API por lo que has sido redirigido aquí por
            Waldo. Para que esto no se muestre haz click en el botón Cargar
            Nuevo Video o haz click en el botón de más abajo.
          </p>
          <Boton
            title="Cargar Nuevo Video"
            className="botonNuevoVideo"
            icono="iconoMas"
            onClick={handleClickBotonNuevoVideo}
          />
        </Contenedor>
      </ThemeProvider>
    </>
  );
};

export default NoExisteData;
