"use client";
import { useState } from "react";
import styles from "./page.module.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function HomePage() {
  // Κατάσταση για το καλάθι
  const [cart, setCart] = useState([]);
  const [showComparison, setShowComparison] = useState(false); // Νέα κατάσταση για σύγκριση προϊόντων

  // Προσθήκη προϊόντος στο καλάθι με toast
  const addToCart = (product) => {
    setCart((prevCart) => [...prevCart, product]);
    toast.success(`${product.name} προστέθηκε στο καλάθι!`, {
      position: "top-right",
    });
  };

  // Προϊόντα (μπορούμε να χρησιμοποιήσουμε δεδομένα από API ή βάση δεδομένων)
  const products = [
    {
      id: 1,
      name: "Air Fryer",
      category: "Κουζίνα",
      price: 99,
      image: "/images/airfryer.jpg",
    },
    {
      id: 2,
      name: "Καλοριφέρ",
      category: "Θέρμανση",
      price: 49,
      image: "/images/heater.jpg",
    },
    {
      id: 3,
      name: "Ψησταριά",
      category: "Κουζίνα",
      price: 79,
      image: "/images/toast.jpg",
    },
    {
      id: 4,
      name: "Πιστολάκι Μαλλιών",
      category: "Περιποίηση",
      price: 35,
      image: "/images/hair-dryer.jpg",
    },
  ];

  return (
    <div className={styles.container}>
      <ToastContainer />

      {/* Τμήμα Προσφορών */}
      <section className={styles.hero}>
        <div className={styles.heroSlide}>
          <img src="/images/airfryer.jpg" alt="Air Fryers" />
          <div className={styles.heroText}>
            <h2>Air Fryers</h2>
            <a href="#">Αγοράστε τώρα &gt;</a>
          </div>
        </div>
        <div className={styles.heroSlide}>
          <img src="/images/heater.jpg" alt="Φορητά Καλοριφέρ" />
          <div className={styles.heroText}>
            <h2>Φορητά Καλοριφέρ</h2>
            <p>Ιδανικά για τον χειμώνα!</p>
            <a href="#">Δείτε τις προσφορές &gt;</a>
          </div>
        </div>
      </section>

      {/* Προτεινόμενα Προϊόντα */}
      <section className={styles.deals}>
        <h2>Προτεινόμενα Προϊόντα</h2>
        <div className={styles.productGrid}>
          {products.map((product) => (
            <div key={product.id} className={styles.dealItem}>
              <img src={product.image} alt={product.name} />
              <h3>{product.name}</h3>
              <p>Μοναδική τιμή: €{product.price.toFixed(2)}</p>
              <button onClick={() => addToCart(product)}>
                Προσθήκη στο καλάθι &gt;
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Προβολή Καλαθιού - Εμφανίζεται μόνο όταν υπάρχουν προϊόντα */}
      {cart.length > 0 && (
        <section className={styles.cartSection}>
          <h2>Το Καλάθι Σας</h2>
          <ul>
            {cart.map((item, index) => (
              <li key={index}>
                {item.name} - {item.price.toFixed(2)}€
              </li>
            ))}
          </ul>
          <p>
            Συνολικό Κόστος:{" "}
            {cart.reduce((total, item) => total + item.price, 0).toFixed(2)}€
          </p>
        </section>
      )}

      {/* Σύγκριση Προϊόντων - Κρυφό αν δεν έχει επιλεχθεί */}
      {showComparison && (
        <section className={styles.compareSection}>
          <h2>Σύγκριση Προϊόντων</h2>
          <table>
            <thead>
              <tr>
                <th>Προϊόν</th>
                <th>Τιμή</th>
                <th>Κατηγορία</th>
              </tr>
            </thead>
            <tbody>
              {products.map((product) => (
                <tr key={product.id}>
                  <td>{product.name}</td>
                  <td>€{product.price.toFixed(2)}</td>
                  <td>{product.category}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>
      )}

      {/* Κουμπί για εμφάνιση σύγκρισης προϊόντων */}
      <section className={styles.compareButtonSection}>
        <button onClick={() => setShowComparison(!showComparison)}>
          {showComparison
            ? "Κρύψε Σύγκριση Προϊόντων"
            : "Εμφάνιση Σύγκρισης Προϊόντων"}
        </button>
      </section>
    </div>
  );
}
