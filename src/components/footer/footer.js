import React from "react";

import Social from "../social/social";

import IconLinkedIn from "../../../static/social/linkedin.svg"
import IconGithub from "../../../static/social/github.svg"
import IconTwitter from "../../../static/social/twitter.svg"
import IconInstagram from "../../../static/social/instagram.svg"


export default () => (
  <div className="b-footer">
    <Social className="b-footer__social" />
    <p className="b-footer__name">Jeroen van Meerendonk</p>
    <p className="b-footer__trusted">&mdash;&nbsp; Trusted since 1986 &nbsp;&mdash;</p>
  </div>
);
