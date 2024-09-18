// src/components/MiniCart.js
import { useState } from "react";

export default function MiniCart({ cartItems, totalCost, onClose }) {
  return (
    <div className="mini-cart">
      <h2>Το Καλάθι σας</h2>
      <button onClick={onClose}>Κλείσιμο</button>
      <ul>
        {cartItems.map((item, index) => (
          <li key={index}>
            {item.name} - {item.price}€
          </li>
        ))}
      </ul>
      <p>Συνολικό Κόστος: {totalCost}€</p>
      <button>Μετάβαση στο Καλάθι</button>
    </div>
  );
}
