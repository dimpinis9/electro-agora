"use client";

import { useState } from "react";
import styles from "./layout.module.css";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; // Import της React βιβλιοθήκης
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons"; // Import του εικονιδίου καλαθιού

export default function RootLayout({ children }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart((prevCart) => [...prevCart, product]);
  };

  const totalCost = cart.reduce((total, product) => total + product.price, 0);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <html lang="el">
      <body>
        <header className={styles.header}>
          <h1>Electro-Agora</h1>

          {/* Hamburger Menu */}
          <div className={styles.hamburger} onClick={toggleMenu}>
            <div className={styles.bar}></div>
            <div className={styles.bar}></div>
            <div className={styles.bar}></div>
          </div>

          {/* Κανονικό μενού */}
          <nav className={`${styles.nav} ${menuOpen ? styles.open : ""}`}>
            <Link href="/">Αρχική</Link>
            <Link href="/offers">Προσφορές</Link>
            <div
              className={`${styles.dropdown} ${
                dropdownOpen ? styles.open : ""
              }`}
            >
              <span onClick={toggleDropdown}>Προϊόντα</span>
              <div className={styles.dropdownContent}>
                <Link href="/categories/thermansi">Θέρμανση</Link>
                <Link href="/categories/kathariotita">Καθαριότητα</Link>
                <Link href="/categories/kouzina">Κουζίνα</Link>
                <Link href="/categories/anemistires">Ανεμιστήρες</Link>
                <Link href="/categories/ksiristikes">Ξυριστικές</Link>
                <Link href="/categories/pistolakia">Πιστολάκια</Link>
              </div>
            </div>
            <Link href="/contact">Επικοινωνία</Link>
            <Link href="/cart">
              <FontAwesomeIcon icon={faShoppingCart} /> Καλάθι ({cart.length})
            </Link>
          </nav>
        </header>
        <main>{children}</main>

        <aside className={styles.cart}>
          <h2>Το Καλάθι Σας</h2>
          {cart.length === 0 ? (
            <p>Το καλάθι είναι άδειο.</p>
          ) : (
            <ul>
              {cart.map((product, index) => (
                <li key={index}>
                  {product.name} - {product.price}€
                </li>
              ))}
            </ul>
          )}
          <p>Συνολικό Κόστος: {totalCost.toFixed(2)}€</p>
        </aside>

        <footer className={styles.footer}>
          <p>© 2024 Electro-Agora. Όλα τα δικαιώματα διατηρούνται.</p>
        </footer>
      </body>
    </html>
  );
}
