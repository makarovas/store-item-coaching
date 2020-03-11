import React from "react";
import { ItemList } from ".";

export default function ItemPage({ items }) {
  return (
    <ul>
      <h1>Items for sale</h1>
      {items.map(x => {
        return <ItemList key={x.key} name={x.name} price={x.price} />;
      })}
    </ul>
  );
}
