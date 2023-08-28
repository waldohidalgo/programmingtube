import axios from "axios";
import swal from "sweetalert";

const apiKey = process.env.REACT_APP_YOUTUBE_API_KEY;

export const consultaAPIYoutube = (
  url,
  videos,
  setVideos,
  nombreVideo,
  categoria,
  descripcionVideo
) => {
  const videoInput = url.match(
    /(?:\?v=|\/embed\/|\/\d\/|\/vi\/|\/e\/|\/v\/|id=)([^&\n?#]+)/
  );

  if (!videoInput) {
    swal(
      "¡ Error !",
      "La URL ingresada no corresponde a video o no es un video válido",
      "error"
    );
    return;
  }

  const videoId = videoInput[1];

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

  axios
    .get(apiUrl)
    .then((response) => {
      const data = response.data;
      if (data.items.length > 0) {
        swal("¡ Éxito !", "Se ha guardado el video", "success");

        const nuevoVideo = {
          id: videos.length + 1,
          titulo: nombreVideo,
          categoria: categoria,
          descripcion: descripcionVideo,
          url: `https://www.youtube.com/embed/${videoId}`,
          imagen: `https://i3.ytimg.com/vi/${videoId}/maxresdefault.jpg`,
        };
        setVideos([...videos, nuevoVideo]);
        console.log(nuevoVideo);

        return;
      } else {
        swal("¡ Error !", "El video no es válido o no está activo.", "error");
        return;
      }
    })
    .catch((error) => {
      swal("¡ Error !", "Error al verificar el video.", "error");
      console.error("Error al verificar el video:", error);
      return;
    });
};
