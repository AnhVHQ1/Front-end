import React, { useEffect } from "react";
import ReactStars from "react-rating-stars-component";
import { Link, useLocation } from "react-router-dom";
import { MdOutlineAddShoppingCart } from "react-icons/md";
import { FaRegEye } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { addToWishlist } from "../features/products/productSlice";

// import TrafficLightCard from './TrafficLightCard';
// import MiniTrafficLight from './MiniTrafficLight';

const ProductCard = (props) => {
  const { grid, data } = props;
  const dispatch = useDispatch();
  const dataArray = Array.isArray(data) ? data : Object.values(data);

  let location = useLocation();
  const addWishlist = (id) => {
    dispatch(addToWishlist(id));
  };
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
      {dataArray &&
        dataArray?.map((item, index) => {
          return (
            <div
              key={index}
              className={`${
                location.pathname == "/product" ? `col-${grid}` : "col-3"
              }`}
            >
              <div className="product-card position-relative mb-0 h-100">
                <div className="wishlist-icon position-absolute">
                  <button
                    className="product-button"
                    onClick={(e) => {
                      addWishlist(item?._id);
                    }}
                  >
                    <FaHeart
                      size={"1.5em"}
                      className="product-icon heart-icon text-body"
                    />
                  </button>
                </div>
                <div className="product-image">
                  <img src={item?.images[0]?.url} alt="product image" />
                  {/* <img src={item?.images[1].url} alt="product image" /> */}
                </div>
                <div className="product-details ">
                  <h6 className="brand pt-3">{item?.brand}</h6>
                  <h5 className="product-title">{item?.title}</h5>
                  <ReactStars
                    count={5}
                    size={24}
                    value={parseInt(item?.totalrating)}
                    edit={false}
                    activeColor="#ffd700"
                  />
                  <p
                    className={`desc ${grid === 12 ? "d-block" : "d-none"}`}
                    dangerouslySetInnerHTML={{ __html: item?.description }}
                  ></p>
                  <p className="price">${item?.price}</p>
                  <div className="traffic-light-mini row ">
                    {/* HERE */}
                    <div className="col-2 energy-light d-flex flex-column justify-content-between mini-traffic-light py-3 mx-1">
                      <p className="mini-label text-center text-white">
                        Ener
                        <br />
                        gy
                      </p>
                      <p className="mini-amount text-center text-white">
                        {item?.nutrition.calories} kcal
                      </p>
                      <div className="mini-ri-percentage">
                        <p className="mini-percentage text-center text-dark mb-0 py-2">
                          1%
                        </p>
                      </div>
                    </div>
                    <div
                      style={{
                        backgroundColor: getColor(item?.nutrition.fat, 3, 17.5),
                      }}
                      className="col-2 d-flex flex-column justify-content-between mini-traffic-light py-3 mx-1"
                    >
                      <p className="mini-label text-center text-white">
                        Fat
                        <br />
                        <br />
                      </p>
                      <p className="mini-amount text-center text-white">
                        {item?.nutrition.fat}g
                      </p>
                      <div className="mini-ri-percentage">
                        <p className="mini-percentage text-center text-dark mb-0 py-2">
                          0%
                        </p>
                      </div>
                    </div>
                    <div
                      style={{
                        backgroundColor: getColor(
                          item?.nutrition.saturatedFat,
                          1.5,
                          5
                        ),
                      }}
                      className="col-2 d-flex flex-column justify-content-between mini-traffic-light py-3 mx-1"
                    >
                      <p className="mini-label text-center text-white">
                        Satu
                        <br />
                        rates
                      </p>
                      <p className="mini-amount text-center text-white">
                        {item?.nutrition.saturatedFat}g
                      </p>
                      <div className="mini-ri-percentage">
                        <p className="mini-percentage text-center text-dark mb-0 py-2">
                          0%
                        </p>
                      </div>
                    </div>
                    <div
                      style={{
                        backgroundColor: getColor(
                          item?.nutrition.sugar,
                          5,
                          22.5
                        ),
                      }}
                      className="col-2 d-flex flex-column justify-content-between mini-traffic-light py-3 mx-1"
                    >
                      <p className="mini-label text-center text-white">
                        Sugar
                        <br />
                        <br />
                      </p>
                      <p className="mini-amount text-center text-white">
                        {item?.nutrition.sugar}g
                      </p>
                      <div className="mini-ri-percentage">
                        <p className="mini-percentage text-center text-dark mb-0 py-2">
                          7%
                        </p>
                      </div>
                    </div>
                    <div
                      style={{
                        backgroundColor: getColor(
                          item?.nutrition.salt,
                          0.3,
                          1.5
                        ),
                      }}
                      className="col-2 d-flex flex-column justify-content-between mini-traffic-light py-3 mx-1"
                    >
                      <p className="mini-label text-center text-white ">
                        Salt
                        <br />
                        <br />
                      </p>
                      <p className="mini-amount text-center text-white">
                        {item?.nutrition.salt}g
                      </p>
                      <div className="mini-ri-percentage">
                        <p className="mini-percentage text-center text-dark mb-0 py-2">
                          1%
                        </p>
                      </div>
                    </div>
                    {/* here */}
                  </div>
                </div>
                <div className="action-bar position-absolute gap-15">
                  <div className="d-flex flex-column">
                    <Link>
                      <MdOutlineAddShoppingCart
                        size={"1.5em"}
                        className="text-body mt-0 product-icon"
                      />
                    </Link>
                    <Link to={"/product/" + item?._id}>
                      <FaRegEye
                        size={"1.5em"}
                        className="product-icon text-body mt-3"
                      />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          );
        })}

      {/* <div
        className={`${location.pathname == "/store" ? `col-${grid}` : "col-3"}`}
      >
        <Link to="/product/:id" className="product-card position-relative mb-0">
          <div className="wishlist-icon position-absolute">
            <Link>
              <AiOutlineHeart size={"1.5em"} className="text-body" />
            </Link>
          </div>
          <div className="product-image">
            <img src="/images/product-compare-1.jpg" alt="product image" />
            <img src="/images/product-compare-1(2).jpg" alt="product image" />
          </div>
          <div className="product-details">
            <h6 className="brand">Butter brand</h6>
            <h5 className="product-title">Salted butter 250g</h5>
            <ReactStars
              count={5}
              size={24}
              value="4"
              edit={false}
              activeColor="#ffd700"
            />
            <p className={`desc ${grid === 12 ? "d-block" : "d-none"}`}>
              Indulge in the rich, velvety goodness of Creamy Delight Butter, a
              premium butter experience that elevates every culinary creation.
              Crafted with precision and care, this butter is the epitome of
              dairy perfection, making it a must-have in every kitchen.
            </p>
            <p className="price">$2.00</p>
          </div>
          <div className="action-bar position-absolute gap-15">
            <div className="d-flex flex-column">
              <Link>
                <MdOutlineAddShoppingCart
                  size={"1.5em"}
                  className="text-body"
                />
              </Link>
              <Link>
                <FaRegEye size={"1.5em"} className="text-body" />
              </Link>
            </div>
          </div>
        </Link>
      </div>
      <div
        className={`${location.pathname == "/store" ? `col-${grid}` : "col-3"}`}
      >
        <Link to="/product/:id" className="product-card position-relative mb-0">
          <div className="wishlist-icon position-absolute">
            <Link>
              <AiOutlineHeart size={"1.5em"} className="text-body" />
            </Link>
          </div>
          <div className="product-image">
            <img src="/images/product-compare-1.jpg" alt="product image" />
            <img src="/images/product-compare-1(2).jpg" alt="product image" />
          </div>
          <div className="product-details">
            <h6 className="brand">Butter brand</h6>
            <h5 className="product-title">Salted butter 250g</h5>
            <ReactStars
              count={5}
              size={24}
              value="4"
              edit={false}
              activeColor="#ffd700"
            />
            <p className={`desc ${grid === 12 ? "d-block" : "d-none"}`}>
              Indulge in the rich, velvety goodness of Creamy Delight Butter, a
              premium butter experience that elevates every culinary creation.
              Crafted with precision and care, this butter is the epitome of
              dairy perfection, making it a must-have in every kitchen.
            </p>
            <p className="price">$2.00</p>
          </div>
          <div className="action-bar position-absolute gap-15">
            <div className="d-flex flex-column">
              <Link>
                <MdOutlineAddShoppingCart
                  size={"1.5em"}
                  className="text-body"
                />
              </Link>
              <Link>
                <FaRegEye size={"1.5em"} className="text-body" />
              </Link>
            </div>
          </div>
        </Link>
      </div>
      <div
        className={`${location.pathname == "/store" ? `col-${grid}` : "col-3"}`}
      >
        <Link to="/product/:id" className="product-card position-relative mb-0">
          <div className="wishlist-icon position-absolute">
            <Link>
              <AiOutlineHeart size={"1.5em"} className="text-body" />
            </Link>
          </div>
          <div className="product-image">
            <img src="/images/product-compare-1.jpg" alt="product image" />
            <img src="/images/product-compare-1(2).jpg" alt="product image" />
          </div>
          <div className="product-details">
            <h6 className="brand">Butter brand</h6>
            <h5 className="product-title">Salted butter 250g</h5>
            <ReactStars
              count={5}
              size={24}
              value="4"
              edit={false}
              activeColor="#ffd700"
            />
            <p className={`desc ${grid === 12 ? "d-block" : "d-none"}`}>
              Indulge in the rich, velvety goodness of Creamy Delight Butter, a
              premium butter experience that elevates every culinary creation.
              Crafted with precision and care, this butter is the epitome of
              dairy perfection, making it a must-have in every kitchen.
            </p>
            <p className="price">$2.00</p>
          </div>
          <div className="action-bar position-absolute gap-15">
            <div className="d-flex flex-column">
              <Link>
                <MdOutlineAddShoppingCart
                  size={"1.5em"}
                  className="text-body"
                />
              </Link>
              <Link>
                <FaRegEye size={"1.5em"} className="text-body" />
              </Link>
            </div>
          </div>
        </Link>
      </div> */}
    </>
  );
};

export default ProductCard;
