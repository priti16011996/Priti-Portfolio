import React from 'react'
import './Home.css'
import manImage from '../../assets/man.png'
import { TypeAnimation } from "react-type-animation";

function Home() {
    return (
        <div id="home">
            <div className="left-home">
                <div className="home-details">
                    <div className="line1">I'M</div>
                    <div className="line2">Priti Maurya</div>
                    <div className="line3">
                        <TypeAnimation
                            sequence={[
                                "Software Developer",
                                2000,
                                "MERN Stack Developer",
                                2000,
                                "Node.js Developer",
                                2000,
                                "PHP Developer",
                                2000,
                                "Backend Developer",
                                2000,
                            ]}
                            wrapper="span"
                            speed={50}
                            repeat={Infinity}
                        />
                    </div>
                    <button className="btn">Hire Me</button>
                </div>
            </div>
            <div className="right-home">
                <img src={manImage} alt="man" />
            </div>
        </div>
    )
}

export default Home
