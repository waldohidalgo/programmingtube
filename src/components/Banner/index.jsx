import { useNavigate } from "react-router-dom";
import "./Banner.css";
import styled from "styled-components";
import { useState } from "react";
import { useEffect } from "react";

const Section = styled.section`
  height: 80vh;
  background-color: lightblue;
  background-image: ${(props) => {
    return `url(${props.$imagen})`;
  }};
  background-size: cover;
  width: 100%;
  background-repeat: no-repeat;
  background-position-x: center;
  background-attachment: fixed;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
`;

const ContenedorThumnails = styled.div`
  position: absolute;
  bottom: 5px;
  width: 90px;

  display: flex;
  align-items: center;
  column-gap: 5px;
  @media screen and (min-width: 550px) {
    width: 180px;
  }

  .contenedor__thumbnails__elemento {
    width: 33%;
    background-size: cover;
    background-repeat: no-repeat;
    height: 25px;
    border-radius: 50%;

    @media screen and (min-width: 550px) {
      height: 55px;
    }

    &:hover {
      cursor: pointer;
      outline: 2px solid red;
    }
  }

  .contenedor__thumbnails__elemento--primero {
    background-image: url("/img/banner1.jpg");
    outline: 2px solid
      ${(props) => {
        if (imagenesBanner[0] === props.$imagen) {
          return `black`;
        } else {
          return `white`;
        }
      }};
  }

  .contenedor__thumbnails__elemento--segundo {
    background-image: url("/img/banner2.jpg");
    outline: 2px solid
      ${(props) => {
        if (imagenesBanner[1] === props.$imagen) {
          return `black`;
        } else {
          return `white`;
        }
      }};
  }
  .contenedor__thumbnails__elemento--tercero {
    background-image: url("/img/banner3.jpg");
    outline: 2px solid
      ${(props) => {
        if (imagenesBanner[2] === props.$imagen) {
          return `black`;
        } else {
          return `white`;
        }
      }};
  }
`;

const imagenesBanner = [
  "/img/banner1.jpg",
  "/img/banner2.jpg",
  "/img/banner3.jpg",
];
const Banner = () => {
  const navigate = useNavigate();
  const [imagenBanner, setImagenBanner] = useState(imagenesBanner[0]);

  const cambiarImagen = (nuevaImagen) => {
    setImagenBanner(nuevaImagen);
  };

  useEffect(() => {
    const temporizador = setInterval(() => {
      const imagen =
        imagenesBanner.indexOf(imagenBanner) === 2
          ? imagenesBanner[0]
          : imagenesBanner[imagenesBanner.indexOf(imagenBanner) + 1];

      setImagenBanner(imagen);
    }, 5000);

    return () => {
      clearInterval(temporizador);
    };
  }, [imagenBanner]);

  return (
    <Section $imagen={imagenBanner}>
      <div className="banner__eslogan">
        <h1 className="banner__titulo">
          Videos Seleccionados para aprender a programar 🎉 desde{" "}
          <span style={{ color: "white" }}>0 </span>
        </h1>
        <h2 className="banner__subtitulo">
          <span
            className="banner__subtitulo--destaque"
            style={{ color: "black" }}
          >
            Programming
          </span>
          <span
            className="banner__subtitulo--destaque"
            style={{ color: "red" }}
          >
            TUBE
          </span>{" "}
          te ofrece gran cantidad de contenido multimedia para que aprendas a
          programar y puedas dar vida a tus ideas{" "}
          <span className="banner__subtitulo--tumismo">TÚ MISMO </span>
          <object data="/img/pointer.svg" style={{ width: "1.5rem" }}>
            Yourself
          </object>{" "}
        </h2>
      </div>
      <div className="banner__empiezapor">
        <h2 className="banner__empiezapor__titulo">COMIENZA POR:</h2>
        <button
          onClick={() => {
            navigate(`/categoria/python`);
          }}
          title="Python: Lenguaje Script ideal para ingenieros no informáticos"
          className="banner__empiezapor__boton"
        >
          <img
            src="https://img.icons8.com/stickers/100/arrow.png"
            alt="arrow"
            className="banner__empiezapor__boton--flecha"
          />
          <span className="banner__empiezapor__boton__texto">Python 🐍</span>
        </button>
      </div>
      <ContenedorThumnails $imagen={imagenBanner}>
        <div
          onClick={() => {
            cambiarImagen(imagenesBanner[0]);
          }}
          className="contenedor__thumbnails__elemento contenedor__thumbnails__elemento--primero"
          title="Banner 1"
        ></div>
        <div
          onClick={() => {
            cambiarImagen(imagenesBanner[1]);
          }}
          className="contenedor__thumbnails__elemento contenedor__thumbnails__elemento--segundo"
          title="Banner 2"
        ></div>
        <div
          onClick={() => {
            cambiarImagen(imagenesBanner[2]);
          }}
          className="contenedor__thumbnails__elemento contenedor__thumbnails__elemento--tercero"
          title="Banner 3"
        ></div>
      </ContenedorThumnails>
    </Section>
  );
};

export default Banner;
