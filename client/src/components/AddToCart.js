import React from "react";
import Grid from "@material-ui/core/Grid";
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';

const useStyles = makeStyles((theme) => ({
  button: {
    margin: theme.spacing(0),
    width: "100%"
  }
}));

const AddToCart = (props) => {
  const classes = useStyles();
  return (
    <div>
      <div id="shipping">
        <div id="pickupContainer">
          <strong id="pickup">Pickup in 1 hour at South Austin</strong>
        </div>
        <a id="location" href="https://www.bestbuy.com/site/the-legend-of-zelda-breath-of-the-wild-nintendo-switch/5721500.p?skuId=5721500">Change Pickup Location</a>
        <Grid
          container
          className="shipping"
          direction="row"
          alignItems="center"
        >
          <strong>Shipping: </strong>
          <p>Free 2 Day Shipping to 78729</p>
        </Grid>
      </div>
      <div className="addtocart">
        <Button
          id="cartbutton"
          variant="contained"
          className={classes.button}
          size="large"
          startIcon={<ShoppingCartIcon />}
        >
          Add to Cart
          </Button>
        <Button
          id="bundle"
          variant="contained"
          className={classes.button}
          size="large"
        >
          Build A Bundle
          </Button>
        <Grid
          container
          className="compare"
          direction="row"
          alignItems="center"
        >
        </Grid>
      </div>
      <div className="offers">
        <h3>Cardmember Offers</h3>
        <a href="https://www.bestbuy.com/site/misc/my-best-buy/pcmcat309300050007.c?id=pcmcat309300050007">Get Rewards</a>
      </div>
    </div>
  );
};

export default AddToCart;