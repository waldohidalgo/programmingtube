import styled from "styled-components";
import AmpolletaSelectorTheme from "../components/Ampolleta";
import { temaClaro, temaOscuro } from "../components/UI/temas";
import { useState } from "react";
import { ThemeProvider } from "styled-components";

const Contenedor = styled.section`
  padding-top: 2rem;
  padding-bottom: 2rem;
  display: flex;
  flex-direction: column;
  padding-left: 5%;
  padding-right: 5%;
  position: relative;
  background-color: ${(props) => props.theme.temaSeleccionado.backgroundColor};
  .titulo {
    text-align: center;

    font-family: "Carter", sans-serif;
    font-weight: 700;
    font-size: 1.5rem;
    text-decoration: underline;
    text-decoration-thickness: 5px;
    text-decoration-color: red;
    color: ${(props) => {
      return props.theme.temaSeleccionado.textColor;
    }};
    @media screen and (min-width: 550px) {
      font-size: 3rem;
    }
  }
  p {
    text-align: justify;
    margin-bottom: 1rem;
    font-family: "Inter", sans-serif;
    line-height: 1.5rem;
    color: ${(props) => {
      return props.theme.temaSeleccionado.textColor;
    }};
  }

  .imagencopyright {
    width: 3rem;
    height: 3rem;
    background-color: white;
    border-radius: 50%;
  }

  .contenedor__titulo {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 3rem;
  }
  .copyright_gif {
    width: 50%;

    align-self: center;
    border-radius: 50%;
  }
`;

const SeccionCopyright = () => {
  const [temaSeleccionado, setTemaSeleccionado] = useState(temaOscuro);
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
        <Contenedor id="Copyright">
          <AmpolletaSelectorTheme
            theme={temaSeleccionado}
            handleChangeTheme={handleChangeTheme}
          />
          <div className="contenedor__titulo">
            <img
              className="imagencopyright"
              src="/img/copyright.png"
              alt="Copyright Icon"
            />
            <h1 className="titulo">Derechos de Autor</h1>
          </div>

          <p>
            Los derechos de autor de este sitio web pertenecen 100% a Waldo
            Jorge Hidalgo Oyarce, en adelante Waldo, en los ámbitos de diseño y
            estructuración del sitio web. En el resto de casos tales como
            contenido de los videos y la plataforma de videos, Youtube, los
            derechos de autor pertenecen a sus respectivos dueños siendo Waldo
            solo canalizador del contenido para su difusión.
          </p>
          <p>
            El sitio web pretende ser una herramienta para adquisición de
            conocimiento en el ámbito de la programación de manera{" "}
            <span style={{ fontWeight: 700 }}>100% GRATUITA</span> y no existe
            motivo de lucro alguno más que solo la difusión de conocimiento de
            calidad y gratuito.
          </p>
          <img
            className="copyright_gif"
            src="/img/copyright_wink.gif"
            alt="copyright gif"
          />
        </Contenedor>
      </ThemeProvider>
    </>
  );
};

export default SeccionCopyright;
