import Banner from "../components/Banner";
import SeccionesCategorias from "../components/SeccionesCategorias";

const Home = ({ categoriasArray, data }) => {
  return (
    <>
      <Banner />
      <SeccionesCategorias categoriasArray={categoriasArray} data={data} />
    </>
  );
};

export default Home;
