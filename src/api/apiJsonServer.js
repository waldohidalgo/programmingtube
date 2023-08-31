import axios from "axios";

const urlAPI = "http://localhost:3001";

export const consultaAPI = async (path, setFunction) => {
  const urlAPIConsulta = `${urlAPI}/${path}`;

  const response = await axios.get(urlAPIConsulta);
  if (response.data.length === 0) {
    throw new Error("Error de Get");
  } else {
    setFunction(response.data);
  }
};

export const addAPIPost = (path, objeto) => {
  const urlAPIPost = `${urlAPI}/${path}`;
  return axios.post(urlAPIPost, objeto);
};

export const deleteAPIPost = (path, id) => {
  const urlAPIDelete = `${urlAPI}/${path}/${id}`;
  return axios.delete(urlAPIDelete);
};
export const editAPIPost = (path, objeto) => {
  const urlAPiEdit = `${urlAPI}/${path}/${objeto.id}`;
  return axios.put(urlAPiEdit, objeto);
};

/*
export const consultaAPI = (path, setFunction) => {
  const urlAPIConsulta = `${urlAPI}/${path}`;

  return axios.get(urlAPIConsulta).then((response) => {
    if (response.data.length === 0) {
      throw new Error("Error de Get");
    } else {
      setFunction(response.data);
    }
  });
};
*/
