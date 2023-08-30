import { Link } from "react-router-dom";
import styled from "styled-components";

const Section = styled.section`
  font-family: "Roboto", sans-serif;
`;

const ContenedorDetalle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Link404 = styled.div`
  color: #fff !important;
  padding: 10px 20px;
  background: #39ac31;
  margin: 40px 0;
  display: inline-block;
  border-radius: 10px;
  cursor: pointer;
  border: 2px solid black;
  &:hover {
    background: blue;
    transform: scale(1.05);
    transition: transform 0.3s ease;
  }
`;

const ContenedorImagen = styled.div`
  background-image: url(https://cdn.dribbble.com/users/285475/screenshots/2083086/dribbble_1.gif);
  height: 400px;
  background-position: center;
`;

const Error404 = () => {
  return (
    <>
      <Section>
        <ContenedorImagen>
          <h1
            style={{
              fontSize: "80px",
              textAlign: "center",
              fontWeight: 700,
              fontFamily: '"Carter", sans-serif',
              paddingTop: "1rem",
            }}
          >
            404
          </h1>
        </ContenedorImagen>
        <ContenedorDetalle>
          <p style={{ fontWeight: 700, fontSize: 25, paddingBottom: 15 }}>
            Parece que estas perdido 🤔
          </p>
          <p
            style={{
              color: "red",
              fontWeight: 600,
              fontFamily: '"Carter", sans-serif',
              fontSize: "1.5rem",
            }}
          >
            ¡ La página que estas buscando no esta disponible !
          </p>
          <Link404>
            <Link to="/" title="Ir a la página de Inicio">
              Ir a la Página de Inicio
            </Link>
          </Link404>
        </ContenedorDetalle>
      </Section>
    </>
  );
};

export default Error404;
