import "./Testimonial.css";
import { testimonialsData } from "../../data/testimonialsData";
import { useState } from "react";
import leftArrow from "../../assets/leftArrow.png";
import rightArrow from "../../assets/rightArrow.png";

const Testimonial = () => {
  const [selected, setSelected] = useState(0);
  const tlength = testimonialsData.length;
  const leftArrowClick = () => {
    selected === 0 ? setSelected(tlength - 1) : setSelected((prev) => prev - 1);
  };
  const rightArrowClick=()=>{
    selected===tlength-1?setSelected(0):setSelected((prev)=>prev+1)
  }
  return (
    <div className="Testimonials">
      <div className="left-t">
        <span>Testimonials</span>
        <span className="stroke-text">What they</span>
        <span>Say about us</span>
        <span>{testimonialsData[selected].review}</span>
        <span>
          <span style={{ color: "orange" }}>
            {testimonialsData[selected].name}
          </span>
          {""}-{testimonialsData[selected].status}
        </span>
      </div>
      <div className="right-t">
        <div></div>
        <div></div>
        <img src={testimonialsData[selected].image} alt="" />
        <div className="arrows">
          <img src={leftArrow} alt="" onClick={leftArrowClick} />
          <img src={rightArrow} alt=""onClick={rightArrowClick} />
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
