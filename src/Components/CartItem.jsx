import React from "react";

const ItemList = ({ item, onAddToCart, children }) => {
  return (
    <li key={`${item.id}-${item.name}`}>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center"
        }}
      >
        <span>{item.name}</span>
        <span style={{ marginLeft: "auto" }}>${item.price}</span>
        {/* <button onClick={() => onAddToCart(item)} type="button">
          Add to cart
        </button> */}
        {children}
      </div>
    </li>
  );
};

export default ItemList;
