// CompareBreeds.tsx
import React, { useContext } from 'react';
import { DogContext } from './DogContext';

const CompareBreeds: React.FC = () => {
  const { state, dispatch } = useContext(DogContext);

  const handleCompare = (breed: Breed) => {
    if (state.comparedBreeds.length < 3) {
      dispatch({ type: 'ADD_COMPARED_BREED', payload: breed });
    }
  };

  const handleRemoveComparison = (breed: Breed) => {
    dispatch({ type: 'REMOVE_COMPARED_BREED', payload: breed });
  };

  return (
    <div>
      <h1>Compare Dog Breeds</h1>
      <div>
        {state.breeds.map(breed => (
          <div key={breed.id}>
            <label>
              <input
                type="checkbox"
                checked={state.comparedBreeds.includes(breed)}
                onChange={() => (state.comparedBreeds.includes(breed) ? handleRemoveComparison(breed) : handleCompare(breed))}
              />
              {breed.name}
            </label>
          </div>
        ))}
      </div>
      <div>
        {state.comparedBreeds.map(breed => (
          <div key={breed.id}>
            <p>{breed.name}</p>
            {/* Display additional details for compared breeds */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default CompareBreeds;
