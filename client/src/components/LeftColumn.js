import React from "react";
import MediaGallery from "./MediaGallery"
import Grid from "@material-ui/core/Grid";
import StarRatings from 'react-star-ratings'


const LeftColumn = (props) => {
  return (
    <div>
      <div className="title-card">
        <a href="https://www.bestbuy.com/site/nintendo-switch/nintendo-switch-games/pcmcat1484080052161.c?id=pcmcat1484080052161&qp=brand_facet=Brand~Nintendo">Nintendo</a>
        <h3 id="product-title">
          The Legend of Zelda: Breath of the Wild - Nintendo Switch
            </h3>
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
          className="stars"
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
      </div>
      <MediaGallery />
    </div>
  );
};

export default LeftColumn;
