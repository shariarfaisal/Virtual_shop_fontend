import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';

const useStyles = makeStyles({
  root: {
    width: 300,
  },
});

function valuetext(value) {
  return `$${value}`;
}

const Range = (props) => {
  const classes = useStyles();
  const [value, setValue] = React.useState([4, 37]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <h5 className="text-muted">Price</h5>
      <Slider
        value={value}
        onChange={handleChange}
        min={0}
        valueLabelDisplay="auto"
        aria-labelledby="range-slider"
        getAriaValueText={valuetext}
      />
      <div className="d-flex">
        <span className="mr-auto">${value[0]}</span>
        <span className="ml-auto">${value[1]}</span>
      </div>
    </div>
  );
}

export default Range
