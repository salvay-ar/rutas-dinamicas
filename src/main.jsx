import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Inicio from "./Inicio.jsx";
import Peliculas from "./Peliculas.jsx";
import All from "./Catalogo.jsx";
import Detalles from "./DetallesPeliculas.jsx";

import { BrowserRouter, Route, Routes } from "react-router-dom";
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Inicio />}></Route>
        <Route path="peliculas" element={<Peliculas />}>
          <Route path="all" element={<All/>}></Route>
          <Route path=":id" element={<Detalles />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
