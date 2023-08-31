import { useState } from "react";
import { FiArrowDownCircle, FiArrowUpCircle } from "react-icons/fi";
import { styled } from "styled-components";
import parse from "html-react-parser";

const ContenedorFila = styled.div`
  .contenedor__componentes__fila {
    padding-top: 1rem;
    padding-bottom: 1rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-top: 1px solid black;

    &:hover {
      cursor: pointer;
    }
  }
  .contenedor__componentes__fila__titulo {
    font-size: 1rem;
    font-weight: 700;
    color: black;
    font-family: "Inter", sans-serif;
  }

  .contenedor__componentes__fila__descripcion {
    padding-top: 1rem;
    text-align: justify;
    padding-bottom: 1rem;
    line-height: 1.5rem;
  }
`;

const AcordionFila = ({ titulo, descripcion }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const toggleAcordion = () => {
    setIsExpanded(!isExpanded);
  };
  return (
    <>
      <ContenedorFila>
        <div
          className="contenedor__componentes__fila"
          onClick={toggleAcordion}
          style={{ backgroundColor: isExpanded ? "#f0fff0" : "white" }}
        >
          <h1
            className="contenedor__componentes__fila__titulo"
            style={isExpanded ? { color: "#d57a28" } : { color: "black" }}
          >
            {titulo}
          </h1>
          <span>
            {isExpanded ? (
              <FiArrowUpCircle size={25} color={"#d57a28"} />
            ) : (
              <FiArrowDownCircle size={25} />
            )}
          </span>
        </div>
        {isExpanded ? (
          <p className={`contenedor__componentes__fila__descripcion`}>
            {parse(descripcion)}
          </p>
        ) : (
          <></>
        )}
      </ContenedorFila>
    </>
  );
};

export default AcordionFila;
