import './index.css';
import style from './card.module.css';
import FrequentlyAsked from './faq.jsx';
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

      <section className='customer_review'>
        <h1>Customer review section Here</h1>
      </section>
     
      <FrequentlyAsked />
      
      <section className={style.shipping_policies}>
        <article className='policy_one'>
          <h1>Standard Shipping Policy</h1>
          <p>
            We offer standard shipping on all orders within the continental United States. 
            Orders are typically processed within 1-3 business days and shipped via our trusted 
            carriers. Delivery times may vary based on your location, but you can expect your order to 
            arrive within 5-7 business days after processing.
          </p>
        </article>

        <article className='policy_two'>
          <h1>Expedited Shipping Policy</h1>
          <p>
            For customers who need their items sooner, we offer expedited shipping options 
            at checkout. Orders placed before 2 PM EST will be processed the same day and shipped via expedited carriers. 
            Delivery times for expedited shipping typically range from 2-3 business days, depending on your location.
          </p>
        </article>

        <article className='policy_three'>
          <h1>International Shipping Policy</h1>
          <p>
            We are pleased to offer international shipping to select countries. 
            Please note that international orders may be subject to customs duties and taxes, which are the responsibility of the customer. 
            Delivery times for international orders can vary widely, typically ranging from 7-21 business days depending on the destination.
          </p>
        </article>

        <article className='policy_four'>
          <h1>Free Shipping Policy</h1>
          <p>Enjoy free standard shipping on all orders over $50 within the continental United States. 
            This offer applies automatically at checkout. Please allow 5-7 business days for delivery after processing. 
            Exclusions may apply for oversized items or special promotions.</p>
        </article>

        <article className='policy_five'>
          <h1>Order Tracking Policy</h1>
          <p>Once your order has been shipped, you will receive a confirmation email with a tracking number. 
            You can use this tracking number to monitor the status of your shipment. 
            If you have any questions or concerns about your order, please contact our customer service team for assistance.</p>
        </article>
      </section>

      <section className={style.newsletter}>
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

      <div className='bg-red-300 text-white p-4 text-center'>
        <h1>Game Wave</h1>
        <p>Game Wave is a platform that connects gamers with the latest and greatest games, offering a wide selection of titles across various genres. 
          Whether you're into action, adventure, strategy, or sports, Game Wave has something for everyone. 
          Join our community of gamers and discover new releases, exclusive discounts, and exciting events.</p>
      </div>

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

