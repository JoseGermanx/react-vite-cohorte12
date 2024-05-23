import Aside from "./Aside"
import HeaderInterno from "./HeaderInterno"
import MainContainer from "./MainContainer"


const Container = () => {
  return (
    <div className="container">
        <HeaderInterno />
        <MainContainer />
        <Aside  />
    </div>
  )
}

export default Container