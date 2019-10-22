import React from "react"

import "../scss/styles.scss";

import Hero from "../components/hero/hero";
import Meaning from "../components/meaning/meaning";
import Skills from "../components/skills/skills";
import AboutMe from "../components/about-me/about-me";
import Contact from "../components/contact/contact";
import Footer from "../components/footer/footer";


export default () => (
  <div>
    <Hero />
    <Meaning />
    <Skills />
    <AboutMe />
    <Contact />
    <Footer />
  </div>
);
