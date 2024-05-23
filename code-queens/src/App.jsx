


import Card from './components/Card/Card'
import NavBar from './components/Navbar/NavBar'

function App() {

  return (
    <>
    <NavBar />
    <Card titulo={"Título número 1"} descripcion={"Esta es la descripción número 1"} textoBtn={"Cancelar"}/>
    <Card titulo= {"Título número 2"} descripcion={"Esta es la descripción número 2"} textoBtn={"Enviar"}/>   
    </>
  )
}

export default App
