import React from "react"

import Social from "../social/social";

export default () => (
  <div className="b-header">
    <h1 className="b-header__title">Jeroen van Meerendonk</h1>
    <a href="mailto:hola@jeroen.wtf" className="b-header__contact-me">Contact me</a>
    <Social className="b-header__social" />
  </div>
);
