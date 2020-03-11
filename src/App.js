import React from "react";
import "./App.css";
import { NavBar, ItemPage } from "./Components";

const products = [
  { id: 1, name: "Phone", price: 1000 },
  { id: 2, name: "Laptop", price: 2000 },
  { id: 3, name: "Tablet", price: 3000 },
  { id: 4, name: "Desktop", price: 2000 }
];

function App() {
  return (
    <section className="App">
      <NavBar />
      <main>
        <ItemPage items={products} />
      </main>
    </section>
  );
}

export default App;
