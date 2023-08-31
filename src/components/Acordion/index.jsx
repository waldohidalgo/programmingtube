import { styled } from "styled-components";
import AcordionFila from "./AcordionFila";

const Contenedor = styled.div`
  .contenedor__titulo {
    text-align: center;
    padding-top: 1rem;
    padding-bottom: 1rem;
    font-size: 2rem;
    font-weight: 700;
  }

  .contenedor__componentes {
    margin-left: 5%;
    margin-right: 5%;
    border-top: 1px solid black;
    border-bottom: 1px solid black;
  }

  .contenedor__titulo-figura {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .contenedor__figura {
    width: 20%;
    border: 5px solid green;
    margin-bottom: 1rem;
  }
`;

const Acordion = () => {
  const objetoDataAcordion = [
    {
      id: 1,
      titulo: "1. ¿Por qué es tan importante saber programar?",
      descripcion:
        "Programar <span style={{ fontWeight: 700 }}>ES</span> la habilidad del siglo XXI. Si se hace un recorrido por LinkedIn se puede constatar el surgimiento de innumebles empresas que se basan en utilización de tecnología en su núcleo. Además, las empresas tradicionales que no se adaptan a los nuevos tiempos estan siendo eliminadas o, derechamente, perdiendo cuota de mercado frente a miles de nuevos negocios que se fundamentan en la tecnología. El resto de empresas tradicionales enfrentan procesos de transformación digital en la cual es un <span style={{ fontWeight: 700 }}>DEBER</span> para seguir siendo competitivos.",
    },
  ];

  return (
    <>
      <Contenedor>
        <div className="contenedor__titulo-figura">
          <h1 className="contenedor__titulo">Preguntas Frecuentes</h1>
          <span className="contenedor__figura"></span>
        </div>
        <div className="contenedor__componentes">
          {objetoDataAcordion.map((fila) => {
            return (
              <>
                {
                  <AcordionFila
                    titulo={fila.titulo}
                    descripcion={fila.descripcion}
                  />
                }
              </>
            );
          })}
        </div>
      </Contenedor>
    </>
  );
};

export default Acordion;
