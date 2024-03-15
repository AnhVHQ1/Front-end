import React from "react";

const TrafficLightCard = (props) => {
  const { calories, fat, saturatedFat, sugar, salt } = props;

  const getColor = (value, low, high) => {
    if (value <= low) {
      return "#76b729";
    } else if (value <= high) {
      return "#FFBF00";
    } else {
      return "red";
    }
  };
  return (
    <div className="d-flex w-100 justify-content-between align-self-stretch">
      <div
        style={{ backgroundColor: "white", border: "2px solid black" }}
        className="calories-light light d-flex flex-column align-items-center py-2"
      >
        <h5 className="">Calories</h5>
        <p className="nutrition-amount text-center">{calories} kcal</p>
        <div className="ri-percentage">
          <p
            className="percentage text-center mt-1"
            style={{ backgroundColor: "white", border: "2px solid black" }}
          >
            1%
          </p>
        </div>
      </div>
      <div
        style={{ backgroundColor: getColor(fat, 3, 17.5) }}
        className=" light d-flex flex-column align-items-center py-2"
      >
        <h5 className="">Fat</h5>
        <p className="nutrition-amount text-center">{fat}g</p>
        <div className="ri-percentage">
          <p className="percentage text-center">0%</p>
        </div>
      </div>
      <div
        style={{ backgroundColor: getColor(saturatedFat, 1.5, 5) }}
        className=" light d-flex flex-column align-items-center py-2"
      >
        <h5 className="">Saturates</h5>
        <p className="nutrition-amount text-center">{saturatedFat}g</p>
        <div className="ri-percentage">
          <p className="percentage text-center">0%</p>
        </div>
      </div>
      <div
        style={{ backgroundColor: getColor(sugar, 5, 22.5) }}
        className=" light d-flex flex-column align-items-center py-2"
      >
        <h5 className="">Sugar</h5>
        <p className="nutrition-amount text-center">{sugar}g</p>
        <div className="ri-percentage">
          <p className="percentage text-center">7%</p>
        </div>
      </div>
      <div
        style={{ backgroundColor: getColor(salt, 0.3, 1.5) }}
        className=" light d-flex flex-column align-items-center py-2"
      >
        <h5 className="">Salt</h5>
        <p className="nutrition-amount text-center">{salt}g</p>
        <div className="ri-percentage">
          <p className="percentage text-center">1%</p>
        </div>
      </div>
    </div>
  );
};

export default TrafficLightCard;