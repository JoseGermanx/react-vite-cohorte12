import { BrowserRouter, Route, Routes } from "react-router-dom";

import "./App.css";
import Home from "./views/Home";
import About from "./views/About";
import Contacto from "./views/Contacto";
import Registro from "./views/Registro";
import Plantilla from "./views/Plantilla";
import Game from "./views/Game";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Plantilla />}>
          <Route index element={<Home />} />
          <Route path="/quienes-somos" element={<About />} />
          <Route path="/contacto" element={<Contacto />} />
          <Route path="/game" element={<Game />} />
        </Route>
        <Route path="/registro" element={<Registro />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
