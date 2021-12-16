import React, { useEffect, useState } from "react";
import { Slides } from "../../js";

const Slide = () => {
  const [values,setValues] = useState({
    name : 'manhducvu',
    address : "thaibinh"
  })
  useEffect(()=>{
    Slides() // su kien click
  },[])
  return (
    <>
      {/* <div className="slide"id={`${values.name ? values.name : "noData"}`}> */}
      <div className="slide"id='slides'>
        <h1>
          Let's Write Something <br />
          About Your Store!{" "}
        </h1>
        <p>
          Use overlay text to give your customers insight into your brand.{" "}
          <br /> Select imagery and text that relates to your style and story.
        </p>
        <button>EXPLORE NOW</button>
      </div>
    </>
  );
};

export default Slide;
