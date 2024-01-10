// BreedsCatalog.tsx
import React, { useContext, useEffect } from 'react';
import { DogContext } from './DogContext';

const BreedsCatalog: React.FC = () => {
  const { dispatch } = useContext(DogContext);

  useEffect(() => {
    const fetchBreeds = async () => {
      try {
        const response = await fetch('https://api.thedogapi.com/v1/breeds');
        const data: Breed[] = await response.json();
        dispatch({ type: 'SET_BREEDS', payload: data });
      } catch (error) {
        console.error('Error fetching dog breeds:', error);
      }
    };

    fetchBreeds();
  }, [dispatch]);

  return (
    <div>
      <h1>Dog Breeds Catalog</h1>
      {/* You can no longer access state here, as it's not part of DogContextProps */}
    </div>
  );
};

export default BreedsCatalog;
