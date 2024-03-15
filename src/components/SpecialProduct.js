import React from "react";
import ReactStars from "react-rating-stars-component";
import { Link } from "react-router-dom";

const SpecialProduct = (props) => {
  const { title, brand, totalrating, price, sold, quantity, image } = props;
  return (
    <div className="col-4">
      <div className="special-product-card d-flex flex-column">
        <div className="d-flex justify-content-between ">
          <div>
            <img src={image} alt="" />
          </div>
          <div className="special-product-content">
            <h5 className="brand">{brand}</h5>
            <h6 className="title">{title}</h6>
            <ReactStars
              count={5}
              size={24}
              value={totalrating}
              edit={false}
              activeColor="#ffd700"
            />
            <p className="price">
              <span className="red-p">${price}</span>
              {/* &nbsp; <strike>$17</strike> */}
            </p>
          </div>
        </div>
        <div className="time-count px-3">
          <div className="discount-til d-flex align-items-center gap-10">
            <p className="mb-0">
              <b>2 days</b>
            </p>
            <div className="d-flex align-items-center ">
              <span className="badge rounded-circle p-2 m-2">12</span>:
              <span className="badge rounded-circle p-2 m-2">30</span>:
              <span className="badge rounded-circle p-2 m-2">00</span>
            </div>
          </div>
          <div className="product-count">
            <p>Products: {quantity}</p>
            <div className="progress">
              <div
                className="progress-bar"
                role="progressbar"
                style={{ width: quantity/(quantity + sold) * 100 +"%" }}
                aria-valuenow={quantity}
                aria-valuemin={0}
                aria-valuemax={sold + quantity}
              ></div>
            </div>
          </div>
          <Link className="button fs-5 py-3 px-4 mt-4 center-block">
            Add To Cart
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SpecialProduct;
