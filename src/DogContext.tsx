// DogContext.js
import React, { createContext } from 'react';

const DogContext = createContext();

class DogContextProvider extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      breeds: [],
      selectedBreed: null,
      comparedBreeds: [],
    };
  }

  dispatch = (action: { type: any; payload: { id: any; }; }) => {
    switch (action.type) {
      case 'SET_BREEDS':
        this.setState({ breeds: action.payload });
        break;
      case 'SET_SELECTED_BREED':
        this.setState({ selectedBreed: action.payload });
        break;
      case 'ADD_COMPARED_BREED':
        this.setState((prevState) => ({
          comparedBreeds: [...prevState.comparedBreeds, action.payload],
        }));
        break;
      case 'REMOVE_COMPARED_BREED':
        this.setState((prevState) => ({
          comparedBreeds: prevState.comparedBreeds.filter(
            (breed) => breed.id !== action.payload.id
          ),
        }));
        break;
      default:
        break;
    }
  };

  render() {
    return (
      <DogContext.Provider
        value={{ state: this.state, dispatch: this.dispatch }}
      >
        {this.props.children}
      </DogContext.Provider>
    );
  }
}

export { DogContext, DogContextProvider };
