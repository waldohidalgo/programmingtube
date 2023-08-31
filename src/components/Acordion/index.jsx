import { styled } from "styled-components";
import AcordionFila from "./AcordionFila";

const Contenedor = styled.section`
  padding-bottom: 2rem;
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
        "Programar <span style='font-weight: 700;'>ES</span> la habilidad del siglo XXI. Si se hace un recorrido por LinkedIn se puede constatar el surgimiento de innumebles empresas que se basan en utilización de tecnología en su núcleo. Además, las empresas tradicionales que no se adaptan a los nuevos tiempos estan siendo eliminadas o, derechamente, perdiendo cuota de mercado frente a miles de nuevos negocios que se fundamentan en la tecnología. El resto de empresas tradicionales enfrentan procesos de transformación digital en la cual es un <span style='font-weight: 700;'>DEBER</span> para seguir siendo competitivos.",
    },
    {
      id: 2,
      titulo:
        "2. ¿ Por qué, simplemente, no aprendo a dirigir proyectos de TI y evito aprender programación?",
      descripcion: `Aprender a manejar proyectos de TI implica que su nivel de distinciones ahora es <span style='font-weight: 700;'>SUPRA</span>, es decir, pasa a un nivel superior en el cual abstrae lo operativo. Sin embargo, si alguien toma, en general, un cargo supra sin conocer lo operativo y sus propias distinciones, entonces habrá una brecha de comunicación entre el manager y quienes conforman lo operativo que en este caso son los developers. Lo anterior, lamentablemente, ocurre en la realidad y lo que sucede es que el manager, quien a menudo tiene mayor de discreción de comportamiento en el dominio laboral, ejerce un trato dictatorial con los operadores, es decir, su incompetencia en la brecha de distinciones la anula al 'eliminar' a quién cuestione sus decisiones. Demás esta decir que dicho manager NO es líder y esta limitado profesionalmente. Para superar tales limitaciones debe aprender a hablar y adquirir las distinciones de niveles inferiores. La pregunta que surge entonces es: <span style="font-weight: 700;color:red">¿Deseo convertirme en un líder integral? 🤔<span>`,
    },
    {
      id: 3,
      titulo: "3. ¿Para qué sirve, en concreto, aprender a programar?",
      descripcion:
        "Aprendiendo a programar usted tiene en sus manos el poder desarrollar herramientas con posibilidad de ser objeto de negocio. El enfoque esta en desarrollar herramientas que vengan a simplificar lo que ya se hace y/o escalar las actividades que ya se hacen, es decir, hacer más, mucho más, con lo mismo.",
    },
    {
      id: 4,
      titulo: "4. ¿Qué lenguajes me recomiendan para empezar?",
      descripcion:
        "Le recomiendo para empezar lenguajes de sintaxis sencilla en los cuales el enfoque no este tanto en la sintaxis sino en aprender a crear utilizando un lenguaje lo más cercano a un lenguaje natural (de alto nivel) y para ese objetivo, el lenguaje que le recomiendo es Python y, en general, cualquier lenguaje del tipo <span style='font-weight: 700;'>SCRIPTING</span>. Si usted es ingeniero no informático y necesita aprender a programar para solucionar problemas en su entorno sin pasar por un enorme camino de aprendizaje, le recomiendo que se enfoque 100% en lenguajes scripting.",
    },
    {
      id: 5,
      titulo: "5. ¿Cuánto tiempo demora el aprender a programar",
      descripcion:
        "El tiempo que toma depende 100% del tiempo dedicado a practicar y si es capaz de crear el hábito <span style='font-weight: 700;'>DIARIO</span> dedicado a lo anterior. Si usted ya posee un background en algún lenguaje de programación, la curva de aprendizaje será menor frente a quién por primera vez aborda estos tópicos. En última instancia, si se posee la determinación, fuerza de voluntad y generación o reformulación de hábitos y el enfoque este puesto en llevar a la práctica lo aprendido, el tiempo que tome el aprender a programar debiera ser acotado.",
    },
    {
      id: 6,
      titulo: "6. ¿Me garantiza acceder a un trabajo al saber programar?",
      descripcion:
        "Lamentablemente, el aprender a programar por si solo no garantiza encontrar un trabajo ya que esto esta influenciado por muchos factores. Además, mucha gente se encuentra en la misma situación que usted. Por tanto, tiene <span style='font-weight: 700;'>2 opciones</span>: diferenciarse del resto y competir por trabajos con miles de personas o emprender un camino en la búsqueda de clientes vía la oferta de soluciones creadas por usted. Ambos enfoques son válidos pero el trato al que se verá expuesto puede diferir de gran manera entre un enfoque u otro. Sin embargo, independiente de su elección, ambos enfoques requieren un continuo aprendizaje y en la medida que el Life Long Learning sea su camino director, el acceso a trabajos debiera será mayor en el enfoque primero o la oferta de soluciones a clientes también debiera ser mayor en el segundo enfoque.",
    },
  ];

  return (
    <>
      <Contenedor id="PreguntasFrecuentes">
        <div className="contenedor__titulo-figura">
          <h1 className="contenedor__titulo">Preguntas Frecuentes</h1>
          <span className="contenedor__figura"></span>
        </div>
        <div className="contenedor__componentes">
          {objetoDataAcordion.map((fila, index) => {
            return (
              <AcordionFila
                key={index}
                titulo={fila.titulo}
                descripcion={fila.descripcion}
              />
            );
          })}
        </div>
      </Contenedor>
    </>
  );
};

export default Acordion;
