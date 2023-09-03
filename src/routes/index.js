import Home from "../pages/Home";
import Error404 from "../pages/Error404";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import DefaultPage from "../pages/DefaultPage";

import PaginaNuevoVideo from "../pages/NuevoVideo";

import WatchVideo from "../pages/WatchVideo";
import Categorias from "../pages/WatchCategorias";
import SearchPage from "../pages/Search";
import SeccionCopyright from "../pages/Copyright";
import EditDeleteVideoPage from "../pages/DeleteEditVideo";
import NoExisteData from "../pages/NoExisteData";
import EditarVideo from "../pages/EditarVideo";

const MyWeb = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<DefaultPage />}>
            <Route index element={<Home />} />
            <Route path="add-video" element={<PaginaNuevoVideo />} />
            <Route path="watch-video/:id" element={<WatchVideo />} />
            <Route path="categoria/:categoria" element={<Categorias />} />
            <Route path="search" element={<SearchPage />} />
            <Route path="copyright" element={<SeccionCopyright />} />
            <Route
              path="edit-delete-videos"
              element={<EditDeleteVideoPage />}
            />
            <Route path="no-existe-data" element={<NoExisteData />} />
            <Route path="editar-video/:id" element={<EditarVideo />} />
            <Route path="*" element={<Error404 />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default MyWeb;
