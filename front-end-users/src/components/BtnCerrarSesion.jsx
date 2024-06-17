import { useNavigate } from "react-router-dom";

const BtnCerrarSesion = () => {
  const navigate = useNavigate();

  const cerrarSesion = () => {
    localStorage.removeItem("user");
    fetch("http://localhost:3000/api/v1/logout", {
      method: "POST",
      credentials: "include",
    })
      .then((res) => res.json())
      .then((data) => {
        alert(data.msg);
        navigate("/login")
      })
      .catch((error) => console.error("Error:", error));
  };

  return (
    <button className="btn btn-danger" onClick={cerrarSesion}>
      Cerrar sesión
    </button>
  );
};

export default BtnCerrarSesion;
