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
          <li>
          <button>Shop now</button>
          </li>
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
      
        <section className={styles.customer_review_section}>
              <article className={styles.customer_review_1}>
                <figure>
                  <img src="assets/Customer reviews avatars/reviewer 1.jpg" alt="" id={styles.reviewer_one}/>
                  <aside>
                  <p>
                    Customer one review message
                  </p>
                </aside>
                </figure>

              </article>
        
              <article className={styles.customer_review_2}>
                <figure>
                  <img src="assets/Customer reviews avatars/reviewer 2.jpg" alt="" id={styles.reviewer_two}/>
                  <aside>
                  <p>
                    Customer two review message
                  </p>
                </aside>
                </figure>
        
                
              </article>
        
              <article className={styles.customer_review_3}>
                <figure>
                  <img src="assets/Customer reviews avatars/reviewer 3.jpg" alt="" id={styles.reviewer_three}/>
                  <aside>
                  <p>
                    Customer three review message
                  </p>
                </aside>
                </figure>
        
                
              </article>

            </section>

        <article className={styles.stats}>

          <aside>
            <div>
              <h1>$1M+</h1>
              <p>Total sales</p>
            </div>

            <div>
              <h1>40K+</h1>
              <p>Daily users</p>
            </div>

            <div>
              <h1>85.4%</h1>
              <p>Average daily users</p>
            </div>
          </aside>

        
        </article>

        
        <article className={styles.socials}>
        <img src="assets/socials/instagram-2016-6.svg" alt="" />
        <img src="assets/socials/pinterest-3.svg" alt="" />
        <img src="assets/socials/reddit-4.svg" alt="" />
        <img src="assets/socials/tiktok-icon-2.svg" alt="" />
        <img src="assets/socials/youtube-icon-5.svg" alt="" />
        </article>
      </article>

      <article className={styles.partners}>
        <span>
          <img src="assets/Partners/ea-sports-logo-vector-01.png" alt="Call Of Duty Icon" />
          <img src="assets/Partners/Valorant-aPVsZquE_brandlogos.net.svg" alt="EA Sports Icon" />
          <img src="assets/Partners/grand-theft-auto-vi-logo-brandlogos.net_aguh99uge.svg" alt="Play Station Icon" />
          <img src="assets/Partners/Minecraft-JVTcXaYZ_brandlogos.net.svg" alt="Rockstar Games Icon" />
          <img src="assets/Partners/fifa-logo-brandlogos.net_ef027xqux.svg" alt="UFC Icon" />
        </span>
      </article>
    </section>

  
      <Card />
    </>
    );
  }

export default Landing;
