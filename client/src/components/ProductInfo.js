import React from "react";
import Grid from "@material-ui/core/Grid";
import LeftColumn from './LeftColumn';
import RightColumn from './RightColumn';



const ProductInfo = (props) => {
  return (
    <div>
      <Grid container spacing={2}>
        <Grid id="left-column" item xs={8}>
          <LeftColumn />
        </Grid>
        <Grid id="right-column" item xs={4}>
          <RightColumn />
        </Grid>
      </Grid>
    </div>
  );
};

export default ProductInfo;
