/* eslint-disable react/prop-types */
import Button from "../Button/Button";

const Card = ({titulo, descripcion, textoBtn}) => {
  return (
    <div className="card" style={{width: "18rem;"}}>
      <div className="card-body">
        <h5 className="card-title">{titulo}</h5>
        <h6 className="card-subtitle mb-2 text-body-secondary">
          Card subtitle
        </h6>
        <p className="card-text">
          {descripcion}
        </p>
        <a href="#" className="card-link">
          Card link
        </a>
        <a href="#" className="card-link">
          Another link
        </a>
      </div>
      <Button texto={textoBtn}/>
    </div>
  );
};


export default Card;