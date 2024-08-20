import React from "react";
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import { CiGrid2H, CiGrid2V } from "react-icons/ci";
import { BiGridHorizontal } from "react-icons/bi";
import { useState } from "react";
import ProductCard from "../components/ProductCard";
import {
  getAllProducts,
  getCategory,
  searchForProduct,
} from "../features/products/productSlice";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";
import { Link, useLocation, useNavigate, useParams } from "react-router-dom";
import { PiCursorClick } from "react-icons/pi";
import { MdChevronRight } from "react-icons/md";

//Nutrition filter
const marks = {
  0: "All",
  33.33: "Low",
  66.66: "Medium",
  100: "High",
};

const OurStore = () => {
  const [grid, setGrid] = useState(4);
  const categoryState = useSelector((state) => state?.product?.category);
  const productState = useSelector((state) => state?.product?.product);
  const searchProductsState = useSelector(
    (state) => state.product.search || []
  );
  // const [categoryList, setCategoryList] = useState([]);
  const [category, setCategory] = useState(null);
  const dispatch = useDispatch();
  const { key } = useParams();
  const [minPrice, setMinPrice] = useState(null);
  const [maxPrice, setMaxPrice] = useState(null);
  const [sort, setSort] = useState(null);
  const navigate = useNavigate();
  const location = useLocation();
  //category
  useEffect(() => {
    dispatch(getCategory());
  }, []);

  

  //all products
  const getProducts = (
    sort,
    category,
    minPrice,
    maxPrice,
    minFat,
    maxFat,
    minSaturates,
    maxSaturates,
    minSugar,
    maxSugar,
    minSalt,
    maxSalt
  ) => {
    dispatch(
      getAllProducts({
        sort,
        category,
        minPrice,
        maxPrice,
        minFat,
        maxFat,
        minSaturates,
        maxSaturates,
        minSugar,
        maxSugar,
        minSalt,
        maxSalt,
      })
    );
  };
  //Handle data from header
  //if there "category" value on header => "categoryData", else "getProducts"
  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const categoryData = params.get("category");

    if (categoryData) {
      setCategory(categoryData);
      dispatch(getAllProducts({ category: categoryData }));
    } else {
      getProducts();
    }
  }, [location.search]);

  //change URL when using category filter
  const handleCategoryClick = (categoryName) => {
    navigate(`/product?category=${categoryName}`);
  };

  //handle search
  useEffect(() => {
    searchProducts(key);
  }, [key]);
  const searchProducts = (key) => {
    dispatch(searchForProduct({ key }));
  };

  const renderProducts = key ? searchProductsState : productState;

  //Nutrition filter
  const [fatvalue, setFatValue] = useState(0);
  const [saturatesvalue, setSaturatesValue] = useState(0);
  const [sugarvalue, setSugarValue] = useState(0);
  const [saltvalue, setSaltValue] = useState(0);
  const [minFat, setMinFat] = useState(0);
  const [maxFat, setMaxFat] = useState(10000);
  const [minSaturates, setMinSaturates] = useState(0);
  const [maxSaturates, setMaxSaturates] = useState(10000);
  const [minSugar, setMinSugar] = useState(0);
  const [maxSugar, setMaxSugar] = useState(10000);
  const [minSalt, setMinSalt] = useState(0);
  const [maxSalt, setMaxSalt] = useState(10000);

  const handleChangeFatValue = (value) => {
    let newMinFat, newMaxFat;

    switch (value) {
      case 0:
        newMinFat = 0;
        newMaxFat = 10000;
        break;
      case 33.33:
        newMinFat = 0;
        newMaxFat = 3;
        break;
      case 66.66:
        newMinFat = 3;
        newMaxFat = 17.5;
        break;
      case 100:
        newMinFat = 17.5;
        newMaxFat = 10000;
        break;
      default:
        newMinFat = 0;
        newMaxFat = 10000;
        break;
    }

    if (newMinFat !== minFat || newMaxFat !== maxFat) {
      setMinFat(newMinFat);
      setMaxFat(newMaxFat);
      setFatValue(value);
      dispatch(
        getAllProducts({
          sort,
          category,
          minPrice,
          maxPrice,
          minFat: newMinFat,
          maxFat: newMaxFat,
          minSaturates,
          maxSaturates,
          minSugar,
          maxSugar,
          minSalt,
          maxSalt,
        })
      );
    }
  };
  const handleChangeSaturatesValue = (value) => {
    let newMinSaturates, newMaxSaturates;

    switch (value) {
      case 0:
        newMinSaturates = 0;
        newMaxSaturates = 10000;
        break;
      case 33.33:
        newMinSaturates = 0;
        newMaxSaturates = 1.5;
        break;
      case 66.66:
        newMinSaturates = 1.5;
        newMaxSaturates = 5;
        break;
      case 100:
        newMinSaturates = 5;
        newMaxSaturates = 10000;
        break;
      default:
        newMinSaturates = 0;
        newMaxSaturates = 10000;
        break;
    }

    if (newMinSaturates !== minSaturates || newMaxSaturates !== maxSaturates) {
      setMinSaturates(newMinSaturates);
      setMaxSaturates(newMaxSaturates);
      setSaturatesValue(value);
      dispatch(
        getAllProducts({
          sort,
          category,
          minPrice,
          maxPrice,
          minFat,
          maxFat,
          minSaturates: newMinSaturates,
          maxSaturates: newMaxSaturates,
          minSugar,
          maxSugar,
          minSalt,
          maxSalt,
        })
      );
    }
  };
  const handleChangeSugarValue = (value) => {
    let newMinSugar, newMaxSugar;

    switch (value) {
      case 0:
        newMinSugar = 0;
        newMaxSugar = 10000;
        break;
      case 33.33:
        newMinSugar = 0;
        newMaxSugar = 5;
        break;
      case 66.66:
        newMinSugar = 5;
        newMaxSugar = 22.5;
        break;
      case 100:
        newMinSugar = 22.5;
        newMaxSugar = 10000;
        break;
      default:
        newMinSugar = 0;
        newMaxSugar = 10000;
        break;
    }

    if (newMinSugar !== minSugar || newMaxSugar !== maxSugar) {
      setMinSugar(newMinSugar);
      setMaxSugar(newMaxSugar);
      setSugarValue(value);
      dispatch(
        getAllProducts({
          sort,
          category,
          minPrice,
          maxPrice,
          minFat,
          maxFat,
          minSaturates,
          maxSaturates,
          minSugar: newMinSugar,
          maxSugar: newMaxSugar,
          minSalt,
          maxSalt,
        })
      );
    }
  };
  const handleChangeSaltValue = (value) => {
    let newMinSalt, newMaxSalt;

    switch (value) {
      case 0:
        newMinSalt = 0;
        newMaxSalt = 10000;
        break;
      case 33.33:
        newMinSalt = 0;
        newMaxSalt = 0.3;
        break;
      case 66.66:
        newMinSalt = 0.3;
        newMaxSalt = 1.5;
        break;
      case 100:
        newMinSalt = 1.5;
        newMaxSalt = 10000;
        break;
      default:
        newMinSalt = 0;
        newMaxSalt = 10000;
        break;
    }

    if (newMinSalt !== minSalt || newMaxSalt !== maxSalt) {
      setMinSalt(newMinSalt);
      setMaxSalt(newMaxSalt);
      setSaltValue(value);
      dispatch(
        getAllProducts({
          sort,
          category,
          minPrice,
          maxPrice,
          minFat,
          maxFat,
          minSaturates,
          maxSaturates,
          minSugar,
          maxSugar,
          minSalt: newMinSalt,
          maxSalt: newMaxSalt,
        })
      );
    }
  };
  return (
    <>
      <Meta title={"Our Store"} />
      <BreadCrumb title="Our Store" />
      <div className="store-wrapper py-5 home-wrapper-2">
        <div className="container-xxl">
          <div className="row">
            {!key ? (
              <div className="col-3">
                <div className="filter-card mb-3">
                  <h3 className="filter-title">SHOP BY CATEGORIES</h3>
                  <div>
                    <ul className="ps-0">
                      <li
                        onClick={() => {
                          setCategory(null); // Set category to null for "All Categories"
                          dispatch(
                            getAllProducts({
                              sort,
                              category: null, // Pass null for "All Categories"
                              minPrice,
                              maxPrice,
                              minFat,
                              maxFat,
                              minSaturates,
                              maxSaturates,
                              minSugar,
                              maxSugar,
                              minSalt,
                              maxSalt,
                            })
                          );
                        }}
                        style={{
                          fontWeight: category === null ? "bold" : "normal",
                        }}
                      >
                        {category === null ? (
                          <MdChevronRight size={"1.5em"} className="me-2" />
                        ) : (
                          ""
                        )}
                        All Categories
                      </li>
                      {categoryState &&
                        categoryState.map((item, index) => {
                          return (
                            <li
                              onClick={() => {
                                handleCategoryClick(item.title);
                                setCategory(item.title);
                                dispatch(
                                  getAllProducts({
                                    sort,
                                    category: item.title,
                                    minPrice,
                                    maxPrice,
                                    minFat,
                                    maxFat,
                                    minSaturates,
                                    maxSaturates,
                                    minSugar,
                                    maxSugar,
                                    minSalt,
                                    maxSalt,
                                  })
                                );
                              }}
                              key={index}
                              style={{
                                fontWeight:
                                  category === item.title ? "bold" : "normal",
                              }}
                            >
                              {category === item.title ? (
                                <MdChevronRight
                                  size={"1.5em"}
                                  className="me-1"
                                />
                              ) : (
                                ""
                              )}
                              {item.title}
                            </li>
                          );
                        })}
                    </ul>
                  </div>
                </div>
                <div className="filter-card mb-3">
                  <h3 className="filter-title mb-4 ">FILTER BY</h3>
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
                            onChange={(e) => {
                              setMinPrice(e.target.value);
                              dispatch(
                                getAllProducts({
                                  sort,
                                  category,
                                  minPrice: e.target.value,
                                  maxPrice,
                                  minFat,
                                  maxFat,
                                  minSaturates,
                                  maxSaturates,
                                  minSugar,
                                  maxSugar,
                                  minSalt,
                                  maxSalt,
                                })
                              );
                            }}
                          />
                          <label for="floatingInputValue">From ($)</label>
                        </form>
                        <form class="form-floating">
                          <input
                            type="number"
                            className="form-control"
                            id="floatingInputValue"
                            placeholder=""
                            onChange={(e) => {
                              setMaxPrice(e.target.value);
                              dispatch(
                                getAllProducts({
                                  sort,
                                  category,
                                  minPrice,
                                  maxPrice: e.target.value,
                                  minFat,
                                  maxFat,
                                  minSaturates,
                                  maxSaturates,
                                  minSugar,
                                  maxSugar,
                                  minSalt,
                                  maxSalt,
                                })
                              );
                            }}
                          />
                          <label for="floatingInputValue">To ($)</label>
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
                            <div className="px-2 mb-5 me-3">
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
                            <div className="px-2 mb-5 me-3">
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
                            <div className="px-2 mb-5 me-3">
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
                            <div className="px-2 mb-5 me-3">
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
                {/* <div className="filter-card mb-3">
                  <h3 className="filter-title">YOU MAY ALSO LIKE</h3>
                  <div>
                    <div className="random-products d-flex">
                      <div className="w-50">
                        <img
                          src="/images/egg.jpg"
                          className="img-fluid"
                          alt=""
                        />
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
                </div> */}
              </div>
            ) : (
              <div></div>
            )}

            <div
              className={
                location.pathname.includes("search") ? "col-12" : "col-9"
              }
            >
              {!key ? (
                <div className="filter-sort-grid mb-3">
                  <div className="d-flex justify-content-between align-items-center">
                    <div className="d-flex align-items-center gap-10">
                      <p className="mb-0" style={{ width: "85px" }}>
                        SORT BY:
                      </p>
                      <select
                        onChange={(e) => {
                          setSort(e.target.value);
                          if (key) {
                            dispatch(
                              searchForProduct({
                                key,
                                sort: e.target.value,
                                category,
                                minPrice,
                                maxPrice,
                              })
                            );
                          } else {
                            dispatch(
                              getAllProducts({
                                sort: e.target.value,
                                category,
                                minPrice,
                                maxPrice,
                              })
                            );
                          }
                        }}
                        className="form-control form-select "
                        name=""
                        id=""
                      >
                        <option value="title">Alphabetically, A to Z</option>
                        <option value="-title">Alphabetically, Z to A</option>
                        <option value="price">Price, Lowest to Highest</option>
                        <option value="-price">Price, Highest to Lowest</option>
                      </select>
                    </div>
                    <div className="d-flex align-items-center gap-10">
                      {/* <p className="total-products mb-0">21 products</p> */}
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
              ) : (
                <div>
                  <p className="showing-result text-center">
                    Showing results for: "{key}"
                  </p>
                </div>
              )}

              <div className="product-list pb-5">
                <div className="d-flex gap-10 flex-wrap">
                  <ProductCard
                    data={renderProducts ? renderProducts : []}
                    grid={grid}
                    key={key ? key : []}
                  />
                </div>
              </div>
              {!key ? (
                <div></div>
              ) : (
                <div className="w-100 text-center">
                  <button
                    onClick={() => {
                      navigate("/product");
                      window.scrollTo(0, 0);
                    }}
                    className="button"
                  >
                    <PiCursorClick size={"1.5em"} className="me-3 mt-0" />
                    Explore more in our store
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default OurStore;
