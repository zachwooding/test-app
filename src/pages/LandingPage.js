// src/pages/LandingPage.js
import React from 'react';
import { Link } from 'react-router-dom';
import styles from './LandingPage.module.css';

const LandingPage = () => {
  return (
    <div className={styles.landingPage}>
      <div className={styles.contentCard}>
        <h1>Welcome to Our Company</h1>
        <p>
          Our company specializes in providing the best indoor and outdoor plants.
          We are passionate about plants and believe in their power to transform spaces.
          Our selection includes a variety of plants suited for every environment.
          Join us in bringing nature closer to you.
        </p>
        <Link to="/products" className={styles.getStartedButton}>
          Get Started
        </Link>
      </div>
    </div>
  );
};

export default LandingPage;
