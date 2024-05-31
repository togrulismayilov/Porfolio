import React from "react";
import "./index.scss";
import img from "../../assets/img/indir.png";
import img1 from "../../assets/img/indir (4).png";
import img2 from "../../assets/img/indir (3).png";
import img3 from "../../assets/img/indir (2).png";
import img4 from "../../assets/img/indir (1).png";

const Photo = () => {
  return (
    <div id="iPar">
      <a href="">
        <img src={img} alt="" />
      </a>
      <a href="">
        {" "}
        <img src={img1} alt="" />
      </a>
      <a href="">
        <img src={img2} alt="" />
      </a>
      <a href="">
        {" "}
        <img src={img3} alt="" />
      </a>
      <a href="">
        {" "}
        <img src={img4} alt="" />
      </a>
    </div>
  );
};

export default Photo;
