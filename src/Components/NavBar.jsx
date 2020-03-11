import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStore, faShoppingBasket } from "@fortawesome/free-solid-svg-icons";

export default function NavBar({ cartCount, onPageChange, item }) {
  return (
    <header>
      <nav>
        <ul
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between"
          }}
        >
          <a
            href="/"
            onClick={e => {
              e.preventDefault();
              onPageChange("store");
            }}
          >
            <FontAwesomeIcon icon={faStore} size="4x" />
          </a>
          <a
            href="/"
            onClick={e => {
              e.preventDefault();
              onPageChange("basket");
            }}
            style={{
              display: "flex",
              alignItems: "center"
            }}
          >
            <span
              style={{
                fontSize: "24px",
                marginRight: "20px",
                display: "inline-block"
              }}
            >
              {cartCount === 0 ? "Empty" : cartCount}
            </span>
            <FontAwesomeIcon icon={faShoppingBasket} size="4x" />
          </a>
        </ul>
      </nav>
    </header>
  );
}
