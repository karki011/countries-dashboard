import React from 'react';
import './App.css';
import { TitleBar, SearchAndFilter, CountryCards} from "./Components"


const COUNTRY_LIST_URL = "https://restcountries.eu/rest/v2/all"

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      "page": "home",
      "daymode": true,
    };  
  }

  componentDidMount(){
    fetch(COUNTRY_LIST_URL)
    .then(results => results.json())
    .then(countries => {
      this.setState({ countries })
    })
  }

  render(){
  const { countries = [] } = this.state;
  return (
    <div className="App">
      <TitleBar /> 
      <SearchAndFilter />
      {countries.map(country => (
        <CountryCards
          flagUrl={country.flag}
          name={country.name}
          population={country.population}
          region={country.region}
          capital={country.capital}
        />
      ))}
      <CountryCards />
    </div>
  );
  }
}

export default App;
