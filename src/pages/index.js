import React from "react"

import "../scss/styles.scss";

import Hero from "../components/hero";
import Meaning from "../components/meaning";
import Skills from "../components/skills";
import AboutMe from "../components/aboutMe";
import Contact from "../components/contact";
import Footer from "../components/footer";


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
