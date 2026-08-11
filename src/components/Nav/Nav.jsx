import React from 'react'
import './Nav.css'
import { Link } from 'react-scroll';
import { useRef } from 'react';
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

function Nav() {
    let hamburgerRef = React.useRef(null);
    let mobileMenuRef = React.useRef(null);

    useGSAP(() => {
        let t1 = gsap.timeline();
        t1.from("nav h1", {
            y: -100,
            duration: 1,
            opacity: 0
        })
        t1.from("nav ul li", {
            y: -100,
            duration: 1,
            opacity: 0,
            stagger: 1
        })
    })
    return (
        <>
            <nav>
                <h1>Portfolio</h1>
                <ul className="desktop-view">
                    <li>
                        <Link
                            to="home"
                            spy={true}
                            smooth={true}
                            duration={500}
                            offset={-90}
                            activeClass="active"
                        >
                            Home
                        </Link>
                    </li>

                    <li>
                        <Link
                            to="about"
                            spy={true}
                            smooth={true}
                            duration={500}
                            offset={-90}
                            activeClass="active"
                        >
                            About
                        </Link>
                    </li>

                    <li>
                        <Link
                            to="projects"
                            spy={true}
                            smooth={true}
                            duration={500}
                            offset={-90}
                            activeClass="active"
                        >
                            Projects
                        </Link>
                    </li>

                    <li>
                        <Link
                            to="contact"
                            spy={true}
                            smooth={true}
                            duration={500}
                            offset={-90}
                            activeClass="active"
                        >
                            Contact
                        </Link>
                    </li>
                </ul>
                <div className="hamburger" ref={hamburgerRef} onClick={() => {
                    mobileMenuRef.current.classList.toggle('active-mobile');
                    hamburgerRef.current.classList.toggle('active-ham');
                }}>
                    <div className="ham"></div>
                    <div className="ham"></div>
                    <div className="ham"></div>
                </div>
                <ul className="mobile-view" ref={mobileMenuRef}>
                    <li>
                        <Link
                            to="home"
                            spy={true}
                            smooth={true}
                            duration={500}
                            activeClass="active"
                        >
                            Home
                        </Link>
                    </li>

                    <li>
                        <Link
                            to="about"
                            spy={true}
                            smooth={true}
                            duration={500}
                            activeClass="active"
                        >
                            About
                        </Link>
                    </li>

                    <li>
                        <Link
                            to="projects"
                            spy={true}
                            smooth={true}
                            duration={500}
                            activeClass="active"
                        >
                            Projects
                        </Link>
                    </li>

                    <li>
                        <Link
                            to="contact"
                            spy={true}
                            smooth={true}
                            duration={500}
                            activeClass="active"
                        >
                            Contact
                        </Link>
                    </li>
                </ul>
            </nav>
        </>
    )
}

export default Nav
