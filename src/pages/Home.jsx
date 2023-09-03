import { useEffect, useState } from "react";
import Banner from "../components/Banner";
import SeccionesCategorias from "../components/SeccionesCategorias";
import { consultaAPI } from "../api/apiJsonServer";
import LoaderSection from "../components/LoaderSection";
import Acordion from "../components/Acordion";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const [dataVideos, setDataVideos] = useState([]);
  const [categorias, setCategorias] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    consultaAPI("videos", setDataVideos).catch(() => {
      navigate("/no-existe-data");
    });
    consultaAPI("categorias", setCategorias).catch(() => {
      navigate("/no-existe-data");
    });
  }, []);

  if (dataVideos.length === 0 || categorias.length === 0) {
    return <LoaderSection />;
  } else {
    return (
      <>
        <Banner />
        <Acordion />
        <SeccionesCategorias categoriasArray={categorias} data={dataVideos} />
      </>
    );
  }
};

export default Home;
