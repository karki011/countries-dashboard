import React from "react"
import "./CountryPreview.css"
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';




const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});

export default function CountryPreview(props) {
  const classes = useStyles();

  return (
    <Card className={classes.root + " country-preview"}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={props.flagUrl}
          title={`${props.name}'s flag`}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {props.name}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="span">
            <p><b>Population: </b> {props.population}</p>
            <p><b>Region: </b> {props.region}</p>
            <p><b>Capital: </b> {props.capital}</p>
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  )
};