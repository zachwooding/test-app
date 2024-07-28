// src/pages/ProductListingPage.js
import React, { useContext, useState } from 'react';
import { CartContext } from '../context/CartContext';
import styles from './ProductListingPage.module.css';

const ProductListingPage = () => {
  const { addToCart, cartItems } = useContext(CartContext);
  const [addedProducts, setAddedProducts] = useState([]);

  const products = [
    { id: 1, name: 'Fiddle Leaf Fig', price: 25, image: 'fiddle.png', category: 'Indoor', description: 'A beautiful indoor plant with large, glossy leaves.' },
    { id: 2, name: 'Snake Plant', price: 20, image: 'snake.png', category: 'Indoor', description: 'An easy-to-care-for plant that thrives in low light.' },
    { id: 3, name: 'Pothos', price: 15, image: 'pothos.png', category: 'Indoor', description: 'A versatile indoor plant that can grow in a variety of conditions.' },
    { id: 4, name: 'Succulent', price: 10, image: 'succulent.png', category: 'Outdoor', description: 'A drought-resistant plant that requires minimal water.' },
    { id: 5, name: 'Bamboo Palm', price: 30, image: 'bamboopalm.png', category: 'Outdoor', description: 'A lush, green plant that can thrive in both indoor and outdoor settings.' },
    { id: 6, name: 'Aloe Vera', price: 18, image: 'aloevera.png', category: 'Medicinal', description: 'A medicinal plant known for its soothing properties.' }
  ];

  const groupedProducts = products.reduce((acc, product) => {
    if (!acc[product.category]) {
      acc[product.category] = [];
    }
    acc[product.category].push(product);
    return acc;
  }, {});

  const handleAddToCart = (product) => {
    addToCart(product);
    setAddedProducts([...addedProducts, product.id]);
  };

  return (
    <div className={styles.productListingPage}>
      {Object.keys(groupedProducts).map(category => (
        <div key={category} className={styles.categorySection}>
          <h2 className={styles.categoryTitle}>{category}</h2>
          <div className={styles.productGrid}>
            {groupedProducts[category].map(product => (
              <div key={product.id} className={styles.productCard}>
                <img src={`/images/${product.image}`} alt={product.name} />
                <h3>{product.name}</h3>
                <p>${product.price}</p>
                <p>{product.description}</p>
                <button
                  className={`${styles.button} ${addedProducts.includes(product.id) ? styles.disabledButton : ''}`}
                  onClick={() => handleAddToCart(product)}
                  disabled={addedProducts.includes(product.id)}
                >
                  {addedProducts.includes(product.id) ? 'Added to Cart!' : 'Add to Cart'}
                </button>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductListingPage;

