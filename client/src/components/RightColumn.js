import React from "react";
import Grid from "@material-ui/core/Grid";
import Pricing from "./Pricing";
import AddToCart from "./AddToCart";



const RightColumn = (props) => {
  return (
    <div>
      <Pricing />
      <AddToCart />
    </div>
  );
};

export default RightColumn;