import React, { useState } from "react";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";

const marks = {
  0: "All",
  33.33: "Low",
  66.66: "Medium",
  100: "High",
};

const Scale = () => {
  const [value, setValue] = useState(0);

  const handleChange = (newValue) => {
    setValue(newValue);
    // Perform any other actions based on the selected value
  };

  return (
    <>
      <div>
        <Slider
          min={0}
          max={100}
          step={null}
          marks={marks}
          value={value}
          onChange={handleChange}
        />
        <p>Selected: {marks[value]}</p>
      </div>
    </>
  );
};

export default Scale;
