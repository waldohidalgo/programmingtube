import styled from "styled-components";

const Contenedor = styled.div`
  position: absolute;
  top: 10px;
  right: 10px;
  background-color: white;
  border: 2px solid red;
  border-radius: 50%;
  width: 2.5rem;
  height: 2.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  &:hover {
    cursor: pointer;
  }

  .imagen {
    width: 32px;
    height: 32px;
  }
`;

const AmpolletaSelectorTheme = (props) => {
  const { handleChangeTheme } = props;
  const nombreTema = props.theme.nombreTema;

  return (
    <>
      <Contenedor onClick={() => handleChangeTheme(nombreTema)}>
        {nombreTema === "temaOscuro" ? (
          <img
            className="imagen"
            src="https://img.icons8.com/color/48/smiling-sun.png"
            alt="smiling-sun"
            title="Cambiar a tema oscuro"
          />
        ) : (
          <img
            className="imagen"
            src="/img/moon.png"
            alt="moon"
            title="Cambiar a tema claro"
          />
        )}
      </Contenedor>
    </>
  );
};

export default AmpolletaSelectorTheme;
