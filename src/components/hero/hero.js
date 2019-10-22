import React from "react"

import Header from "../header/header"

import WaveHero from "../../../static/hero_wave.svg"

import IconLinkedIn from "../../../static/social/linkedin.svg"
import IconGithub from "../../../static/social/github.svg"
import IconTwitter from "../../../static/social/twitter.svg"
import IconInstagram from "../../../static/social/instagram.svg"


export default () => (
  <div className="b-hero">
    <div className="container">
      <Header />
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
