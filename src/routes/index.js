import Home from "../pages/Home";
import Error404 from "../pages/Error404";
import { Route, BrowserRouter, Routes } from "react-router-dom";

import Header from "../components/header";
import Footer from "../components/Footer";

const myRoutes = () => {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/*" element={<Error404 />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
};

export default myRoutes;
