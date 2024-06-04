import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

function CharacterDetail() {
  const { id } = useParams();
  const [character, setCharacter] = useState(null);

  useEffect(() => {
    fetch(`https://rickandmortyapi.com/api/character/${id}`)
      .then(response => response.json())
      .then(data => setCharacter(data));
  }, [id]);

  if (!character) {
    return <div>Loading...</div>;
  }

  return (
    <>
    <div className='container my-5 mt-5'>
      <h1>{character.name}</h1>
      <img src={character.image} alt={character.name} className="img-fluid" />
      <p>Status: {character.status}</p>
      <p>Species: {character.species}</p>
      <p>Gender: {character.gender}</p>
      <p>Origin: {character.origin.name}</p>
    </div>
    <button className="btn btn-primary mb-5" onClick={() => window.history.back()}>Go Back</button>
    </>
  );
}

export default CharacterDetail;
