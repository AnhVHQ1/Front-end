import React, { useEffect, useState } from "react";
import { NavLink, Link, useNavigate } from "react-router-dom";
import { BsSearch, BsMinecart } from "react-icons/bs";
import { AiOutlineHeart, AiOutlineUser } from "react-icons/ai";
import { BiGitCompare } from "react-icons/bi";
import { MdRestaurantMenu } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { GoChecklist } from "react-icons/go";
import { Typeahead } from "react-bootstrap-typeahead";
import "react-bootstrap-typeahead/css/Typeahead.css";

const Header = () => {
  const dispatch = useDispatch();
  const cartState = useSelector((state) => state?.auth?.cartProducts);
  const userState = useSelector((state) => state?.auth?.user);
  const productState = useSelector((state) => state?.product?.product);
  const [productOpt, setProductOpt] = useState([]);
  const [total, setTotal] = useState(null);
  const [paginate, setPaginate] = useState(true);
  const navigate = useNavigate();
  useEffect(() => {
    let sum = 0;
    for (let index = 0; index < cartState?.length; index++) {
      sum =
        sum +
        Number(cartState[index]?.quantity) *
          Number(cartState[index]?.productId?.price);
    }
    setTotal(sum);
  }, [cartState]);
  useEffect(() => {
    let data = [];
    for (let index = 0; index < productState.length; index++) {
      const element = productState[index];
      data.push({ id: index, prod: element?._id, name: element?.title });
    }
    setProductOpt(data);
  }, [productState]);
  return (
    <>
      <header className="header-top py-2 px-5">
        <div className="container-xxl ">
          <div className="row">
            <div className="col-6">
              <p className=" mb-0">Free shipping over $100 and free return</p>
            </div>
            <div className="col-6">
              <p className="text-end  mb-0">
                Hotline:{" "}
                <a className="" href="tel: 1900 8088">
                  1900 8088
                </a>
              </p>
            </div>
          </div>
        </div>
      </header>
      <header className="header-middle py-3 px-5">
        <div className="container-xxl">
          <div className="row align-items-center">
            <div className="col-2">
              <h2>
                <Link to="/" className="gusteau ">
                  Gusteau
                </Link>
              </h2>
            </div>
            <div className="col-6">
              <div className="input-group">
                {/* <input
                  type="text"
                  className="form-control p-3"
                  placeholder="Search product here"
                  aria-label="Search product "
                  aria-describedby="basic-addon2"
                /> */}
                <Typeahead
                  id="pagination-example"
                  onPaginate={() => console.log("Results paginated")}
                  onChange={(selected) => {
                    if (
                      selected &&
                      selected.length > 0 &&
                      selected[0].hasOwnProperty("prod")
                    ) {
                      const productId = selected[0].prod;
                      const url = "/product/" + productId;
                      navigate(url);
                    }
                  }}
                  options={productOpt}
                  paginate={paginate}
                  labelKey={"name"}
                  placeholder="Search product here..."
                  className="typeahead"
                  minLength={2}
                />
                <span className="input-group-text d-flex " id="basic-addon2">
                  <BsSearch className="search-icon fs-5 w-100" />
                </span>
              </div>
            </div>
            <div className="col-4">
              <div className="menu-links">
                <div className="d-flex align-items-center justify-content-between px-4  gap-15">
                  <NavLink to="/">Home</NavLink>
                  <NavLink to="/product">Our Store</NavLink>
                  <NavLink to="/blogs">Blogs</NavLink>
                  <NavLink to="/contact">Contact</NavLink>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      <header className="header-bottom py-2 px-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-3">
              <div className="drop-down-menu d-flex align-items-center gap-15 h-100">
                <div>
                  <div className="dropdown me-4">
                    <button
                      className="category-hover btn btn-secondary dropdown-toggle d-flex gap-10 align-items-center"
                      type="button"
                      id="dropdownMenuButton1"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      <MdRestaurantMenu
                        size={"1.5em"}
                        className="menu-icon mb-1"
                      />
                      <span className="category-menu">Categories</span>
                    </button>
                    <ul
                      className="dropdown-menu"
                      aria-labelledby="dropdownMenuButton1"
                    >
                      <li>
                        <Link className="dropdown-item " to="">
                          Meat and Poultry
                        </Link>
                      </li>
                      <li>
                        <Link className="dropdown-item " to="">
                          Dairy and Eggs
                        </Link>
                      </li>
                      <li>
                        <Link className="dropdown-item " to="">
                          Grains and Cereals
                        </Link>
                      </li>
                      <li>
                        <Link className="dropdown-item " to="">
                          Fruits and Vegetables
                        </Link>
                      </li>
                      <li>
                        <Link className="dropdown-item " to="">
                          Sweets and Desserts
                        </Link>
                      </li>
                      <li>
                        <Link className="dropdown-item " to="">
                          Drinks
                        </Link>
                      </li>
                      <li>
                        <Link className="dropdown-item " to="">
                          Canned and Baked Food
                        </Link>
                      </li>
                      <li>
                        <Link className="dropdown-item " to="">
                          Cooking Oils
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-9">
              <div className="header-middle-links d-flex align-items-center justify-content-between">
                <div>
                  <Link
                    to="/compare-product"
                    className="d-flex align-items-center gap-10 "
                  >
                    <BiGitCompare size={"2em"} />
                    <p className="mb-0 ">
                      Compare
                      <br />
                      Product
                    </p>
                  </Link>
                </div>
                <div>
                  <Link
                    to="/wishlist"
                    className="d-flex align-items-center gap-10 "
                  >
                    <AiOutlineHeart size={"2em"} />
                    <p className="mb-0 ">
                      Favourite
                      <br />
                      Wishlist
                    </p>
                  </Link>
                </div>
                <div>
                  <Link
                    to="/login"
                    className="d-flex align-items-center gap-10 "
                  >
                    <AiOutlineUser size={"2em"} />
                    <p className="mb-0">
                      {userState ? "Hi " + userState.firstname : "Log In"}{" "}
                      <br />
                      My Account
                    </p>
                  </Link>
                </div>
                <div>
                  <Link
                    to="/cart"
                    className="d-flex align-items-center gap-10 "
                  >
                    <BsMinecart size={"2em"} />
                    <div className="d-flex flex-column gap-10">
                      <span className="badge bg-white">
                        {cartState?.length ? cartState?.length : 0}
                      </span>
                      <p className="mb-0 ">${total ? total : 0}</p>
                    </div>
                  </Link>
                </div>
                <div>
                  <Link
                    to="/my-orders"
                    className="d-flex align-items-center gap-10 "
                  >
                    <GoChecklist size={"2em"} />
                    <p className="mb-0 ">
                      Order
                      <br />
                      History
                    </p>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
