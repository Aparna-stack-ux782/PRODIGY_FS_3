import Link from 'next/link';
import styles from '../styles/Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.section}>
          <h4>About</h4>
          <p>Your local e-commerce store for quality products and excellent service.</p>
        </div>

        <div className={styles.section}>
          <h4>Quick Links</h4>
          <ul>
            <li><Link href="/">Home</Link></li>
            <li><Link href="/products">Products</Link></li>
            <li><Link href="/cart">Cart</Link></li>
          </ul>
        </div>

        <div className={styles.section}>
          <h4>Contact</h4>
          <p>Email: info@ecommhub.com</p>
          <p>Phone: +1-800-123-4567</p>
        </div>

        <div className={styles.section}>
          <h4>Follow Us</h4>
          <div className={styles.social}>
            <a href="#" target="_blank" rel="noopener noreferrer">Facebook</a>
            <a href="#" target="_blank" rel="noopener noreferrer">Twitter</a>
            <a href="#" target="_blank" rel="noopener noreferrer">Instagram</a>
          </div>
        </div>
      </div>

      <div className={styles.bottom}>
        <p>&copy; 2024 EcommHub. All rights reserved.</p>
      </div>
    </footer>
  );
}
