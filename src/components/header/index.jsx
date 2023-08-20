import Boton from "../Boton";
import "./Header.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="header">
      <Link to="/" className="header__linkHome">
        <img
          className="header__logo"
          src="/img/ProgrammingTUBElogo.png"
          alt="ProgrammingTUBE logo"
          title="Página de Inicio ProgrammingTUBE"
        />
      </Link>
      <Boton
        title="Cargar Nuevo Video"
        className="header__botonNuevoVideo"
        icono="iconoMas"
      />
    </header>
  );
};

export default Header;
