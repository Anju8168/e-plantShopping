import React from "react"; 
import { useDispatch, useSelector } from "react-redux"; 
import { removeItem, updateQuantity } from "../redux/CartSlice"; 
function CartItem() { const dispatch = useDispatch(); 
const cartItems = useSelector( (state) => state.cart.items ); 
// ------------------------------------
// // Calculate total number of items 
// // ------------------------------------ 
const calculateTotalQuantity = () => 
  { return cartItems.reduce( (total, item) => total + item.quantity, 0 ); };
 // ------------------------------------ // Calculate total cart amount // ------------------------------------ 
 const calculateTotalAmount = () => 
  { return cartItems.reduce( (total, item) => total + item.price * item.quantity, 0 ); }; 
 // ------------------------------------ // Increase quantity // ------------------------------------ 
 const increaseQuantity = (item) => 
  { dispatch( updateQuantity({ id: item.id, quantity: item.quantity + 1 }) ); }; 
 // ------------------------------------ // Decrease quantity // If quantity becomes 0, // remove the item from cart // ------------------------------------ 
 const decreaseQuantity = (item) => { if (item.quantity <= 1) 
  { dispatch(removeItem(item.id)); } 
  else { dispatch( updateQuantity({ id: item.id, quantity: item.quantity - 1 }) ); } }; 
  if (cartItems.length === 0) 
    { return ( <div className="empty-cart"> 
    <h1>Shopping Cart 🛒</h1> <p>Your cart is empty 🌱</p> 
    <p> Add some beautiful plants to your shopping cart. 
      </p> </div> ); } 
      return ( <div className="cart-container"> <h1>Shopping Cart 🛒</h1> 
      {cartItems.map((item) => 
      ( <div className="cart-item" key={item.id} > 
      {/* Product Image */} <img src={item.image} alt={item.name} /> 
      {/* Product Details */} <div className="cart-item-details"> 
        <h3>{item.name}</h3> 
      <p> Unit Price: ₹{item.price} </p> 
      <p> Quantity: {item.quantity} </p> 
      {/* Individual Item Total */} 
      <p> Total: ₹ {item.price * item.quantity} </p> </div> 
      {/* Quantity Controls */} <div className="quantity-controls"> {/* Decrease */} 
        <button onClick={() => decreaseQuantity(item)} aria-label={`Decrease ${item.name} quantity`} > − </button> <span> {item.quantity} </span> {/* Increase */} <button onClick={() => increaseQuantity(item)} aria-label={`Increase ${item.name} quantity`} > + </button> </div> {/* Remove Item */} <button className="remove-button" onClick={() => dispatch(removeItem(item.id)) } > Remove </button> </div> ))} {/* -------------------------------- Cart Summary -------------------------------- */} <div className="cart-summary"> <h2>Cart Summary</h2> <p> Total Items:{" "} <strong> {calculateTotalQuantity()} </strong> </p> <p> Total Amount:{" "} <strong> ₹{calculateTotalAmount()} </strong> </p> 
        <button className="checkout-button" onClick={() => alert( "Thank you for shopping with Paradise Nursery!" ) } > Checkout </button> </div> </div> ); } 
        export default CartItem;
