import React from "react";
import { ItemList } from ".";
export default function CartItem({ items, onAddToCart }) {
  return (
    <ul>
      <h1>List of items</h1>
      {items.map((item, i) => {
        return <ItemList item={item} key={i} onAddToCart={onAddToCart} />;
      })}
    </ul>
  );
}
