import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { addItem } from "../redux/CartSlice";

const products = [
  {
    id: 1,
    name: "Snake Plant",
    category: "Indoor Plants",
    price: 499,
    image:
      "https://images.unsplash.com/photo-1593482892290-f54927ae2b7b?auto=format&fit=crop&w=500&q=80"
  },
  {
    id: 2,
    name: "Peace Lily",
    category: "Indoor Plants",
    price: 599,
    image:
      "https://images.unsplash.com/photo-1593691509543-c55fb32e5cee?auto=format&fit=crop&w=500&q=80"
  },
  {
    id: 3,
    name: "Aloe Vera",
    category: "Medicinal Plants",
    price: 299,
    image:
      "https://images.unsplash.com/photo-1509423350716-97f9360ac02e?auto=format&fit=crop&w=500&q=80"
  },
  {
    id: 4,
    name: "Lavender",
    category: "Flowering Plants",
    price: 399,
    image:
      "https://images.unsplash.com/photo-1499002238440-d264edd596ec?auto=format&fit=crop&w=500&q=80"
  },
  {
    id: 5,
    name: "Rose Plant",
    category: "Flowering Plants",
    price: 449,
    image:
      "https://images.unsplash.com/photo-1496062031456-07b8f162a322?auto=format&fit=crop&w=500&q=80"
  },
  {
    id: 6,
    name: "Money Plant",
    category: "Indoor Plants",
    price: 349,
    image:
      "https://images.unsplash.com/photo-1614594975525-e45190c55d0b?auto=format&fit=crop&w=500&q=80"
  },
  {
    id: 7,
    name: "Cactus",
    category: "Outdoor Plants",
    price: 249,
    image:
      "https://images.unsplash.com/photo-1509423350716-97f9360ac02e?auto=format&fit=crop&w=500&q=80"
  },
  {
    id: 8,
    name: "Bamboo Plant",
    category: "Decorative Plants",
    price: 699,
    image:
      "https://images.unsplash.com/photo-1525490829609-d166ddb58678?auto=format&fit=crop&w=500&q=80"
  }
];

function ProductList() {

  const dispatch = useDispatch();

  const cartItems = useSelector(
    state => state.cart.items
  );

  const categories = [
    ...new Set(products.map(product => product.category))
  ];

  const handleAddToCart = (product) => {
    dispatch(addItem(product));
  };

  const getQuantity = (id) => {
    const item = cartItems.find(
      item => item.id === id
    );

    return item ? item.quantity : 0;
  };

  return (
    <div className="products-container">

      <h1>Our Plants</h1>

      {categories.map(category => {

        const categoryProducts = products.filter(
          product => product.category === category
        );

        return (
          <div
            className="product-category"
            key={category}
          >

            <h2>{category}</h2>

            <div className="product-grid">

              {categoryProducts.map(product => {

                const quantity = getQuantity(product.id);

                return (
                  <div
                    className="product-card"
                    key={product.id}
                  >

                    <img
                      src={product.image}
                      alt={product.name}
                    />

                    <h3>{product.name}</h3>

                    <p className="product-price">
                      ₹{product.price}
                    </p>

                    <p>
                      {quantity > 0
                        ? `In Cart: ${quantity}`
                        : "Available"}
                    </p>

                    <button
                      className="add-button"
                      onClick={() =>
                        handleAddToCart(product)
                      }
                    >
                      {quantity > 0
                        ? "Add Another"
                        : "Add to Cart"}
                    </button>

                  </div>
                );
              })}

            </div>
          </div>
        );
      })}

    </div>
  );
}

export default ProductList;
