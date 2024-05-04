import React from 'react'
import './myprojects.css'
import IMG1 from '../../assets/chatapp.png'
import IMG2 from '../../assets/Spotify.png'
import IMG3 from '../../assets/portfolio.png'
import IMG4 from '../../assets/shopkart.png';


const Myprojects = () => {
  return (
    <section id='myprojects'>

      <h5>My Recent Works</h5>
      <h2>Projects</h2>

      <div className="container portfolio__container">

        <article className='portfolio__item'>
            <div className="portfolio__item-image">
                <img src={IMG1} alt="" />
            </div>
            <h3>ChatApp</h3>
            <small className='text-light'>ReactJs | NodeJs | MongoDB</small>
            <div className="portfolio__item-cta">
              <a href="https://github.com/ajaykushwaha0508/chatApp" target="_blank" rel='noreferrer' className='btn'>Github</a>
              <a href="https://chatapp-yjsa.onrender.com" target="_blank" rel='noreferrer' className='btn'>View</a>
            </div>
              
        </article>
        <article className='portfolio__item'>
            <div className="portfolio__item-image">
                <img src={IMG2} alt="" />
            </div>
            <h3>Spotify Clone</h3>
            <small className='text-light'>ReactJs | NodeJs | ExpressJs | MongoDb</small>
            <div className="portfolio__item-cta">
              <a href="https://github.com/ajaykushwaha0508/Spotify_Clone" target="_blank" rel='noreferrer' className='btn'>Github</a>  
              <a href="https://spotifyapp-k6tz.onrender.com" target="_blank" rel='noreferrer' className='btn'>View</a>  
            </div>
            
        </article>
        <article className='portfolio__item'>
            <div className="portfolio__item-image">
                <img src={IMG4} alt="" />
            </div>
            <h3>Shopkart</h3>
            <small className='text-light'>HTML | CSS </small>
            <div className="portfolio__item-cta">
              <a href="https://github.com/ajaykushwaha0508/shopkart" target="_blank" rel='noreferrer' className='btn'>Github</a>  
              <a href="https://ajay-shopkart.netlify.app" target="_blank" rel='noreferrer' className='btn'>View</a>  
            </div>
            
        </article>
        <article className='portfolio__item'>
            <div className="portfolio__item-image">
                <img src={IMG3} alt="" />
            </div>
            <h3>My Portfolio(This website)</h3>
            <small className='text-light'>ReactJs</small>
            <div className="portfolio__item-cta">
              <a href="https://github.com/ajaykushwaha0508/portfolio" target="_blank" rel='noreferrer' className='btn'>Github</a>            
              <a href="https://ajay-my-portfolio.netlify.app/" target="_blank" rel='noreferrer' className='btn'>View</a>            
            </div>
            
        </article>
       
      </div>
    </section>
  )
}

export default Myprojects