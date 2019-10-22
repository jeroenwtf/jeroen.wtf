import React from "react";

import IconLinkedIn from "../../../static/social/linkedin.svg"
import IconGithub from "../../../static/social/github.svg"
import IconTwitter from "../../../static/social/twitter.svg"
import IconInstagram from "../../../static/social/instagram.svg"


export default (props) => (
  <ul className={`b-social ${ (props.className || '') }`}>
    <li><a href="https://www.linkedin.com/in/jeroenwtf/" target="_blank"><IconLinkedIn /></a></li>
    <li><a href="https://github.com/jeroenwtf/" target="_blank"><IconGithub /></a></li>
    <li><a href="https://twitter.com/jeroen_wtf/" target="_blank"><IconTwitter /></a></li>
    <li><a href="https://instagram.com/jeroenwtf/" target="_blank"><IconInstagram /></a></li>
  </ul>
);
