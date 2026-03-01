import Link from 'next/link';
import { useState, useEffect } from 'react';
import useStore from '../store';
import styles from '../styles/Header.module.css';

export default function Header() {
  const { user, logout, cart } = useStore();
  const [isOpen, setIsOpen] = useState(false);

  const handleLogout = () => {
    logout();
    localStorage.removeItem('token');
    localStorage.removeItem('user');
  };

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <Link href="/" className={styles.logo}>
          <h1>🛍️ EcommHub</h1>
        </Link>

        <nav className={styles.nav}>
          <Link href="/" className={styles.link}>Home</Link>
          <Link href="/products" className={styles.link}>Products</Link>
          <Link href="/cart" className={styles.link}>
            Cart ({cart.length})
          </Link>

          {user ? (
            <div className={styles.userMenu}>
              <span className={styles.userName}>{user.name}</span>
              <button onClick={() => setIsOpen(!isOpen)} className={styles.menuBtn}>⋮</button>
              {isOpen && (
                <div className={styles.dropdown}>
                  <Link href="/profile" className={styles.dropdownItem}>Profile</Link>
                  <Link href="/orders" className={styles.dropdownItem}>My Orders</Link>
                  <button onClick={handleLogout} className={styles.dropdownItem}>Logout</button>
                </div>
              )}
            </div>
          ) : (
            <div className={styles.auth}>
              <Link href="/login" className={styles.link}>Login</Link>
              <Link href="/register" className={styles.link}>Register</Link>
            </div>
          )}
        </nav>
      </div>
    </header>
  );
}
