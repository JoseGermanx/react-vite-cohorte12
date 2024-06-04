import { useState, useEffect } from 'react';

import CharacterCard from './CharacterCard';

function CharacterList() {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    fetch('https://rickandmortyapi.com/api/character')
      .then(response => response.json())
      .then(data => setCharacters(data.results));
  }, []);

  return (
    <div>
      <h1>Rick and Morty Characters</h1>
      <div className="row">
        {characters.map(character => (
          <div key={character.id} className="col-md-4 mb-4">
           <CharacterCard character={character} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default CharacterList;
