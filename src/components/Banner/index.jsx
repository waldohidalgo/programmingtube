import "./Banner.css";

const Banner = () => {
  return (
    <section className="banner">
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
    </section>
  );
};

export default Banner;
