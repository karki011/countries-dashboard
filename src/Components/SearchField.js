import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import SearchIcon from '@material-ui/icons/Search';
import "./SearchField.css"

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
}));

export default function BasicTextFields() {
  const classes = useStyles();

  return (
    <div className="search-field">
    <SearchIcon />
    <form className={classes.root} noValidate autoComplete="off">
      <TextField id="filled-basic" label="Search..." />
    </form>
    </div>
  );
}