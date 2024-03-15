import React from "react";
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import { CiGrid2H, CiGrid2V } from "react-icons/ci";
import { BiGridHorizontal } from "react-icons/bi";
import { useState } from "react";
import ProductCard from "../components/ProductCard";
import { getAllProducts } from "../features/products/productSlice";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";

//Nutrition filter
const marks = {
  0: "All",
  33.33: "Low",
  66.66: "Medium",
  100: "High",
};

const OurStore = () => {
  const [grid, setGrid] = useState(4);
  const productState = useSelector((state) => state.product.product);
  const [brands, setBrands] = useState([]);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    let newBrands = [];
    let category = [];
    for (let index = 0; index < productState.length; index++) {
      const element = productState[index];
      newBrands.push(element.brand);
      category.push(element.category);
    }
    setBrands(newBrands);
    setCategories(category);
  }, [productState]);
  console.log([...new Set(brands)], [...new Set(categories)]);
  const dispatch = useDispatch();
  useEffect(() => {
    getProducts();
  }, []);
  const getProducts = () => {
    dispatch(getAllProducts());
  };

  //Nutrition filter
  const [fatvalue, setFatValue] = useState(0);
  const [saturatesvalue, setSaturatesValue] = useState(0);
  const [sugarvalue, setSugarValue] = useState(0);
  const [saltvalue, setSaltValue] = useState(0);

  const handleChangeFatValue = (newValue) => {
    handleNutritionChange();
    setFatValue(newValue);
  };
  const handleChangeSaturatesValue = (newValue) => {
    handleNutritionChange();
    setSaturatesValue(newValue);
  };
  const handleChangeSugarValue = (newValue) => {
    handleNutritionChange();
    setSugarValue(newValue);
  };
  const handleChangeSaltValue = (newValue) => {
    handleNutritionChange();
    setSaltValue(newValue);
  };
  const handleNutritionChange = () => {
    // Alert the values of all four scales
    alert(
      `Fat: ${fatvalue}, Saturated Fat: ${saturatesvalue}, Sugar: ${sugarvalue}, Salt: ${saltvalue}`
    );
  };
  return (
    <>
      <Meta title={"Our Store"} />
      <BreadCrumb title="Our Store" />
      <div className="store-wrapper py-5 home-wrapper-2">
        <div className="container-xxl">
          <div className="row">
            <div className="col-3">
              <div className="filter-card mb-3">
                <h3 className="filter-title">SHOP BY CATEGORIES</h3>
                <div>
                  <ul className="ps-0">
                    {categories &&
                      [...new Set(categories)].map((item, index) => {
                        return <li key={index}>{item}</li>;
                      })}
                  </ul>
                </div>
              </div>
              <div className="filter-card mb-3">
                <h3 className="filter-title mb-4">FILTER BY</h3>
                <div>
                  <div className="mb-4">
                    <h5 className="sub-title">Price</h5>
                    <div className="d-flex align-items-center gap-10">
                      <form class="form-floating">
                        <input
                          type="number"
                          className="form-control"
                          id="floatingInputValue"
                          placeholder=""
                          value=""
                        />
                        <label for="floatingInputValue">From</label>
                      </form>
                      <form class="form-floating">
                        <input
                          type="number"
                          className="form-control"
                          id="floatingInputValue"
                          placeholder=""
                          value=""
                        />
                        <label for="floatingInputValue">To</label>
                      </form>
                    </div>
                  </div>
                  <div className="mb-4">
                    <h5 className="sub-title">Traffic Light</h5>
                    <div className="fat-scale">
                      <ul className="p-0">
                        <li>
                          <p
                            className="p-0 m-0"
                            style={{ color: "gray", fontWeight: "500" }}
                          >
                            Fat
                          </p>
                          <div className="px-2 mb-5">
                            <Slider
                              min={0}
                              max={100}
                              step={null}
                              marks={marks}
                              value={fatvalue}
                              onChange={handleChangeFatValue}
                            />
                          </div>
                        </li>
                        <li>
                          <p
                            className="p-0 m-0"
                            style={{ color: "gray", fontWeight: "500" }}
                          >
                            Saturated Fat
                          </p>
                          <div className="px-2 mb-5">
                            <Slider
                              min={0}
                              max={100}
                              step={null}
                              marks={marks}
                              value={saturatesvalue}
                              onChange={handleChangeSaturatesValue}
                            />
                          </div>
                        </li>
                        <li>
                          <p
                            className="p-0 m-0"
                            style={{ color: "gray", fontWeight: "500" }}
                          >
                            Sugar
                          </p>
                          <div className="px-2 mb-5">
                            <Slider
                              min={0}
                              max={100}
                              step={null}
                              marks={marks}
                              value={sugarvalue}
                              onChange={handleChangeSugarValue}
                            />
                          </div>
                        </li>
                        <li>
                          <p
                            className="p-0 m-0"
                            style={{ color: "gray", fontWeight: "500" }}
                          >
                            Salt
                          </p>
                          <div className="px-2 mb-5">
                            <Slider
                              min={0}
                              max={100}
                              step={null}
                              marks={marks}
                              value={saltvalue}
                              onChange={handleChangeSaltValue}
                            />
                          </div>
                        </li>
                      </ul>
                    </div>

                    {/* <div className="form-check">
                      <input
                        type="checkbox"
                        className="form-check-input"
                        value=""
                        id=""
                        checked
                      />
                      <label htmlFor="" className="form-check-label">
                        No red light
                      </label>
                    </div>
                    <div className="form-check">
                      <input
                        type="checkbox"
                        className="form-check-input"
                        value=""
                        id=""
                      />
                      <label htmlFor="" className="form-check-label">
                        No amber light
                      </label>
                    </div>
                    <div className="form-check">
                      <input
                        type="checkbox"
                        className="form-check-input"
                        value=""
                        id=""
                      />
                      <label htmlFor="" className="form-check-label">
                        No green light
                      </label>
                    </div> */}
                  </div>
                </div>
              </div>
              <div className="filter-card mb-3">
                <h3 className="filter-title">YOU MAY ALSO LIKE</h3>
                <div>
                  <div className="random-products d-flex">
                    <div className="w-50">
                      <img src="/images/egg.jpg" className="img-fluid" alt="" />
                    </div>
                    <div className="w-50">
                      <h6 className="brand">SunnySide Farms</h6>
                      <h5 className="product-name">
                        Farm-Fresh Free-Range Eggs
                      </h5>
                      <p className="price">$3.99 per dozen</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-9">
              <div className="filter-sort-grid mb-3">
                <div className="d-flex justify-content-between align-items-center">
                  <div className="d-flex align-items-center gap-10">
                    <p className="mb-0" style={{ width: "85px" }}>
                      SORT BY:
                    </p>
                    <select className="form-control form-select " name="" id="">
                      <option value="best-selling" selected="selected">
                        Best Selling
                      </option>
                      <option value="title-ascending">
                        Alphabetically, A to Z
                      </option>
                      <option value="title-descending">
                        Alphabetically, Z to A
                      </option>
                      <option value="price-ascending">
                        Price, Lowest to Highest
                      </option>
                      <option value="price-descending">
                        Price, Highest to Lowest
                      </option>
                    </select>
                  </div>
                  <div className="d-flex align-items-center gap-10">
                    <p className="total-products mb-0">21 products</p>
                    <div className="d-flex gap-10 align-items-center">
                      <BiGridHorizontal
                        onClick={() => {
                          setGrid(4);
                        }}
                        className="grid text-white"
                      />
                      <CiGrid2V
                        onClick={() => {
                          setGrid(6);
                        }}
                        className="grid text-white"
                      />
                      <CiGrid2H
                        onClick={() => {
                          setGrid(12);
                        }}
                        className="grid text-white"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="product-list pb-5">
                <div className="d-flex gap-10 flex-wrap">
                  <ProductCard
                    data={productState ? productState : []}
                    grid={grid}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OurStore;
