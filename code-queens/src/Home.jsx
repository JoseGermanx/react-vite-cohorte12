import { useState } from "react" // hooks ---- ganchos!! useState


const Home = () => {

    
//definicion del estado contador
    const [contador, setContador ] = useState(0)

    const incrementar = () => {
        setContador(contador + 1)
    }

  return (
    <div>
        <h1>Contador</h1>
        <h2>{contador}</h2>
        <button
        onClick={incrementar}
        >Aumentar contador</button>
        <button>Disminuir contador</button>
    </div>
  )
}

export default Home