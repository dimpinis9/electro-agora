// src/app/layout.js
"use client";

import { useState } from "react";
import styles from "./layout.module.css";
import "./globals.css";

export default function RootLayout({ children }) {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <html lang="el">
      <body>
        <header className={styles.header}>
          <h1>Electro-Agora</h1>
          <div className={styles.hamburger} onClick={toggleMenu}>
            <div className={styles.bar}></div>
            <div className={styles.bar}></div>
            <div className={styles.bar}></div>
          </div>
          <nav className={`${styles.nav} ${menuOpen ? styles.open : ""}`}>
            <a href="/">Αρχική</a>
            <a href="/products">Προϊόντα</a>
            <a href="/offers">Προσφορές</a>
            <a href="/contact">Επικοινωνία</a>
          </nav>
        </header>
        <main>{children}</main>
        <footer className={styles.footer}>
          <p>© 2024 Electro-Agora. Όλα τα δικαιώματα διατηρούνται.</p>
        </footer>
      </body>
    </html>
  );
}
