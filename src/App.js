import React from 'react';
import './App.css';
import Button from '@material-ui/core/Button';
import { TitleBar, SearchAndFilter, CountryDetail, CountryPreview} from "./Components"


const COUNTRY_LIST_URL = "https://restcountries.eu/rest/v2/all"

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      page: "home",
      daymode: true,
      region: "all",
      searchValue: "",
    };  
    this.handlePageChange = this.handlePageChange.bind(this)
    this.handlePageView = this.handlePageView.bind(this)
    this.handleSortAndFilter = this.handleSortAndFilter.bind(this)
    this.handleRegionSelection = this.handleRegionSelection.bind(this)
    this.handleSearchChange = this.handleSearchChange.bind(this)
  }
  
  handlePageView(){
    if(this.state.page === "home"){
      return (
        <div className="main-content">
          <SearchAndFilter 
            handleSearchChange={this.handleSearchChange}
            handleRegionSelection={this.handleRegionSelection}
          />
          <div className="country-list">
          {this.handleSortAndFilter().map(country => (
            <div onClick={() => {
              this.handlePageChange(country.name);
            }}>
            <CountryPreview
              key={country.name}
              flagUrl={country.flag}
              name={country.name}
              population={country.population}
              region={country.region}
              capital={country.capital}
            />
            </div>
            ))}
            </div>
        </div>
      )
    }

    else {
      return(
        <div className="country-detail-view">
          <Button className="backButton" variant="outlined" onClick={() => {
              this.handlePageChange("home");
            }}>Back</Button>
          <CountryDetail 
            handlePageChange = {this.handlePageChange} 
            country={this.state.countryDetail[0]} />
        </div>
      )
    }
  }

  handlePageChange(countryName){
    let countryDetails = this.state.countries.filter(country => {
      return country.name === countryName
    })
    console.log(countryDetails, countryName)
    this.setState({page: countryName, "countryDetail": countryDetails})
  }

  handleSortAndFilter(){
    if(this.state.countries){
      if(this.state.region === "all" && this.state.searchValue === ""){
        return this.state.countries
      }
      let filteredCountries = []
      if(this.state.region !== "all"){
          filteredCountries = this.state.countries.filter(country => {
            return country.region === this.state.region
          })
      }
      else {
        filteredCountries = this.state.countries
      }
      filteredCountries = filteredCountries.filter(country => {
        return country.name.toLowerCase().includes(this.state.searchValue.toLowerCase())
      })
      if(filteredCountries){
        return filteredCountries
      }
      else{
        return [{name: "No results found"}]
      }
    }
    else {
      return ["loading"]
    }
  }

  handleRegionSelection(e){
    this.setState({region: e})
  }
  
  handleSearchChange(e){
    this.setState({searchValue: e.target.value})
  }

  componentDidMount() {
    fetch(COUNTRY_LIST_URL)
    .then(results => results.json())
    .then(countries => {
      this.setState({ countries: countries })
    })
  }
  render(){
  return (
    <div className="App">
      <TitleBar /> 
      {this.handlePageView()}
     
    </div>
  );
  }
}

export default App;
