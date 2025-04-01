import React from "react";
import styles from './styles.module.css'
import Card from './Card'


function Landing() {
    return(
      <>

    <nav className={styles.nav}>
      <header>Game Wave</header>
  
      <ul>
          <li>Login</li>
          <li>Sign Up</li>
          <li>Contacts</li>
      </ul>
    </nav>

    <section className={styles.container}>
      <article className="hero_section_left">
        <h1>Play More, Pay Less.</h1>
        <h1>The Ultimate Game Store!</h1>
        <figure className="hero_section_image_1">
          <img src="assets\Cover Image 2.jpg" alt="" />
        </figure>
      </article>

      <article className="hero_section_right">
        <figure className="hero_section_image_2">
          <img src="assets\Image Cover 1.png" alt="" />
        </figure>
        <p>
        At Game Wave, we bring you the best games across all platforms. Whether you're into action-packed shooters, thrilling RPGs, or heart-racing sports games, we’ve got something for every gamer. 
        From the hottest new releases to timeless classics, our collection is curated to give you the best gaming experience.
        Find your next favorite game, dive into epic adventures, and start playing today. No delays, no hassle – just pure gaming!
        </p>
      </article>
    </section>

    <article className={styles.partners}>
        <span>
          <img src="assets\Partners\Call Of Duty.png" alt="Call Of Duty Icon" />
          <img src="assets\Partners\EA Sports.png" alt="EA Sports Icon" />
          <img src="assets\Partners\Play Station.jpg" alt="Play Station Icon" />
          <img src="assets\Partners\Rockstar Games.jpg" alt="Rockstar Games Icon" />
          <img src="assets\Partners\UFC.png" alt="UFC Icon" />
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

      
      <Card />

      <h1>FAQ section</h1>
      <h1>Shipping Policies</h1>
      <h1>Newsletter</h1>
      <h1>Social Media</h1>
      <h1>Contacts- maps, addresses, numbers & more</h1>
    </>
    );
  }

export default Landing;
