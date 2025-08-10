

function Landing() {
    return(
      <>

    <nav className='flex justify-center align-center'>

      <header>
        <h1>Game Wave</h1>
      </header>

      <ul className="list-none">
        <li>Login</li>
        <li>Sign Up</li>
        <li>
          <button>Shop now</button>
        </li>
      </ul>
    </nav>

    <article className="flex">
      
      <figure>
      <img className='h-3/4' src="assets/Hero section/banner 2.jpg" alt=""/>
      </figure>

      <aside>
        <h1>Play More, Pay Less.</h1>
        <h1>The Ultimate Game Store!</h1>
      </aside>
    </article>

    <article>

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
</>
    );
    }

export default Landing;
