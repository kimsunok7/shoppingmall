import React from "react";

const ProductCard = ({ item }) => {
  return (
    <div className="product">
      <img src={item?.img}></img>
      <div>{item?.choice == true ? "추천상품" : " "}</div>
      <div>{item?.title}</div>
      <div>{item?.price}</div>
      <div>{item?.new == true ? "신제품" : " "}</div>
    </div>
  );
};

export default ProductCard;