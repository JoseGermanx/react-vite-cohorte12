import { useState, useEffect } from 'react'

import './Semaforo.css'



const Semaforo = () => {

 
    const [color, setColor] = useState(null);
   
    const handleClick = (newColor) => {
      setColor(color === newColor ? '' : newColor);
    }



    // manejar efectos secundarios en el componente después que ha sido renderizado
    useEffect(()=>{
    //   setTimeout(() => {
    //   if(color !== null) {
    //     setColor(null)
    //   }
    // },2000)

    if(color !== null) {
    alert('El color del semáforo es: ' + color)
  }


    }, [color])





 
   
  return (
    <>
      <div className="traffic-signal">
      <div
        className={`light red ${color === 'red' ? 'glow' : ''}`}
        onClick={() => handleClick('red')}
      />
        <div
          className={`light yellow ${color === 'yellow' ? 'glow' : ''}`}
          onClick={() => handleClick('yellow')}
        ></div>
        <div
          className={`light green ${color === 'green' ? 'glow' : ''}`}
          onClick={() => handleClick('green')}
        ></div>
      </div>
      <button onClick={() => setColor(null)}>Reset</button>
    </>
  )
}

export default Semaforo