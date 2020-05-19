import React from 'react';
import './App.css';
import { TitleBar, SearchAndFilter, CountryCards} from "./Components"

function App() {
  return (
    <div className="App">
      <TitleBar /> 
      <SearchAndFilter />
      <CountryCards />
    </div>
  );
}

export default App;
