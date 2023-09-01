import styled from "styled-components";
import { useEffect, useRef, useState } from "react";
import { FcSearch } from "react-icons/fc";
import { useNavigate } from "react-router-dom";

const Container = styled.div`
  position: relative;
  display: inline-block;
  display: flex;
  align-items: center;
  @media screen and (min-width: 862px) {
  }

  .input-container {
    display: none;
    position: absolute;
    top: 5px;
    left: -183px;
  }

  .show-input {
    display: block;
  }

  .input-text {
    box-sizing: border-box;
    padding: 5px;
    border-radius: 5px;
  }

  .contenedor-boton {
    background-color: white;
    border-radius: 50%;
    width: 40px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    outline: 1px solid black;
    &:hover {
      cursor: pointer;
      transform: scale(1.05);
      background-color: lightblue;
      outline: 2px solid light;
    }
  }
`;

const BotonSearch = () => {
  const [inputVisible, setInputVisible] = useState(false);
  const navigate = useNavigate();
  const inputRef = useRef(null);

  const toggleInput = () => {
    setInputVisible(!inputVisible);
  };

  useEffect(() => {
    inputRef.current.focus();
  }, [inputVisible]);

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      navigate(`/search?search=${event.target.value}`);
      setInputVisible(false);
    }
  };

  return (
    <Container>
      <div className={"contenedor-boton"} onClick={toggleInput} title="Buscar">
        <FcSearch size={32} />
      </div>
      <div className={`input-container ${inputVisible ? "show-input" : ""}`}>
        <input
          ref={inputRef}
          type="text"
          placeholder="Ingrese texto"
          className="input-text"
          onKeyDown={handleKeyPress}
        />
      </div>
    </Container>
  );
};

export default BotonSearch;
