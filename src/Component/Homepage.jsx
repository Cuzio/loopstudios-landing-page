import React from 'react'
import '../css/homepage.css'
import interactive from '../images/desktop/image-interactive.jpg'
import deep from '../images/desktop/image-deep-earth.jpg'
import night from '../images/desktop/image-night-arcade.jpg'
import soccer from '../images/desktop/image-soccer-team.jpg'
import grid from '../images/desktop/image-grid.jpg'
import above from '../images/desktop/image-from-above.jpg'
import pocket from '../images/desktop/image-pocket-borealis.jpg'
import curiosity from '../images/desktop/image-curiosity.jpg'
import make from '../images/desktop/image-fisheye.jpg'
import facebook from '../images/icon-facebook.svg'
import twitter from '../images/icon-twitter.svg'
import pinter from '../images/icon-pinterest.svg'
import instagram from '../images/icon-instagram.svg'

const Homepage = () => {
  return (
    <div className='container'>

      <div className='top'>
      
        <div className='immersive'>
        <h1> IMMERSIVE <br /> EXPERIENCES <br /> THAT DELIVER</h1>
        </div>

      </div>

      <div className='lower'>

        <section className='leader'>
            <div>
                <img src={interactive} alt="interactive" className='interactive' />
            </div>

            <div className='interactiveText'>
                <h3>THE  LEADER IN INTERACTIVE VR</h3>
                <p>Founded in 2011, Loopstudios has been        producing world-class virtual reality 
                projects for some of the best companies around the globe. Our award-winning creations have transformed businesses through digital experiences that bind to their brand.
                </p>
            </div>
        </section>

        <section className="creation">
          <div className='our'>
            <h3>OUR CREATIONS</h3>
            <button className='btn'>SEE ALL</button>
          </div>

          <div className="pic">
            <img src={deep} alt="deep" height={200} width={150} />
            <img src={night} alt="night" height={200} width={150} />
            <img src={soccer} alt="soccer" height={200} width={150} />
            <img src={grid} alt="grid" height={200} width={150} />
            <img src={above} alt="above" height={200} width={150} />
            <img src={pocket} alt="pocket" height={200} width={150} />
            <img src={curiosity} alt="curiosity" height={200} width={150} />
            <img src={make} alt="make" height={200} width={150} placeholder='MAKE IT FISHEYE' />
          </div>
          

        </section>        

      </div>

      <footer>
        <div className="left">
          <h2>loopstudios</h2>
          <ul>
            <li>About</li>
            <li>Careers</li>
            <li>Events</li>
            <li>Products</li>
            <li>Support</li>
          </ul>
        </div>
        <div className="right">
          <div className="logo">
            <img src={facebook} alt="facebook" height={15} />
            <img src={twitter} alt="twitter" height={15} />
            <img src={pinter} alt="pinter" height={15} />
            <img src={instagram} alt="instagram" height={15} />
          </div>
          <div className="text">
            <p>© 2021 Loopstudios. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Homepage
