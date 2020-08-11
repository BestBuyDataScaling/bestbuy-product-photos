import React from "react";
import Pricing from "./Pricing";
import AddToCart from "./AddToCart";



const RightColumn = (props) => {
  return (
    <div>
      <Pricing price={props.price}
        options={props.options}
        option={props.option}
        selectOnChange={props.selectOnChange}
      />
      <AddToCart />
    </div>
  );
};

export default RightColumn;