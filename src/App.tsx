// App.tsx
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import BreedsCatalog from './BreedsCatalog';
import BreedDetails from './BreedDetails';
import CompareBreeds from './CompareBreeds';
import { DogContextProvider } from './DogContext';

const App: React.FC = () => {
  return (
    <Router>
      <DogContextProvider>
        <Switch>
          <Route path="/" exact component={BreedsCatalog} />
          <Route path="/breeds/:breedId" component={BreedDetails} />
          <Route path="/compare" component={CompareBreeds} />
        </Switch>
      </DogContextProvider>
    </Router>
  );
};

export default App;
