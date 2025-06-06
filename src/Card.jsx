import style from './card.module.css';
import freq from './faq.jsx';
const Card = () => {
    return(
    <>
      <section className={style.container}>
        <article className={style.pick_1}>
          <figure>
            <img src="assets\Featured games\Fifa 24.jpg" alt="" id="featured_one"/>
          </figure>

          <aside>
            <header>Game Name</header>
            <p>Game description</p>
          </aside>
        </article>

        <article className={style.pick_2}>
          <figure>
            <img src="assets\Featured games\Call of duty blackops cold war.jpg"  id="featured_two"/>
          </figure>

          <aside>
            <header>Game Name</header>
            <p>Game description</p>
          </aside>
        </article>

        <article className={style.pick_3}>
          <figure>
            <img src="assets\Featured games\call of duty warzone.jpg" alt=""/>
          </figure>

          <aside>
            <header>Game Name</header>
            <p>Game description</p>
          </aside>
        </article>

        <article className={style.pick_4}>
          <figure>
            <img src="assets\Featured games\Cyberpunk.jpg" alt="" id={style.featured_game_four}/>
          </figure>

          <aside>
            <header>Game Name</header>
            <p>Game description</p>
          </aside>
        </article>

        <article className={style.pick_5}>
          <figure>
            <img src="assets\Featured games\Red redemption.jpg" alt="" id={style.featured_game_five}/>
          </figure>

          <aside>
            <header>Game Name</header>
            <p>Game description</p>
          </aside>
        </article>
      </section>


      <section className={style.discounts}>
      <article className={style.discount_1}>
          <figure>
            <img src="assets\Discounts\hot-sale.png" alt="" />
          </figure>

          <aside>
            <header>Discount Name</header>
            <p>Discount description</p>
          </aside>
        </article>

        <article className={style.discount_2}>
          <figure>
            <img src="assets\Discounts\discount.png" alt="" />
          </figure>

          <aside>
            <header>Discount Name</header>
            <p>Discount description</p>
          </aside>
        </article>

        <article className={style.discount_3}>
          <figure>
            <img src="assets\Discounts\gift.png" alt="" />
          </figure>

          <aside>
            <header>Discount Name</header>
            <p>Discount description</p>
          </aside>
        </article>
      </section>
     
      <Faq />
      
      <section className={style.FAQ}>
        </section>

      <section className={style.shipping_policies}>
        <p>Policy 1</p>
        <p>Policy 2</p>
        <p>Policy 3</p>
        <p>Policy 4</p>
        <p>Policy 5</p>
        <p>Policy 6</p>
      </section>

      <section>
        <h1>Subscribe to our weekly newspaper</h1>
        <h3>Get updates about the latest realeases, dscounts and offers</h3>
        
        <form action="" className={style.newsletter}>
          <input type="text" placeholder='Name'/>
          <input type="text" placeholder='email'/>

          <button>submit</button>
        </form>
      </section>

      <footer className={style.footer}>
        <div>
        Contact info
        social media links
        maps
        copyright information
        </div>
      </footer>
    </>
)

}

export default Card;


/*New Release
Most Popular
Early Release
Rare
Top Pick
Unreleased*/

