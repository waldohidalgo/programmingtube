import axios from "axios";

const urlAPI = "https://programmingtubeapi.onrender.com";

export const consultaAPI = (path, setFunction) => {
  const urlAPIConsulta = `${urlAPI}/${path}`;

  axios
    .get(urlAPIConsulta)
    .then((response) => {
      setFunction(response.data);
    })
    .catch((error) => console.log(error));
};
