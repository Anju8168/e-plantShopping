import React from "react"; 
import { useDispatch, useSelector } from "react-redux"; 
import { addItem } from "../redux/CartSlice"; 
const products = [ 
  // ============================ 
  // // Indoor Plants - 6 Plants 
  // // ============================ 
  { id: 1, name: "Snake Plant", category: "Indoor Plants", price: 499, image: "https://images.unsplash.com/photo-1593482892290-f54927ae2b7b?auto=format&fit=crop&w=500&q=80", }, 
  { id: 2, name: "Peace Lily", category: "Indoor Plants", price: 599, image: "https://images.unsplash.com/photo-1593691509543-c55fb32e5cee?auto=format&fit=crop&w=500&q=80", }, 
  { id: 3, name: "Money Plant", category: "Indoor Plants", price: 349, image: "https://images.unsplash.com/photo-1614594975525-e45190c55d0b?auto=format&fit=crop&w=500&q=80", }, 
  { id: 4, name: "ZZ Plant", category: "Indoor Plants", price: 699, image: "https://images.unsplash.com/photo-1614594575927-a7b9a5d1d9e3?auto=format&fit=crop&w=500&q=80", }, 
  { id: 5, name: "Spider Plant", category: "Indoor Plants", price: 399, image: "https://images.unsplash.com/photo-1572688484438-313a6e50c333?auto=format&fit=crop&w=500&q=80", }, 
  { id: 6, name: "Rubber Plant", category: "Indoor Plants", price: 799, image: "https://images.unsplash.com/photo-1597055181300-b1b2f2c1c5b0?auto=format&fit=crop&w=500&q=80", }, 
  // ============================ 
  // // Flowering Plants - 6 Plants 
  // // ============================ 
  { id: 7, name: "Rose Plant", category: "Flowering Plants", price: 449, image: "https://images.unsplash.com/photo-1496062031456-07b8f162a322?auto=format&fit=crop&w=500&q=80", }, 
  { id: 8, name: "Lavender", category: "Flowering Plants", price: 399, image: "https://images.unsplash.com/photo-1499002238440-d264edd596ec?auto=format&fit=crop&w=500&q=80", }, 
  { id: 9, name: "Jasmine", category: "Flowering Plants", price: 499, image: "https://images.unsplash.com/photo-1597848212624-e19c9f4b8f7b?auto=format&fit=crop&w=500&q=80", },
  { id: 10, name: "Hibiscus", category: "Flowering Plants", price: 349, image: "https://images.unsplash.com/photo-1595535373192-fc8935bacd89?auto=format&fit=crop&w=500&q=80", }, 
  { id: 11, name: "Marigold", category: "Flowering Plants", price: 299, image: "https://images.unsplash.com/photo-1597848212624-e19c9f4b8f7b?auto=format&fit=crop&w=500&q=80", }, 
  { id: 12, name: "Petunia", category: "Flowering Plants", price: 399, image: "https://images.unsplash.com/photo-1469259943454-aa100abba749?auto=format&fit=crop&w=500&q=80", }, 
  // ============================ 
  // // Medicinal Plants - 6 Plants 
  // // ============================ 
  { id: 13, name: "Aloe Vera", category: "Medicinal Plants", price: 299, image: "https://images.unsplash.com/photo-1509423350716-97f9360ac02e?auto=format&fit=crop&w=500&q=80", }, 
  { id: 14, name: "Tulsi", category: "Medicinal Plants", price: 199, image: "https://images.unsplash.com/photo-1515586000433-45406d8e6662?auto=format&fit=crop&w=500&q=80", }, 
  { id: 15, name: "Mint", category: "Medicinal Plants", price: 149, image: "https://images.unsplash.com/photo-1628556270448-4d4e4148e1b1?auto=format&fit=crop&w=500&q=80", }, 
  { id: 16, name: "Lemongrass", category: "Medicinal Plants", price: 249, image: "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&w=500&q=80", }, 
  { id: 17, name: "Ashwagandha", category: "Medicinal Plants", price: 349, image: "https://images.unsplash.com/photo-1515586000433-45406d8e6662?auto=format&fit=crop&w=500&q=80", }, 
  { id: 18, name: "Neem Plant", category: "Medicinal Plants", price: 399, image: "https://images.unsplash.com/photo-1545241047-6083a3684587?auto=format&fit=crop&w=500&q=80", }, ]; function ProductList() { const dispatch = useDispatch(); 
    const cartItems = useSelector((state) => state.cart.items); 
    const handleAddToCart = (product) => 
      { dispatch(addItem(product)); }; 
    // Check whether a product has already been added 
  const isInCart = (productId) => 
    { return cartItems.some((item) => item.id === productId); }; 
  // Get unique categories 
  const categories = [ ...new Set(products.map((product) => product.category)), ]; 
  return ( <div className="products-container"> 
  <h1>Our Plants</h1> {categories.map((category) => 
  { const categoryProducts = products.filter( (product) => product.category === category ); 
    return ( <div className="product-category" key={category}> 
    <h2>{category}</h2> <div className="product-grid"> 
      {categoryProducts.map((product) => 
      { const added = isInCart(product.id); 
        return ( <div className="product-card" key={product.id}> 
        <img src={product.image} alt={product.name} /> 
        <h3>{product.name}</h3> 
        <p className="product-price"> ₹{product.price} </p> 
        <button className="add-button" onClick={() => handleAddToCart(product)} disabled={added} > {added ? "Added to Cart ✓" : "Add to Cart"} </button> </div> ); })} </div> </div> ); })} </div> ); } 
  export default ProductList;
