

import { Outlet } from "react-router-dom"
import NavBar from "../components/NavBar"

const Plantilla = () => {
  return (
    <div>
        <NavBar />
        <Outlet />
    </div>
  )
}

export default Plantilla