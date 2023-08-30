import styled from "styled-components";
import { firstLetterCapital } from "../../../funcionesUtiles";

const Tabla = styled.table`
  margin-top: 1rem;
  width: 100%;
  border: 4px solid #2a7ae4;
  display: none;

  .headtable {
    font-weight: 700;
  }
  th,
  td {
    border: 2px solid black;
  }
  td {
    text-align: center;
    vertical-align: middle;
    padding: 5px;
  }

  th {
    padding: 5px;
    background-color: black;
    color: white;
    border: 4px solid #2a7ae4;
    border-collapse: collapse;
  }

  @media screen and (min-width: 550px) {
    display: table;
  }
`;

const CeldaDeleteCategory = styled.td`
  font-weight: 700;
  &:hover {
    cursor: pointer;
    background-color: red;
    color: white;
  }
`;

const CeldaEditCategory = styled.td`
  font-weight: 700;
  &:hover {
    cursor: pointer;
    background-color: #53585d;
    color: white;
  }
`;

const TablaDescripcionCategorias = ({
  categoriasArray,
  handleDeleteCategory,
  showDataCategory,
  setIdCategoria,
}) => {
  const handleDeleteCategoriaTable = (indexCategoria) => {
    handleDeleteCategory(indexCategoria);
  };
  const handleEditCategory = (objetoCategoria) => {
    showDataCategory(objetoCategoria);
    setIdCategoria(objetoCategoria.id);
  };
  return (
    <>
      <Tabla>
        <thead className="headtable">
          <tr>
            <th>Nombre</th>
            <th>Descripción</th>
            <th>Color</th>
            <th>Editar</th>
            <th>Remover</th>
          </tr>
        </thead>
        <tbody>
          {categoriasArray.map((objetoCategoria) => {
            return (
              <tr key={objetoCategoria.id}>
                <td>{firstLetterCapital(objetoCategoria.categoria)}</td>
                <td>{objetoCategoria.descripcion.substring(0, 45) + "..."}</td>
                <td
                  style={{ backgroundColor: `${objetoCategoria.color}` }}
                ></td>
                <CeldaEditCategory
                  title={`Editar Categoría: ${objetoCategoria.categoria}`}
                  onClick={() => handleEditCategory(objetoCategoria)}
                >
                  Editar
                </CeldaEditCategory>
                <CeldaDeleteCategory
                  title={`Borrar Categoría: ${objetoCategoria.categoria}`}
                  onClick={() => handleDeleteCategoriaTable(objetoCategoria.id)}
                >
                  Eliminar
                </CeldaDeleteCategory>
              </tr>
            );
          })}
        </tbody>
      </Tabla>
    </>
  );
};

export default TablaDescripcionCategorias;
