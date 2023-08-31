import Boton from "../Boton";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import BotonSearch from "../BotonSearch";

const HeaderContenedor = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  background-color: #f7f7f7;
  padding-bottom: 1rem;

  @media (min-width: 680px) {
    flex-direction: row;
    padding-bottom: 0;
  }

  .contenedor-botones {
    display: flex;
    flex-direction: row-reverse;
    width: 100%;
    justify-content: space-around;

    @media (min-width: 680px) {
      flex-direction: row;
      justify-content: space-around;
      width: 50%;
    }
  }
`;

const HeaderLogo = styled.img`
  width: 100%;
  max-width: 499px;
`;

const Header = () => {
  const navigate = useNavigate();
  const handleClickBotonNuevoVideo = () => {
    navigate("add-video");
  };

  return (
    <HeaderContenedor>
      <Link to="/" style={{ cursor: "pointer" }}>
        <HeaderLogo
          src="/img/ProgrammingTUBElogo.png"
          alt="ProgrammingTUBE logo"
          title="Página de Inicio ProgrammingTUBE"
        />
      </Link>
      <div className="contenedor-botones">
        <BotonSearch />
        <Boton
          title="Cargar Nuevo Video"
          className="botonNuevoVideo"
          icono="iconoMas"
          onClick={handleClickBotonNuevoVideo}
        />
      </div>
    </HeaderContenedor>
  );
};

export default Header;
