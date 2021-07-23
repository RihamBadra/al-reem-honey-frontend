import React from "react";
import "../styles/productsStyle.css";
const Card = (props) => {
  return (
    <div id="addmargin">
      <div className="product__list">
        <img
          className="product__img"
          src={props.productData.imgUrl}
          alt={props.productData.title}
        />
      </div>
    </div>
  );
};

export default Card;
