import React from "react"
import "./CountryCards.css"

export default function CountryCards(props){
    return(
        <div className="country-cards">
            <img className="country-flag" src={props.flagUrl} alt={`${props.name}'s flag`} />
            <h4 className="country-name">{props.name}</h4>
            <p><b>Population: </b> {props.population}</p>
            <p><b>Region: </b> {props.region}</p>
            <p><b>Capital: </b> {props.capital}</p>
        </div>
    )
}