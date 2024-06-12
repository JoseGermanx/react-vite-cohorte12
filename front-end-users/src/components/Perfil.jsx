import { useState } from "react";

import { useNavigate } from "react-router-dom";

// mostrar datos del usario logueado
function Perfil() {
  const [usuario, setUsuario] = useState(null);
    const navigate = useNavigate();

  return (
    <div className="container">
      {usuario === null ? (
        <>
        <h1>No hay usuario registrado</h1>
        <button className="btn btn-info " onClick={() => navigate('/registro')}>Registrar Usuario</button>
        </>
      ) : (
        <>
          <h1>Datos del Usuario</h1>
          <p>Nombre: </p>
          <p>Apellido: </p>
          <p>Correo Electrónico: </p>
        </>
      )}
    </div>
  );
}

export default Perfil;
