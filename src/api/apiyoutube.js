import axios from "axios";

const apiKey = process.env.REACT_APP_YOUTUBE_API_KEY;

export const consultaAPIYoutube = (url) => {
  const videoInput = url.match(
    /(?:\?v=|\/embed\/|\/\d\/|\/vi\/|\/e\/|\/v\/|id=)([^&\n?#]+)/
  );

  let videoId;

  if (!videoInput) {
    videoId = "";
  } else {
    videoId = videoInput[1];
  }

  const apiUrl = `https://www.googleapis.com/youtube/v3/videos?id=${videoId}&key=${apiKey}&part=snippet`;

  // Realizar una solicitud a la API
  /* fetch(apiUrl)
    .then((response) => response.json())
    .then((data) => {
      if (data.items.length > 0) {
        console.log("Video activo:", data.items[0].snippet.title);
      } else {
        console.log("El video no es válido o no está activo.");
      }
    })
    .catch((error) => {
      console.error("Error al verificar el video:", error);
    });
    */

  return axios.get(apiUrl);
};

export const idVideoYoutube = (url) => {
  const videoInput = url.match(
    /(?:\?v=|\/embed\/|\/\d\/|\/vi\/|\/e\/|\/v\/|id=)([^&\n?#]+)/
  );
  const videoId = videoInput[1];
  return videoId;
};
