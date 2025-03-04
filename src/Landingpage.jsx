import React from "react";
import styles from './styles.module.css'

function Landing() {
    return(
      <>

    <nav className={styles.nav}>
      <header>Game Wave</header>
  
      <ul>
          <li>Login</li>
          <li>Cart</li>
          <li>Contacts</li>
      </ul>
    </nav>

    <section className={styles.container}>
      <article>
        <img src="assets\Cover Image.jpg" alt="Cover Image" />
      </article>

      <article>
        <h1>Play More, Pay Less. The Ultimate Game Store!</h1>
        <p>
        At Game Wave, we bring you the best games across all platforms. Whether you're into action-packed shooters, thrilling RPGs, or heart-racing sports games, we’ve got something for every gamer. 
        From the hottest new releases to timeless classics, our collection is curated to give you the best gaming experience.
        Find your next favorite game, dive into epic adventures, and start playing today. No delays, no hassle – just pure gaming!
        </p>
      </article>
    </section>
    </>
    );
  }

export default Landing;
