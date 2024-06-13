import { useState } from "react";

import { useNavigate } from "react-router-dom";
import BtnCerrarSesion from "./BtnCerrarSesion";

// mostrar datos del usario logueado
function Perfil() {
  const [usuario, setUsuario] = useState(JSON.parse(localStorage.getItem("user")) || null); /// leer el valor del localstore
    const navigate = useNavigate();

  return (
    <div className="container">
      {usuario === null ? (
        <>
        <h1>No hay usuario logueado</h1>
        <button className="btn btn-info " onClick={() => navigate('/registro')}>Registrar Usuario</button>
        <button className="btn btn-info " onClick={() => navigate('/login')}>Login</button>
        </>
      ) : (
        <>
          <h1>Datos del Usuario</h1>
          <p>Nombre: {usuario.name} </p>
          <p>Correo Electrónico: {usuario.email} </p>
          <p>ID: {usuario.id} </p>
          <BtnCerrarSesion />
        </>
      )}
    </div>
  );
}

export default Perfil;
