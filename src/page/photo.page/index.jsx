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
      <img src={img} alt="" /> <img src={img1} alt="" />
      <img src={img2} alt="" /> <img src={img3} alt="" />{" "}
      <img src={img4} alt="" />
    </div>
  );
};

export default Photo;
