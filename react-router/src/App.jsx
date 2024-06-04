import { BrowserRouter, Route, Routes } from "react-router-dom";

import "./App.css";
import Home from "./views/Home";
import About from "./views/About";
import Contacto from "./views/Contacto";
import Registro from "./views/Registro";
import DetalleProducto from "./views/DetalleProducto";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/quienes-somos" element={<About />} />
        <Route path="/contacto" element={<Contacto />} />
        <Route path="/registro" element={<Registro />} />
        <Route path="/detalle/:id" element={<DetalleProducto />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
