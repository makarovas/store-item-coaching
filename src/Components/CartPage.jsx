import React from "react";
import { CartItem } from ".";

const summarizer = (result, item) => {
  //
  const exitingItem = result.find(i => i.id === item.id);
  if (!exitingItem) {
    result.push({
      ...item,
      count: 1
    });
  } else {
    exitingItem.count++;
  }
  return result;
};

export default function CartPage({ items }) {
  const cart = items.reduce(summarizer, []);
  return (
    <div>
      <ul>
        {cart.map((item, i) => {
          return (
            <CartItem key={item.id} item={item}>
              <span style={{ fontSize: "24px" }}>{item.count}</span>
            </CartItem>
          );
        })}
      </ul>
      <div
        style={{
          // display: "flex",
          // flexDirection: "row",
          // justifyContent: "space-between",
          // alignItems: "center"
          textAlign: "right",
          marginRight: "30px"
        }}
      >
        Total: $
        {cart.reduce((total, item) => {
          return total + item.price * item.count;
        }, 0)}
      </div>
    </div>
  );
}
