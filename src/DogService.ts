// DogService.ts
import axios from 'axios';

const API_KEY = 'live_9bBBvkq80sg5R0pxOcKfPHcHjkvWykKmjQZ5Xw1R8z0DJDlUTBaQhEtk8zHfkgUQ'; // Replace with your API key if required
const API_BASE_URL = 'https://api.thedogapi.com/v1';

axios.defaults.headers.common['x-api-key'] = API_KEY;

export const fetchBreeds = async () => {
    try {
        const response = await axios.get(`${API_BASE_URL}/breeds`);
        return response.data;
    } catch (error) {
        console.error('Error fetching dog breeds:', error);
        return [];
    }
};

export const fetchBreedDetails = async (breedId: string) => {
    try {
        const response = await axios.get(`${API_BASE_URL}/breeds/${breedId}`);
        return response.data[0];
    } catch (error) {
        console.error('Error fetching breed details:', error);
        return {};
    }
};

export const fetchBreedImage = async (breedId: number) => {
    try {
        const response = await axios.get(`${API_BASE_URL}/images/search?breed_id=${breedId}`);
        return response.data[0]?.url;
    } catch (error) {
        console.error('Error fetching breed image:', error);
        return '';
    }
};
