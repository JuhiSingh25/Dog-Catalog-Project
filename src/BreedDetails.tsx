// BreedDetails.tsx
import React, { useContext, useEffect } from 'react';
import { DogContext } from './DogContext';

const BreedDetails: React.FC = () => {
  const { state } = useContext(DogContext);

  useEffect(() => {
    const fetchBreedDetails = async () => {
      try {
        if (state.selectedBreed) {
          // Fetch breed details and image from The Dog API based on selectedBreed
          const response = await fetch(`https://api.thedogapi.com/v1/breeds/${state.selectedBreed.id}`);
          const data: Breed = await response.json();
          // Use the fetched data to update your state or display the details
          console.log('Breed details:', data);
        }
      } catch (error) {
        console.error('Error fetching breed details:', error);
      }
    };

    fetchBreedDetails();
  }, [state.selectedBreed]);

  return (
    <div>
      <h2>{state.selectedBreed ? state.selectedBreed.name : 'Select a breed'}</h2>
      {/* Display breed details and image here */}
    </div>
  );
};

export default BreedDetails;
