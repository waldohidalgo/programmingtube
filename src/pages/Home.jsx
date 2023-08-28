import { useEffect, useState } from "react";
import Banner from "../components/Banner";
import SeccionesCategorias from "../components/SeccionesCategorias";
import { consultaAPI } from "../api/apiJsonServer";
import LoaderSection from "../components/LoaderSection";

const Home = () => {
  const [dataVideos, setDataVideos] = useState([]);
  const [categorias, setCategorias] = useState([]);

  useEffect(() => {
    consultaAPI("videos", setDataVideos);
    consultaAPI("categorias", setCategorias);
  }, []);

  if (dataVideos.length === 0 || categorias.length === 0) {
    return <LoaderSection />;
  } else {
    return (
      <>
        <Banner />
        <SeccionesCategorias categoriasArray={categorias} data={dataVideos} />
      </>
    );
  }
};

export default Home;
