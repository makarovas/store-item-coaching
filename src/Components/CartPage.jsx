import React from "react";
import { CartItem } from ".";

export default function CartPage({ items }) {
  return (
    <div>
      <ul>
        {items.map((item, i) => {
          return <CartItem key={i} item={item} />;
        })}
      </ul>
    </div>
  );
}
