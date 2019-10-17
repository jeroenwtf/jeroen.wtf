import React from "react"

import IconCode from "../../static/code.svg"
import IconDesignSystem from "../../static/design-system.svg"
import IconEmail from "../../static/email.svg"


export default () => (
  <div className="b-skills">
    <div className="container">
      <h2 className="b-skills__title">What do I do</h2>
      <div className="b-skills__list">
        <div className="b-skill">
          <IconCode className="b-skill__icon" />
          <h3 className="b-skill__title h-gradient-text h-gradient--1">Development</h3>
          <p className="b-skill__text">Design to code. Translate beautiful landing pages and UIs to clean, maintainable and reusable code, with a pixel-perfect attention to detail.</p>
          <p className="b-skill__footer">HTML, CSS (Sass + BEM), JavaScript (React, Gatsby, Storybook).</p>
        </div>
        <div className="b-skill">
          <IconDesignSystem className="b-skill__icon" />
          <h3 className="b-skill__title h-gradient-text h-gradient--1">Design systems</h3>
          <p className="b-skill__text">Creation of a Design System from scratch with the best practices and optimal adoption, working with Design and Engineering teams.</p>
          <p className="b-skill__footer">React, Storybook, Frontify, Zeplin, Atomic Design, Visual Regression Testing.</p>
        </div>
        <div className="b-skill">
          <IconEmail className="b-skill__icon" />
          <h3 className="b-skill__title h-gradient-text h-gradient--1">Email coding</h3>
          <p className="b-skill__text">Responsive and cross-client marketing and product emails. Built with proper templating and developing the right tooling for each situation.</p>
          <p className="b-skill__footer">Task automation (GulpJS), templating engines (Django, Liquid, TwigJS).</p>
        </div>
      </div>
    </div>
  </div>
);
