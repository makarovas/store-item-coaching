import React, { Component } from "react";
import "./App.css";
import { NavBar, ItemPage, CartPage } from "./Components";

const products = [
  { id: 1, name: "Phone", price: 1000 },
  { id: 2, name: "Laptop", price: 2000 },
  { id: 3, name: "Tablet", price: 3000 },
  { id: 4, name: "Desktop", price: 2000 }
];

class App extends Component {
  state = {
    cart: [],
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
          ) : (
            <CartPage items={cart} />
          )}
        </main>
      </section>
    );
  }
}

export default App;
