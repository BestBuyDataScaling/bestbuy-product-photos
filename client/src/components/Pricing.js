import React from "react";
import Grid from "@material-ui/core/Grid";
import PolicyIcon from "@material-ui/icons/Policy"
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Checkbox from '@material-ui/core/Checkbox';

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(0),
    minWidth: 100,
    display: 'flex',
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

const Pricing = (props) => {
  const classes = useStyles();
  const handleSelectChange = (event) => {

  };

  return (
    <div>
      <div>
        <a href="https://www.bestbuy.com/site/customer-service/price-match-guarantee/pcmcat290300050002.c?id=pcmcat290300050002">Price Match Guarantee</a>
      </div>
      <div>
        <h1 id="price">$49.99</h1>
      </div>
      <div id="options">
        <FormControl variant="outlined" className={classes.formControl}>
          <InputLabel id="options-label">Options</InputLabel>
          <Select
            labelId="options-select"
            id="demo-simple-select-outlined"
            value={10}
            onChange={handleSelectChange}
            label="Options"
          >
            <MenuItem value={10}>Physical Copy</MenuItem>
            <MenuItem value={20}>Digital Download</MenuItem>
          </Select>
        </FormControl>
      </div>
      <div id="protection">
        <Grid
          container
          className="protection"
        >
          <PolicyIcon />
          <strong>Protect your Purchase</strong>
        </Grid>
        <Grid container alignItems="center">
          <Checkbox color="default" />
          <p>2-year Geek Squad Product Replacement</p>
          <p id="protection-price">$9.99</p>
        </Grid>
        <a href="https://www.bestbuy.com/site/geek-squad-protection/product-replacement-plan/pcmcat281800050012.c?id=pcmcat281800050012">Learn More</a>
      </div>
    </div>
  );
};

export default Pricing;