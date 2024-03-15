import React from "react";

const MiniTrafficLight = (props) => {
  const {data} = props;
  // console.log(data)
  const dataArray = Array.isArray(data) ? data : Object.values(data);
  console.log(dataArray)
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
    <>
      {
      dataArray?.map((data,index) => {
        return (
          <div key={index}>
            <div className="row">
              <div
                style={{
                  backgroundColor: getColor(1, 200, 400), 
                }}
                className="col-2 d-flex flex-column justify-content-between mini-traffic-light py-3 mx-1"
              >
                <p className="mini-label text-center text-white">
                  Calo
                  <br />
                  ries
                </p>
                <p className="mini-amount text-center text-white">
                   kcal
                </p>
                <div className="mini-ri-percentage">
                  <p className="mini-percentage text-center text-dark mb-0 py-2">
                    1%
                  </p>
                </div>
              </div>
              <div
                style={{
                  backgroundColor: getColor(2, 5, 10),
                }}
                className="col-2 d-flex flex-column justify-content-between mini-traffic-light py-3 mx-1"
              >
                <p className="mini-label text-center text-white">
                  Fat
                  <br />
                  <br />
                </p>
                <p className="mini-amount text-center text-white">0g</p>
                <div className="mini-ri-percentage">
                  <p className="mini-percentage text-center text-dark mb-0 py-2">
                    0%
                  </p>
                </div>
              </div>
              <div
                style={{
                  backgroundColor: getColor(5, 2, 4),
                }}
                className="col-2 d-flex flex-column justify-content-between mini-traffic-light py-3 mx-1"
              >
                <p className="mini-label text-center text-white">
                  Satu
                  <br />
                  rates
                </p>
                <p className="mini-amount text-center text-white">0g</p>
                <div className="mini-ri-percentage">
                  <p className="mini-percentage text-center text-dark mb-0 py-2">
                    0%
                  </p>
                </div>
              </div>
              <div
                style={{
                  backgroundColor: getColor(12, 20, 40),
                }}
                className="col-2 d-flex flex-column justify-content-between mini-traffic-light py-3 mx-1"
              >
                <p className="mini-label text-center text-white">
                  Sugar
                  <br />
                  <br />
                </p>
                <p className="mini-amount text-center text-white">6g</p>
                <div className="mini-ri-percentage">
                  <p className="mini-percentage text-center text-dark mb-0 py-2">
                    7%
                  </p>
                </div>
              </div>
              <div
                style={{
                  backgroundColor: getColor(1, 0.3, 0.6),
                }}
                className="col-2 d-flex flex-column justify-content-between mini-traffic-light py-3 mx-1"
              >
                <p className="mini-label text-center text-white ">
                  Salt
                  <br />
                  <br />
                </p>
                <p className="mini-amount text-center text-white">0.08g</p>
                <div className="mini-ri-percentage">
                  <p className="mini-percentage text-center text-dark mb-0 py-2">
                    1%
                  </p>
                </div>
              </div>
            </div>
          </div>
        );
        
      })
    }
    </>
  );
};

export default MiniTrafficLight;
