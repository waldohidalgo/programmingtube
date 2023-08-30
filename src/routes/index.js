import Home from "../pages/Home";
import Error404 from "../pages/Error404";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import DefaultPage from "../pages/DefaultPage";

import Header from "../components/header";
import Footer from "../components/Footer";
import PaginaNuevoVideo from "../pages/NuevoVideo";
import { useEffect, useState, createContext, useContext } from "react";

import { consultaAPIYoutube } from "../api/apiyoutube";

import data from "../datos/datos_iniciales.json";
import WatchVideo from "../pages/WatchVideo";
import Categorias from "../pages/WatchCategorias";

const MyWeb = () => {
  const [videos, setVideos] = useState([]);
  useEffect(() => {
    setVideos(data.videos);
  }, []);
  const [categorias, setCategorias] = useState([
    {
      id: 1,
      categoria: "Python",
      descripcion:
        "Lenguaje Script de sintaxis sencilla y de curva de aprendizaje rapida. Posee numerosas librerias y cada vez se hace más poderoso.",
      color: "#6BD1FF",
    },
    {
      id: 2,
      categoria: "JavaScript",
      descripcion:
        "Lenguaje Script de la web el cual se hace más poderoso con el tiempo gracias a innumerables librerias y el paradigma JavaScript Everywhere",
      color: "#9CD33B",
    },
    {
      id: 3,
      categoria: "HTML",
      descripcion: "Lenguaje de marcado para estructurar sitios web.",
      color: "#00C86F",
    },
    {
      id: 4,
      categoria: "CSS",
      descripcion: "Lenguaje de estilización de etiquetas HTML.",
      color: "#6B5BE2",
    },
  ]);

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<DefaultPage />}>
            <Route index element={<Home />} />
            <Route path="add-video" element={<PaginaNuevoVideo />} />
            <Route path="watch-video/:id" element={<WatchVideo />} />
            <Route path="categoria/:categoria" element={<Categorias />} />
            <Route path="*" element={<Error404 />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default MyWeb;

/*<BrowserRouter>
        <Header />
        <Routes>
          <Route
            path="/"
            element={<Home categoriasArray={categorias} data={videos} />}
          />
          <Route
            path="/addvideo"
            element={
              <PaginaNuevoVideo
                categoriasArray={categorias}
                setCategoriasArray={setCategorias}
                handleDataFormAddVideo={handleDataFormAddVideo}
                handleDataFormAddCategoría={handleDataFormAddCategoría}
                handleDeleteCategory={handleDeleteCategory}
              />
            }
          />
          <Route path="/*" element={<Error404 />} />
        </Routes>
        <Footer />
      </BrowserRouter>*/
