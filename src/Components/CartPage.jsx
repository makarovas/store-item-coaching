import React from "react";
import { CartItem } from ".";

export default function CartPage({ items }) {
  return (
    <div>
      <ul>
        {items.map((x, i) => {
          return <CartItem key={i} item={x} />;
        })}
      </ul>
    </div>
  );
}
