/* eslint-disable react/prop-types */

import { Link } from 'react-router-dom';

const CharacterCard = ({character}) => {
  return (
    <div className="card">
    <img src={character.image} className="card-img-top" alt={character.name} />
    <div className="card-body">
      <h5 className="card-title">{character.name}</h5>
      <Link to={`/character/${character.id}`} className="btn btn-primary">
        View Details
      </Link>
    </div>
  </div>
  )
}

export default CharacterCard