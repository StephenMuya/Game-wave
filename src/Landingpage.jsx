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

    <article className={styles.partners}>
        <span>
          <img src="assets\Icons\Call Of Duty.png" alt="Call Of Duty Icon" />
          <img src="assets\Icons\EA Sports.png" alt="EA Sports Icon" />
          <img src="assets\Icons\Play Station.jpg" alt="Play Station Icon" />
          <img src="assets\Icons\Rockstar Games.jpg" alt="Rockstar Games Icon" />
          <img src="assets\Icons\UFC.png" alt="UFC Icon" />
        </span>
      </article>

      <section >
        <aside>
          <div>New Release</div>
          <div>Most Popular</div>
          <div>Early Release</div>
          <div>Rare</div>
          <div>Top Pick</div>
          <div>Unreleased</div>
        </aside>
      </section>

    </>
    );
  }

export default Landing;
