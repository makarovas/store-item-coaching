import React, { Component } from "react";
import "./App.css";
import { NavBar, ItemPage, CartPage, CheckoutPage } from "./Components";

const products = [
  { id: 1, name: "Phone", price: 199 },
  { id: 2, name: "Laptop", price: 299 },
  { id: 3, name: "Tablet", price: 359 },
  { id: 4, name: "Desktop", price: 1199 }
];

class App extends Component {
  state = {
    cart: [],
    // activePage: "store",
    activePage: "store"
  };

  handleAdd = item => {
    this.setState(prev => ({ cart: [...prev.cart, item] }));
  };

  handlePageChange = page => {
    console.log("click");
    this.setState({ activePage: page });
  };
  render() {
    const { cart, activePage } = this.state;
    return (
      <section className="App">
        <NavBar
          cartCount={cart.length}
          onPageChange={this.handlePageChange}
          item={activePage}
        />
        <main>
          {activePage === "store" ? (
            <ItemPage items={products} onAddToCart={this.handleAdd} />
          ) : activePage === "basket" ? (
            <CartPage items={cart} onPageChange={this.handlePageChange} />
          ) : (
            <CheckoutPage items={cart} />
          )}
        </main>
      </section>
    );
  }
}

export default App;
