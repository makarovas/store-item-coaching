import React from "react";

const ItemList = ({ key, name, price }) => {
  return (
    <li key={key}>
      <div
        style={{
          width: "300px",
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center"
        }}
      >
        <span>{name}</span>
        <span>${price}</span>
        <button type="button">Add to cart</button>
      </div>
    </li>
  );
};

export default ItemList;
