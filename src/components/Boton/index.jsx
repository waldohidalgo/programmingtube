import { BsPlusCircleFill } from "react-icons/bs";
import { AiFillSave } from "react-icons/ai";
import { MdCleaningServices } from "react-icons/md";
import { FaPencilAlt } from "react-icons/fa";
import "./Boton.css";

const Boton = (props) => {
  const { title, className, icono, onClick } = props;

  const iconoBoton = (tipoIcono) => {
    if (tipoIcono === "iconoMas") {
      return <BsPlusCircleFill className="iconoBoton" />;
    } else if (tipoIcono === "iconoSave") {
      return <AiFillSave className="iconoBoton" />;
    } else if (tipoIcono === "iconoClean") {
      return <MdCleaningServices className="iconoBoton" />;
    } else if (tipoIcono === "iconoEdit") {
      return <FaPencilAlt className="iconoBoton" />;
    } else {
      return undefined;
    }
  };

  if (className === "botonNuevoVideo") {
    return (
      <button
        onClick={onClick}
        title={title}
        className={className}
        type="button"
      >
        {iconoBoton(icono)} {title}
      </button>
    );
  }

  if (className === "botonSaveAddVideo") {
    return (
      <button title={title} className={className} type="submit">
        {iconoBoton(icono)} {title}
      </button>
    );
  }

  if (className === "botonLimpiarAddVideo") {
    return (
      <button
        title={title}
        className={className}
        type="button"
        onClick={onClick}
      >
        {iconoBoton(icono)} {title}
      </button>
    );
  }

  if (className === "botonSaveCategory") {
    return (
      <button title={title} className={className} type="submit">
        {iconoBoton(icono)} {title}
      </button>
    );
  }

  if (className === "botonLimpiarCategoria") {
    return (
      <button
        title={title}
        className={className}
        type="button"
        onClick={onClick}
      >
        {iconoBoton(icono)} {title}
      </button>
    );
  }

  if (className === "botonEditarCategoria") {
    return (
      <button
        title={title}
        className={className}
        type="button"
        onClick={onClick}
      >
        {iconoBoton(icono)} {title}
      </button>
    );
  }
};

export default Boton;
