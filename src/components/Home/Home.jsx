import React from 'react'
import './Home.css'
import profile from '../../assets/profile.jpeg'
import { TypeAnimation } from "react-type-animation";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

function Home() {
    useGSAP(() => {
        let tl1 = gsap.timeline();
        tl1.from(".line1", {
            y: 80,
            duration: 1,
            opacity: 0
        })
        tl1.from(".line2", {
            y: 80,
            duration: 1,
            opacity: 0
        })
        tl1.from(".line3", {
            y: 80,
            duration: 1,
            opacity: 0
        })

        gsap.from(".right-home", {
            x: 200,
            duration: 1,
            opacity: 0
        })
    })
    return (
        <div id="home">
            <div className="left-home">
                <div className="home-details">
                    <div className="line1">I'M</div>
                    <div className="line2">
                        Priti Maurya<br />
                    </div>
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
                <img src={profile} alt="man" />
            </div>
        </div>
    )
}

export default Home
