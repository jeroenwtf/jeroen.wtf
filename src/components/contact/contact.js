import React from "react"

import Button from "../button/button"

import WaveContact from "../../../static/contact_wave.svg"


export default () => (
  <div className="b-contact">
    <WaveContact className="b-contact__wave" />

    <div className="container">
      <h2 className="b-contact__title">Get in touch</h2>
      <p className="b-contact__text">If you have any questions, just drop me a line in any <em>social media</em> or just...</p>
      <Button to="mailto:hola@jeroen.wtf">Send me an email</Button>
    </div>
  </div>
);