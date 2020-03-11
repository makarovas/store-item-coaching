import React from "react";

const ItemList = ({ item, onAddToCart }) => {
  return (
    <li key={`${item.id}-${item.name}`}>
      <div
        style={{
          // width: "300px",
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center"
        }}
      >
        <span>{item.name}</span>
        <span style={{ marginLeft: "auto" }}>${item.price}</span>
        <button onClick={() => onAddToCart(item)} type="button">
          Add to cart
        </button>
      </div>
    </li>
  );
};

export default ItemList;
