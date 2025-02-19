import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {


  return (
    <>
      <header>
        <nav>
          <div className="container">
            <div className="logo"><img src="./public/logo.png" alt="" /></div>
            <ul>
              <li><a href="">Home</a></li>
              <li><a href="">About</a></li>
              <li><a href="">Models</a></li>
              <li><a href="">Sustainability</a></li>
              <li><a href="">Contact</a></li>
            </ul>
            <div className="icons">
              <img src="./public/soroq.svg" alt="" />
              <img src="./public/eathr.svg" alt="" />
              <img src="./public/user.svg" alt="" />
            </div>
            <p>Menu <img src="../public/menu.svg" alt="" /></p>
          </div>
        </nav>
        <div className="hero">
          <div className="container">
            <h1 className='hero-title'>Meet The Astro 1</h1>
            <div className="card">
              <h1>Starts at $39,000</h1>
              <p>Meet the Astro 1, our entry-level electric vehicle designed to redefine your daily commute with unparalleled convenience and comfort.</p>
              <div className="buttons">
                <button>Order now</button>
                <button>Test drive</button>
              </div>
            </div>
          </div>
        </div>
      </header>
      <main>
        <section className="our-mission">
          <img className='section-bg2' src="./public/bg2.png" alt="" />
          <div className="container">
            <div className="section-img">
              <img className='car-img' src="/img1.png" alt="" />
              <img className='img1' src="/img2.png" alt="" />
            </div>
            <div className="section-info">
              <img src="./public/Vector.png" alt="" />
              <h1 className='section-title'>Our Mission</h1>
              <p>At Astro, we are driven by the vision of a sustainable future where transportation is both environmentally friendly and exhilarating</p>
              <p>Our mission is to revolutionize the mobility landscape by developing innovative electric vehicles (EVs) that combine cutting-edge technology with dynamic performance. </p>
              <button className='our-button'>Learn more</button>
            </div>
            <div className="section-img">
              <img className='car-img car-img2' src="/img3.png" alt="" />
              <img className='img2' src="/img4.png" alt="" />
            </div>
          </div>
        </section>
        <section className="Exsplore">
          <div className="container">
            <h1 className="Exsplore-title">Explore Models</h1>
            <p>Astro is committed to pushing the boundaries of what is possible, leading the charge toward a cleaner, greener planet through continuous innovation, superior craftsmanship.</p>
            <div className="cards">
              <div className="card">
                <h1>Astro 1</h1>
                <div className="price">
                  <p>Starts at <span>$39,000</span></p>
                  <p>Learn more <img src="./public/right.svg" alt="" /></p>
                </div>
              </div>
              <div className="card card2">
                <h1>Astro 2</h1>
                <div className="price">
                  <p>Starts at <span>$59,000</span></p>
                  <p>Learn more <img src="./public/right.svg" alt="" /></p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="find">
          <div className="container">
            <div className="box">
              <h1 className='find-title'>Find a dealer</h1>
              <p>To find the best offers and nearby inventory, we need to find your location. Please enter your location</p>
              <div className="search">
                <img src="./public/search.svg" alt="" />
                <input type="text" placeholder='Search your location' />
                <img src="./public/clos.svg" alt="" />
              </div>
              <div className="or">
                <img src="./public/line.png" alt="" />
                <p>or</p>
                <img src="./public/line.png" alt="" />
              </div>
              <button><img src="./public/loc.svg" alt="" />Use my current location</button>
            </div>
          </div>
        </section>
        <section className="full-section">
          <div className="container">
            <div className="section-info">
              <h1>Come and build a sustainable future with us. Join <img src="./public/Vector.png" alt="" /></h1>
              <p>Our company is seeking pasionate, talented, and driven people who care  about what they do. </p>
              <button>Explore open positions</button>
            </div>
            <div className="section-img">
              <img src="./public/full-img.png" alt="" />
            </div>
          </div>
        </section>
      </main>
      <footer>
        <div className="container">
          <p className='ptag'>© 2024 Astra. All right reserved</p>
          <ul>
            <li><a href=""><img src="./public/sms.svg" alt="" />hello@astra.com</a></li>
            <li><a href="">Facebook</a></li>
            <li><a href="">Instagram</a></li>
            <li><a href="">Twitter</a></li>
          </ul>
          <img className='img-none' src="./public/lin2.png" alt="" />
          <img className='linefull' src="../public/Line 15.png" alt="" />
          <p>Privacy Policy</p>
          <p className='ptag2'>© 2024 Astra. All right reserved</p>
        </div>
      </footer>
    </>
  )
}

export default App
