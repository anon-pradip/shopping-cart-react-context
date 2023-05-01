import { useEffect } from "react";
import { useCart } from "../context/CartContext";
import "./ProductCard.css";
import { useState } from 'react';

export const ProductCard = ({ product }) => {
  const [itemInCart, setItemInCart] = useState(false);

  const { addToCart, cartList, removeFromCart } = useCart()

  const { name, price, image, id } = product;

  useEffect(() => {
    const isItemInCart = cartList.find(item => item.id === id)
    if (isItemInCart) {
      setItemInCart(true)
    } else {
      setItemInCart(false)
    }
  }, [cartList, id])

  return (
    <div className="productCard">
      <img src={image} alt={name} />
      <p className="name">{name}</p>
      <div className="action">
        <p>${price}</p>
        {itemInCart ? (<button onClick={() => removeFromCart(product)} className="remove" >Remove</button>) : (<button onClick={() => addToCart(product)}>Add To Cart </button>)}
      </div>
    </div>
  )
}
