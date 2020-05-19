import React from "react"
import "./CountryDetail.css"
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';




const useStyles = makeStyles({
  root: {
    maxWidth: 700,
  },
  media: {
    height: 450,
  },
});

export default function CountryPreview(props) {
  const classes = useStyles();

  return (
    <Card className={classes.root + "country-detail"}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={props.country.flag}
          title={`${props.country.name}'s flag`}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {props.country.name}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="span">
            <p><b>Native Name:</b>{props.country.nativeName}</p>
            <p><b>Population: </b> {props.country.population}</p>
            <p><b>Region: </b> {props.country.region}</p>
            <p><b>Sub Region: </b> {props.country.subregion}</p>
            <p><b>Capital: </b> {props.country.capital}</p>
          </Typography>
          <br />
          <Typography variant="body2" color="textSecondary" component="span">
            <p><b>Top Level Domain: </b>{props.country.topLevelDomain}</p>
            <p><b>Currencies: </b> {props.country.currencies.map(x =>(x.name + " "))}</p>
            <p><b>Languages: </b> {props.country.languages.map(x =>(x.name + " "))}</p>
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <b>Border Country Codes</b>
        {props.country.borders.map(country => (
        <Button key={country} size="small" color="primary">
          {country}
        </Button>
        ))}
      </CardActions>
    </Card>
  )
};