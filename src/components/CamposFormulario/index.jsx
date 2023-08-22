import { styled } from "styled-components";
import { BsArrowDownSquare } from "react-icons/bs";

const ContenedorCampoFormulario = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 1rem;
  padding-bottom: 1rem;
  margin-top: 1rem;
  .SeleccionaColorCategoría {
    width: 50%;
    height: 2rem;
  }
  .SeleccionaColorCategoría:hover {
    cursor: pointer;
  }
`;

const InputFormulario = styled.input`
  padding: 5px;
  border-radius: 5px;
  box-sizing: border-box;
  width: 100%;
`;

export const CampoFormulario = (props) => {
  const { type, titulo, setValue, valor } = props;

  const handleChangeValue = (evento) => {
    setValue(evento.target.value);
  };
  return (
    <>
      <ContenedorCampoFormulario>
        <label
          htmlFor={titulo}
          style={{ textAlign: "center", display: "flex", alignItems: "center" }}
        >
          {titulo}
          <BsArrowDownSquare style={{ paddingLeft: "5px" }} />
        </label>
        <InputFormulario
          id={titulo}
          type={type}
          required={true}
          onChange={handleChangeValue}
          value={valor}
          className={titulo.replace(/\s/g, "")}
        />
      </ContenedorCampoFormulario>
    </>
  );
};

const ContenedorListaOpciones = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 1rem;
  padding-bottom: 1rem;
`;
export const ListaOpciones = (props) => {
  const { titulo, categorias, valor, setCategoria } = props;

  const handleChangeCategoria = (evento) => {
    setCategoria(evento.target.value);
  };

  return (
    <>
      <ContenedorListaOpciones>
        <label
          style={{ textAlign: "center", display: "flex", alignItems: "center" }}
        >
          Selecciona alguna {titulo}{" "}
          <BsArrowDownSquare style={{ paddingLeft: "5px" }} />
        </label>
        <select
          style={{
            width: "80%",
            padding: "5px",
            borderRadius: "5px",
            boxSizing: "border-box",
            border: "2px solid",
          }}
          value={valor}
          onChange={handleChangeCategoria}
        >
          <option disabled hidden value="Selecciona una opción">
            Selecciona una opción
          </option>
          {categorias.map((categoria, index) => {
            return <option key={index}>{categoria}</option>;
          })}
        </select>
      </ContenedorListaOpciones>
    </>
  );
};

const ContenedorDescripcionTextArea = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 1rem;
`;
export const DescripcionTextArea = (props) => {
  const { titulo, setValue, valor } = props;
  const handleChangeValue = (e) => {
    setValue(e.target.value);
  };
  return (
    <>
      <ContenedorDescripcionTextArea>
        <label
          htmlFor={titulo}
          style={{ textAlign: "center", display: "flex", alignItems: "center" }}
        >
          {titulo}
          <BsArrowDownSquare style={{ paddingLeft: "5px" }} />{" "}
        </label>
        <textarea
          id={titulo}
          style={{
            width: "100%",
            resize: "none",
            padding: "5px",
            borderRadius: "5px",
            boxSizing: "border-box",
            border: "2px solid",
          }}
          rows="7"
          required={true}
          onChange={handleChangeValue}
          value={valor}
        ></textarea>
      </ContenedorDescripcionTextArea>
    </>
  );
};
