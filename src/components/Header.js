import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../context/CartContext'; // Adjust path if necessary
import styles from './Header.module.css';

const Header = () => {
  const { cartItems } = useContext(CartContext);
  const cartItemCount = cartItems.reduce((total, item) => total + item.quantity, 0);

  return (
    <header className={styles.header}>
      <div>
        <div className={styles.headerTitle}>Paradise Nursery</div>
        <div className={styles.tagline}>Bringing Nature Into Your Home</div>
      </div>
      <div className={styles.headerButtons}>
        <Link to="/">
          <button className={styles.headerButton}>Home</button>
        </Link>
        <Link to="/products">
          <button className={styles.headerButton}>Products</button>
        </Link>
        <Link to="/cart">
          <button className={styles.cartButton}>
            Cart {cartItemCount > 0 && <span className={styles.cartCount}>{cartItemCount}</span>}
          </button>
        </Link>
      </div>
    </header>
  );
};

export default Header;
