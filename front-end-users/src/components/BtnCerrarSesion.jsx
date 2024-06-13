
import { useNavigate } from "react-router-dom"

const BtnCerrarSesion = () => {

    const navigate = useNavigate()

    const cerrarSesion = () => {
        localStorage.removeItem('user')
        navigate('/login')
    }


  return (
    <button className='btn btn-danger' onClick={cerrarSesion}>Cerrar sesión</button>
  )
}

export default BtnCerrarSesion