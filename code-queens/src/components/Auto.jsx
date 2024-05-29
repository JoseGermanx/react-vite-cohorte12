
//props o propiedades son un objeto que puede recibir el componente



const Auto = ({marca, modelo, descripcion, anio}) => {
  return (
    <div className="card" style={{width: "18rem;"}}>
      <div className="card-body">
        <h5 className="card-title">{marca}</h5>
        <h6 className="card-subtitle mb-2 text-body-secondary">
          {modelo}
        </h6>
        <p className="card-text">
         {descripcion}
        </p>
        <p>{anio}</p>
      </div>
    </div>
  );
};

export default Auto;
