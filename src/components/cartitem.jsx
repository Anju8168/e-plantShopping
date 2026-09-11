import React from "react";
import { useDispatch, useSelector } from "react-redux";

import {
  removeItem,
  updateQuantity
} from "../redux/CartSlice";

function CartItem() {

  const dispatch = useDispatch();

  const cartItems = useSelector(
    state => state.cart.items
  );

  const totalQuantity = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );

  const totalPrice = cartItems.reduce(
    (total, item) =>
      total + item.price * item.quantity,
    0
  );

  const increaseQuantity = (item) => {
    dispatch(
      updateQuantity({
        id: item.id,
        quantity: item.quantity + 1
      })
    );
  };

  const decreaseQuantity = (item) => {
    dispatch(
      updateQuantity({
        id: item.id,
        quantity: item.quantity - 1
      })
    );
  };

  if (cartItems.length === 0) {
    return (
      <div className="empty-cart">
        <h1>Shopping Cart</h1>
        <p>Your cart is empty 🌱</p>
        <p>Add some beautiful plants to your cart.</p>
      </div>
    );
  }

  return (
    <div className="cart-container">

      <h1>Shopping Cart 🛒</h1>

      {cartItems.map(item => (

        <div
          className="cart-item"
          key={item.id}
        >

          <img
            src={item.image}
            alt={item.name}
          />

          <div className="cart-item-details">

            <h3>{item.name}</h3>

            <p>
              Unit Price: ₹{item.price}
            </p>

            <p>
              Subtotal: ₹
              {item.price * item.quantity}
            </p>

          </div>

          <div className="quantity-controls">

            <button
              onClick={() =>
                decreaseQuantity(item)
              }
            >
              −
            </button>

            <span>{item.quantity}</span>

            <button
              onClick={() =>
                increaseQuantity(item)
              }
            >
              +
            </button>

          </div>

          <button
            className="remove-button"
            onClick={() =>
              dispatch(removeItem(item.id))
            }
          >
            Remove
          </button>

        </div>

      ))}

      <div className="cart-summary">

        <h2>Cart Summary</h2>

        <p>
          Total Items: <strong>{totalQuantity}</strong>
        </p>

        <p>
          Total Price:
          <strong> ₹{totalPrice}</strong>
        </p>

        <button
          className="checkout-button"
          onClick={() =>
            alert("Thank you for shopping with Paradise Nursery!")
          }
        >
          Checkout
        </button>

      </div>

    </div>
  );
}

export default CartItem;