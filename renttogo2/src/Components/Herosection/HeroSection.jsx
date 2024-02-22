import React from 'react'

import himg from '../Assets/Logo/himg.png'




function HeroSection() {
    
  

  return (


    <section id="heroSection" className="hero--section">
        <div className="hero--section--content--box">
            <div className="hero--section--content">
                
                <h1 className="hero--section--title">
                    <span className="hero--section--title--color">Explore the World with<br/>RentToGo</span>{" "}<br/>

                </h1>
                <p className="hero--section--description">
                Our mission is to provide sustainable transportation options.<br/>
                    
                </p>
            </div>
            
                <button className="btn btn-primary" >Rent now</button>
            
        </div>
        <div className="hero--section--img">
            <img src={himg} alt=" "/>
            
        </div>
    </section>
  );
}

export default HeroSection