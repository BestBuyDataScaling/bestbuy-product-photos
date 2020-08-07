import React from "react";
import MediaGallery from "./MediaGallery"
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/paper";
import StarRatings from 'react-star-ratings'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.primary,
  },
}));

const ProductInfo = (props) => {
  const classes = useStyles();
  return (
    <div>
      <Grid container spacing={2}>
        <Grid id="left-column" item xs={8}>
          <Paper className={classes.paper}>
            <Grid container>
              <a href="https://www.bestbuy.com/site/nintendo-switch/nintendo-switch-games/pcmcat1484080052161.c?id=pcmcat1484080052161&qp=brand_facet=Brand~Nintendo">Nintendo</a>
            </Grid>
            <Grid
              container
              justify="flex-start"
              direction="row">
              <h3 id="product-title">
                The Legend of Zelda: Breath of the Wild - Nintendo Switch
              </h3>
            </Grid>
            <Grid
              container
              className="productStats"
              direction="row"
              alignItems="center"
            >
              <strong>Brand:</strong>
              <p>Nintendo </p>
              <strong>SKU:</strong>
              <p>5721500</p>
            </Grid>
            <Grid
              container
              className="productStats"
              direction="row"
              alignItems="center">
              <StarRatings
                rating={4.8}
                starRatedColor="yellow"
                numberOfStars={5}
                starDimension="20px"
                starSpacing="0px"
                name="product-rating"
              />
              <p>4.9</p>
            </Grid>
            <MediaGallery />
          </Paper>
        </Grid>
        <Grid id="right-column" item xs={4}>
          <Paper className={classes.paper}>RightColumn</Paper>
        </Grid>
      </Grid>
    </div>
  );
};

export default ProductInfo;
