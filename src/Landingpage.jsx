import React from "react";
import styles from './styles.module.css'

function Landing() {
    return(
    <nav className={styles.nav}>
      <header>Game Wave</header>
  
      <ul>
          <li>Login</li>
          <li>Cart</li>
          <li>Contacts</li>
      </ul>
    </nav>
    );
  }

export default Landing;
