import React from 'react'
import './Contact.css'
import contact from "../../assets/contact.png"
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);
function Contact() {
    useGSAP(() => {
        gsap.from(".left-contact", {
            x: -100,
            opacity: 0,
            duration: 1,
            stagger: 1,

            scrollTrigger: {
                trigger: ".left-contact",
                scrub: 2,
                scroll: "body",
                start: "top 70%",
                end: "bottom 30%",
            },
        });
        gsap.from("form", {
            x: 100,
            opacity: 0,
            duration: 1,
            stagger: 1,

            scrollTrigger: {
                trigger: "form",
                scrub: 2,
                start: "top 70%",
                end: "bottom 30%",
            },
        });
    });
    return (
        <div id="contact">
            <div className="left-contact">
                <img src={contact} alt="contact-us"></img>
            </div>
            <div className="right-contact">
                <form action="https://formspree.io/f/xoeadegk" method="POST">
                    <input type="text" placeholder='Please Enter Your Name' name="name" id="name" />
                    <input type="text" placeholder='Please Enter Your Email' name='email' id="email" />
                    <textarea name="message" id="message" placeholder='message'></textarea>
                    <input type="submit" id="submit-btn" value="submit" />
                </form>
            </div>
        </div>
    )
}

export default Contact
