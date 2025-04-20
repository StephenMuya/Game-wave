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
          <li>Sections</li>
      </ul>
    </nav>

    <section className={styles.container}>

      <figure>
        <img src="assets/hero section image.jpg" alt="" />
      </figure>

      <article className={styles.hero_section_right}>

      <article className={styles.hero_section_left}>
        <h1>Play More, Pay Less.</h1>
        <h1>The Ultimate Game Store!</h1>
      </article>
        <p id={styles.hero_description}>
        At Game Wave, we bring you the best games across all platforms. Whether youre into action-packed shooters, thrilling RPGs, or heart-racing sports games, we’ve got something for every gamer. 
        From the hottest new releases to timeless classics, our collection is curated to give you the best gaming experience.
        Find your next favorite game, dive into epic adventures, and start playing today. No delays, no hassle – just pure gaming!
        </p>

        <button>Shop now</button>
      </article>

      <article className={styles.partners}>
        <span>
          <img src="assets/Partners/ea-sports-logo-vector-01.png" alt="Call Of Duty Icon" />
          <img src="assets/Partners/Valorant-aPVsZquE_brandlogos.net.svg" alt="EA Sports Icon" />
          <img src="assets/Partners/grand-theft-auto-vi-logo-brandlogos.net_aguh99uge.svg" alt="Play Station Icon" />
          <img src="assets/Partners/Minecraft-JVTcXaYZ_brandlogos.net.svg" alt="Rockstar Games Icon" />
          <img src="assets/Partners/Roblox-New-Logo.jpg" alt="UFC Icon" />
        </span>
      </article>
    </section>

  
      <Card />
    </>
    );
  }

export default Landing;
