import React from "react"

import Social from "./social";

import WaveHero from "../../static/hero_wave.svg"

import IconLinkedIn from "../../static/social/linkedin.svg"
import IconGithub from "../../static/social/github.svg"
import IconTwitter from "../../static/social/twitter.svg"
import IconInstagram from "../../static/social/instagram.svg"


export default () => (
  <div className="b-hero">
    <div className="container">
      <div className="b-header">
        <h1 className="b-header__title">Jeroen van Meerendonk</h1>
        <a href="#" className="b-header__contact-me">Contact me</a>
        <Social className="b-header__social" />
      </div>
      <div className="b-hero__tag">
        <div>
          <p className="b-hero__title">
          Hi! My name is <strong>Jeroen</strong> and I'm a <strong>UX Engineer<span className="b-hero__a-what">A what?</span></strong>.</p>
        </div>
      </div>
    </div>

    <WaveHero className="b-hero__wave" />
  </div>
);
