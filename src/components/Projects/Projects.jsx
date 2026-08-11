import React from 'react'
import './Projects.css'
import Card from "../Card/Card"
import portfolio from "../../assets/Portfolio.png"
import blogify from "../../assets/Blogify.png"
import homeStay from "../../assets/HomeStay.png"
import talkATive from "../../assets/Talk-A-Tive.png"
import zerodha from "../../assets/zerodha.png"
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);
function Projects() {
    useGSAP(() => {
        gsap.from("#project-heading", {
            y: 100,
            opacity: 0,
            duration: 1,
            stagger: 1,

            scrollTrigger: {
                trigger: "#project-heading",
                scrub: 2,
                scroll: "body",
                start: "top 70%",
                end: "bottom 30%",
            },
        });
        gsap.from(".slider", {
            y: 100,
            opacity: 0,
            duration: 1,
            stagger: 1,

            scrollTrigger: {
                trigger: ".slider",
                scrub: 2,
                scroll: "body",
                start: "top 70%",
                end: "bottom 30%",
            },
        });
    })
    return (
        <div id="projects">
            <h1 id="project-heading">4+ Year's of Experienced in Projects</h1>
            <div className="slider">
                <Card title="Portfolio" image={portfolio} url="https://github.com/priti16011996/Priti-Portfolio" />
                <Card title="Blogify" image={blogify} url="http://blogify-env.eba-maxykcaw.ap-south-1.elasticbeanstalk.com/blog/6a21975a3f4b43df2629f9b1" />
                <Card title="Home Stay Listing" image={homeStay} url="https://homestay-chgo.onrender.com/" />
                <Card title="Talk-A-Tive" image={talkATive} url="https://github.com/priti16011996/MERN-Chat-App" />
                <Card title="Zerodha Clone" image={zerodha} url="https://github.com/priti16011996/zerodha-clone" />
            </div>
        </div>
    )
}

export default Projects
