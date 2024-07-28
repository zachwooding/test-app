// src/pages/ShoppingCart.js
import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import { useNavigate } from 'react-router-dom';
import styles from './ShoppingCart.module.css';

const ShoppingCart = () => {
  const { cartItems, removeFromCart, incrementQuantity, decrementQuantity } = useContext(CartContext);
  const navigate = useNavigate();

  const getTotal = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  return (
    <div className={styles.shoppingCartPage}>
      <h1 className={styles.shoppingCartTitle}>Your Shopping Cart</h1>
      <div className={styles.cartItems}>
        {cartItems.map(item => (
          <div key={item.id} className={styles.cartItem}>
            <img className={styles.cartItemImage} src={`/images/${item.image}`} alt={item.name} />
            <div className={styles.cartItemDetails}>
              <h3>{item.name}</h3>
              <p>${item.price}</p>
              <p>Subtotal: ${(item.price * item.quantity).toFixed(2)}</p>
              <div className={styles.cartItemActions}>
                <button onClick={() => decrementQuantity(item.id)}>-</button>
                <span>{item.quantity}</span>
                <button onClick={() => incrementQuantity(item.id)}>+</button>
              </div>
              <button onClick={() => removeFromCart(item.id)} className={styles.removeItemButton}>
                Remove
              </button>
            </div>
          </div>
        ))}
      </div>
      <div className={styles.cartTotal}>
        <h2>Total: ${getTotal().toFixed(2)}</h2>
      </div>
      <div className={styles.cartButtons}>
        <button onClick={() => navigate('/products')} className={styles.keepShoppingButton}>
          Keep Shopping
        </button>
        <button className={styles.checkoutButton}>
          Checkout
        </button>
      </div>
    </div>
  );
};

export default ShoppingCart;
