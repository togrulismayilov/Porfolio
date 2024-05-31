import React from "react";
import "./index.scss";
import Icon from "../icon.page";
import Photo from "../photo.page";
import Card from "../card.page";
const Home = () => {
  return (
    <div className="hP">
      <h3>
        Hey! I'm <span>Toğrul İsmayıllı</span>
      </h3>
      <h4>I'm A Front End Web Developer</h4>
      <p>
        I can build user interface for web sites and applications with
        <span>React JS</span>
        and <span>Vite</span> I love the front end development.
      </p>
      <br />

      <Icon />
      <Photo />
      <Card />
    </div>
  );
};

export default Home;
