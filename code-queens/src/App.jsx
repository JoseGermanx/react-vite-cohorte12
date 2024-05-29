// propiedades en ReactJS Props

import Auto from "./components/Auto";

/// se pueden pasar información de un componente padre a un componente hijo a través de las props.

// App
//  |
//  |
//  Card

let listaDeAutos = [
  {
    marca: "Toyota",
    modelo: "4runner",
    descripcion: "Rústico todo terreno 4x4",
    anio: "2024",
  },
  {
    marca: "Ford",
    modelo: "F150",
    descripcion: "Rústico todo terreno 4x4",
  },
];

const agregarAuto = () => {
  listaDeAutos.concat({
    marca: "Chevrolet",
    modelo: "Silverado",
    descripcion: "Rústico todo terreno 4x4",
    anio: "2024",
  });
};

function App() {
  return (
    <div className="container my-5">
      {listaDeAutos.map((auto, index) => {
        return (
          <Auto
            key={index}
            marca={auto.marca}
            modelo={auto.modelo}
            descripcion={auto.descripcion}
            anio={auto.anio}
          />
        );
      })}
      <button className="btn btn-primary my-4" onClick={() => agregarAuto()}>Agregar Auto</button>
    </div>
  );
}

export default App;
