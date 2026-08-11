import React from "react";
import "./About.css";
import Card from "../Card/Card";

import mern from "../../assets/mern.png";
import BackendDev from "../../assets/BackendDev.png";
import PHPDev from "../../assets/PHPDev.png";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

function About() {
    useGSAP(() => {
        gsap.from(".circle", {
            x: -100,
            opacity: 0,
            duration: 1,
            stagger: 0.8,

            scrollTrigger: {
                trigger: ".circle",
                scroll: "body",
                scrub: 2,
                start: "top 80%",
                end: "bottom 30%",
            },
        });
        gsap.from(".line", {
            x: -100,
            opacity: 0,
            duration: 1,
            stagger: 0.8,

            scrollTrigger: {
                trigger: ".line",
                scroll: "body",
                scrub: 2,
                start: "top 80%",
                end: "bottom 30%",
            },
        });
        gsap.from(".about-details h1", {
            x: -100,
            opacity: 0,
            duration: 1,
            stagger: 1,

            scrollTrigger: {
                trigger: ".about-details h1",
                scroll: "body",
                scrub: 2,
                start: "top 60%",
                end: "bottom 30%",
            },
        });
        gsap.from(".about-details ul", {
            y: -100,
            opacity: 0,
            duration: 1,
            stagger: 1,

            scrollTrigger: {
                trigger: ".about-details ul",
                scroll: "body",
                scrub: 2,
                start: "top 60%",
                end: "bottom 30%",
            },
        });
        gsap.from(".about-right", {
            x: 100,
            opacity: 0,
            duration: 1,
            stagger: 1,

            scrollTrigger: {
                trigger: ".about-right",
                scroll: "body",
                scrub: 2,
                start: "top 60%",
                end: "bottom 30%",
            },
        });
    });

    return (
        <div id="about">
            <div className="about-left">
                <div className="circle-line">
                    <div className="circle"></div>

                    <div className="line"></div>

                    <div className="circle"></div>

                    <div className="line"></div>

                    <div className="circle"></div>
                </div>

                <div className="about-details">
                    <div className="personal-details">
                        <h1>Personal Details</h1>

                        <ul>
                            <li>
                                <span>Name</span> : Priti Maurya
                            </li>

                            <li>
                                <span>Designation</span> : Software Developer
                            </li>

                            <li>
                                <span>Experience</span> : 4+ years
                            </li>

                            <li>
                                <span>Gender</span> : Female
                            </li>

                            <li>
                                <span>Languages</span> : Hindi, English
                            </li>
                        </ul>
                    </div>

                    <div className="education-details">
                        <h1>Education</h1>

                        <ul>
                            <li>
                                <span>Masters</span> : MCA
                            </li>

                            <li>Institute of Engineering and Technology</li>

                            <li>
                                <span>Graduation</span> : B.Sc(Hons)
                            </li>

                            <li>Banaras Hindu University (ISC Main Campus)</li>
                        </ul>
                    </div>

                    <div className="skills">
                        <h1>Skills</h1>

                        <ul>
                            <li>HTML | CSS | Bootstrap | jQuery</li>
                            <li>JavaScript | PHP</li>
                            <li>Node.js | Express.js | React.js</li>
                            <li>MySQL | MongoDB | Redis</li>
                            <li>Scalable REST APIs</li>
                            <li>Docker | AWS | Microservices</li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="about-right">
                <Card title="MERN Stack Developer" image={mern} />
                <Card title="Backend Developer" image={BackendDev} />
                <Card title="PHP Developer" image={PHPDev} />
            </div>
        </div>
    );
}

export default About;