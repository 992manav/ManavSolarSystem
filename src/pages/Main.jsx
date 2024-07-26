import Marsimage from "../images/Marsimage.svg";
import Earthimage from "../images/Earthimage.svg";
import jupiterimage from "../images/jupiterimage.svg";
import Neptuneimage from "../images/Neptuneimage.svg";
import Saturnimage from "../images/Saturnimage.svg";
import Uranusimage from "../images/Uranusimage.svg";
import Whitemoon from "../images/Whitemoon.svg";

import React, { useRef } from 'react';
import "./stylings/Main.css";


import Sun from "./Sun.jsx";


export default function(){

    const backgroundImage = 'url(/background.jpg)';

    const styles = {
      container: {
        backgroundImage,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '100vph',
        color: 'white',
        
      },
    };
    
    const sunRef = useRef(null);

  // Function to scroll to the Sun section
  const handleScroll = () => {
    sunRef.current.scrollIntoView({ behavior: 'smooth' });
  };

    return(<>
        <div className="MainContainer" style={styles.container}>
                <div className="Leftside">
                        <img src={Whitemoon} id="Whitemoon" alt="Whitemoon logo" />
                        <img src={Saturnimage} id="Saturn" alt="Saturn logo" />
                        <img src={Uranusimage} id="Uranus" alt="Uranus logo" />
                </div>

            <div className="Middle">

                        <div className="MiddleUp">
                            <img src={Earthimage} id="Earth" alt="Earth logo" />
                        </div>

                        <div className="paraa">

                            <h1 style={{ fontFamily: 'Orbitron'}}>Let's Get To Know<br/>Our Solar System<br/>Galaxy</h1>
                            <p>Embark on a cosmic journey across the ethereal expanse of the solar system Galaxy and follow the orchestration of the cosmos and the planets weaving stories of their timeless existence.</p>
                            <button className="learn-more-btn" onClick={handleScroll}>Learn More <span>&#8595;</span></button>
      
                        </div>
                        
                        <div className="MiddleDown">
                            <img src={Neptuneimage} id="Neptune" alt="Neptune logo" />
                        </div>
            </div>
             

                <div className="Rightside">
                    
                    <img src={Marsimage} id="Mars" alt="Mars logo" />
                    <img src={jupiterimage} id="Jupiter" alt="Jupiter logo" /> 
                </div>

        </div>

        <div ref={sunRef} id="SunSection">
        <Sun />
        </div>

</>
    )
};