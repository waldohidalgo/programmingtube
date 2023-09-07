import axios from "axios";

const urlAPI = "https://aggressive-yak-beret.cyclic.cloud";

/*https://aggressive-yak-beret.cyclic.cloud*/

export const consultaAPI = (path, setFunction) => {
  const urlAPIConsulta = `${urlAPI}/${path}`;

  return axios
    .get(urlAPIConsulta)
    .then((response) => {
      if (response.data.length === 0) {
        throw new Error("Error de Get");
      } else {
        setFunction([...response.data]);
      }
    })
    .catch((error) => {
      throw new Error("Error de Get");
    });
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
