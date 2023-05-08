import React from "react";
import "../stylesheets/Testimonial.css";

const Testimonial = (props) => {
  return (
    <div className="testimonialContainer">
      <img src={props.alumniData.image} alt="shawn-photo" />
      <div className="testimonialText">
        <h3>{props.alumniData.name}</h3>
        <h4>
          {props.alumniData.charge} at {props.alumniData.company}
        </h4>
        <p>"{props.alumniData.quote}"</p>
      </div>
    </div>
  );
};

export default Testimonial;
