import React, { Component } from "react";
import "./App.css";
import { NavBar, ItemPage } from "./Components";

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
    console.log(item);
    this.setState(prev => ({ cart: [...prev.cart, item] }));
  };
  onAddToCart = () => console.log("click");
  render() {
    return (
      <section className="App">
        <NavBar cartCount={this.state.cart.length} />
        <main>
          <ItemPage items={products} onAddToCart={this.handleAdd} />
        </main>
      </section>
    );
  }
}

export default App;
