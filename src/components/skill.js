import React from "react"


export default (props) => (
  <div className="b-skill">
    {props.icon}
    <h3 className="b-skill__title h-gradient-text h-gradient--1">{props.title}</h3>
    <p className="b-skill__text">{props.children}</p>
    <p className="b-skill__footer">{props.keywords}</p>
  </div>
);
