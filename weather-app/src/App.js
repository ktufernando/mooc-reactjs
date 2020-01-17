import React from 'react';
import LocationList from './components/LocationList';
import './App.css';

const cities = [
  'Buenos Aires,ar',
  'Washington,us',
  'Barcelona,es',
  'Bogota,col',
  'Lima,pe'
];

function App() {

  handleSelectionLocation = city => ();

  return (
    <div className="App">
      <LocationList cities={cities}
        onSelectedLocation={this.handleSelectionLocation}></LocationList>
    </div>
  );
}

export default App;
