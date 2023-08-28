import { Outlet } from "react-router-dom";
import Header from "../components/header";
import Footer from "../components/Footer";

const DefaultPage = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

export default DefaultPage;
