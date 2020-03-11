import React from "react";
import { ItemList } from ".";

export default function ItemPage({ items, onAddToCart }) {
  return (
    <ul>
      <h1>Items for sale</h1>
      {items.map((item, i) => {
        return (
          <ItemList
            item={item}
            key={i}
            name={item.name}
            price={item.price}
            onAddToCart={onAddToCart}
          />
        );
      })}
    </ul>
  );
}
