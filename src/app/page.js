// src/app/page.js

import styles from "./page.module.css";

export default function HomePage() {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <nav>
          <a href="#">Προσφορές</a>
          <a href="#">Καλύτερες Προσφορές Σήμερα</a>
          <a href="#">Καθαρισμός Αποθήκης</a>
          <a href="#">Επικοινωνία</a>
        </nav>
      </header>

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

      <section className={styles.deals}>
        <h2>Προτεινόμενα Προϊόντα</h2>
        <div className={styles.productGrid}>
          <div className={styles.dealItem}>
            <img src="/images/airfryer.jpg" alt="Air Fryer" />
            <h3>Air Fryer</h3>
            <p>Μοναδική τιμή: €99.00</p>
            <a href="#">Προσθήκη στο καλάθι &gt;</a>
          </div>
          <div className={styles.dealItem}>
            <img src="/images/heater.jpg" alt="Σκουπάκι" />
            <h3>Καλοριφέρ</h3>
            <p>Προσφορά: €49.00</p>
            <a href="#">Προσθήκη στο καλάθι &gt;</a>
          </div>
          <div className={styles.dealItem}>
            <img src="/images/toast.jpg" alt="Ψησταριά" />
            <h3>Ψησταριά</h3>
            <p>Τιμή: €79.00</p>
            <a href="#">Προσθήκη στο καλάθι &gt;</a>
          </div>
          <div className={styles.dealItem}>
            <img src="/images/hair-dryer.jpg" alt="Πιστολάκι Μαλλιών" />
            <h3>Πιστολάκι Μαλλιών</h3>
            <p>Τιμή: €35.00</p>
            <a href="#">Προσθήκη στο καλάθι &gt;</a>
          </div>
        </div>
      </section>
    </div>
  );
}
