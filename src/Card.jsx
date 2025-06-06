import style from './card.module.css'

function Card() {
    return(
    <>
      <section className={style.container}>
        <article className={style.pick_1}>
          <figure>
            <img src="" alt="" />
          </figure>

          <aside>
            <header>Game Name</header>
            <p>Game description</p>
          </aside>
        </article>

        <article className={style.pick_2}>
          <figure>
            <img src="" alt="" />
          </figure>

          <aside>
            <header>Game Name</header>
            <p>Game description</p>
          </aside>
        </article>

        <article className={style.pick_3}>
          <figure>
            <img src="" alt="" />
          </figure>

          <aside>
            <header>Game Name</header>
            <p>Game description</p>
          </aside>
        </article>

        <article className={style.pick_4}>
          <figure>
            <img src="" alt="" />
          </figure>

          <aside>
            <header>Game Name</header>
            <p>Game description</p>
          </aside>
        </article>

        <article className={style.pick_5}>
          <figure>
            <img src="" alt="" />
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
            <img src="" alt="" />
          </figure>

          <aside>
            <header>Discount Name</header>
            <p>Discount description</p>
          </aside>
        </article>

        <article className={style.discount_2}>
          <figure>
            <img src="" alt="" />
          </figure>

          <aside>
            <header>Discount Name</header>
            <p>Discount description</p>
          </aside>
        </article>

        <article className={style.discount_3}>
          <figure>
            <img src="" alt="" />
          </figure>

          <aside>
            <header>Discount Name</header>
            <p>Discount description</p>
          </aside>
        </article>
      </section>

      

      <section className={style.FAQ}>
        <header>FREQUENTLY ASKED QUESTIONS</header>
        <article>
          <p>Question 1</p>
          <p>Question 2</p>
          <p>Question 3</p>
          <p>Question 4</p>
          <p>Question 5</p>
          <p>Question 6</p>

          <p>Answer 1</p>
          <p>Answer 2</p>
          <p>Answer 3</p>
          <p>Answer 4</p>
          <p>Answer 5</p>
          <p>Answer 6</p>
        </article>
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

