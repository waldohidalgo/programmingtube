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

  @media (min-width: 862px) {
    flex-direction: row;
    padding-bottom: 0;
  }

  .contenedor-botones {
    display: flex;
    flex-direction: row-reverse;
    width: 100%;
    justify-content: space-around;

    @media (min-width: 862px) {
      flex-direction: row;
      justify-content: space-around;
      width: 50%;
    }
  }

  .contenedor-botones-editar-agregar {
    display: flex;
    flex-direction: column;
    row-gap: 10px;
    @media screen and (min-width: 441px) {
      flex-direction: row;
      column-gap: 10px;
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
    navigate("/add-video");
  };

  const handleClickBotonEditDeleteVideos = () => {
    navigate("/edit-delete-videos");
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
        <div className="contenedor-botones-editar-agregar">
          <Boton
            title="Cargar Nuevo Video"
            className="botonNuevoVideo"
            icono="iconoMas"
            onClick={handleClickBotonNuevoVideo}
          />
          <Boton
            title="Editar / Eliminar Videos"
            className="botonEditDeleteVideo"
            icono="iconoEditDeleteVideos"
            onClick={handleClickBotonEditDeleteVideos}
          />
        </div>
      </div>
    </HeaderContenedor>
  );
};

export default Header;
