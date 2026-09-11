import React, { useState } from "react";
import "./App.css";

import AboutUs from "./components/AboutUs";
import ProductList from "./components/ProductList";
import CartItem from "./components/CartItem";

function App() {
  const [page, setPage] = useState("home");

  return (
    <div className="app">

      {page === "home" && (
        <div className="landing-page">
          <div className="landing-content">
            <h1>e-plantShopping</h1>

            <p>
              Bring Nature Home 🌱
              <br />
              Discover beautiful plants for your home and office.
            </p>

            <button
              className="start-button"
              onClick={() => setPage("products")}
            >
              Get Started
            </button>
          </div>
        </div>
      )}

      {page !== "home" && (
        <>
          <nav className="navbar">
            <h2>🌿 e-plantShopping</h2>

            <div className="nav-links">
              <button onClick={() => setPage("products")}>
                Products
              </button>

              <button onClick={() => setPage("about")}>
                About Us
              </button>

              <button onClick={() => setPage("cart")}>
                🛒 Cart
              </button>

              <button onClick={() => setPage("home")}>
                Home
              </button>
            </div>
          </nav>

          {page === "products" && <ProductList />}

          {page === "about" && <AboutUs />}

          {page === "cart" && <CartItem />}
        </>
      )}
    </div>
  );
}

export default App;
