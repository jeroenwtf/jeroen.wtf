import React from "react"

import Skill from "./skill.js"

import IconCode from "../../static/code.svg"
import IconDesignSystem from "../../static/design-system.svg"
import IconEmail from "../../static/email.svg"


export default () => (
  <div className="b-skills">
    <div className="container">
      <h2 className="b-skills__title">What do I do</h2>
      <div className="b-skills__list">
        <Skill
          icon={<IconCode className="b-skill__icon" />}
          title="Development"
          keywords="HTML, CSS (Sass + BEM), JavaScript (React, Gatsby, Storybook)."
        >
          Design to code. Translate beautiful landing pages and UIs to clean, maintainable and reusable code, with a pixel-perfect attention to detail.
        </Skill>
        <Skill
          icon={<IconDesignSystem className="b-skill__icon" />}
          title="Design systems"
          keywords="React, Storybook, Frontify, Zeplin, Atomic Design, Visual Regression Testing."
        >
          Creation of a Design System from scratch with the best practices and optimal adoption, working with Design and Engineering teams.
        </Skill>
        <Skill
          icon={<IconEmail className="b-skill__icon" />}
          title="Email coding"
          keywords="Task automation (GulpJS), templating engines (Django, Liquid, TwigJS)."
        >
          Responsive and cross-client marketing and product emails. Built with proper templating and developing the right tooling for each situation.
        </Skill>
      </div>
    </div>
  </div>
);
