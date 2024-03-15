import React from "react";
import { Link } from "react-router-dom";
import { LiaShippingFastSolid } from "react-icons/lia";
import { BiTime } from "react-icons/bi";
import { MdOutlineSupportAgent, MdOutlinePayment } from "react-icons/md";
import { IoPricetagOutline } from "react-icons/io5";
import Marquee from "react-fast-marquee";
import BlogCard from "../components/BlogCard";
import ProductCard from "../components/ProductCard";
import SpecialProduct from "../components/SpecialProduct";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import moment from "moment";
import { getAllBlogs } from "../features/blogs/blogSlice";
import { getAllProducts } from "../features/products/productSlice";

const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const blogState = useSelector((state) => state?.blog?.blog);
  const productState = useSelector((state) => state?.product?.product);
  const productItem = productState.slice(0, 4);
  console.log(productItem);
  const dispatch = useDispatch();
  useEffect(() => {
    getBlogs();
    getProducts();
  }, []);
  const getBlogs = () => {
    dispatch(getAllBlogs());
  };
  const getProducts = () => {
    dispatch(getAllProducts());
  };

  return (
    <>
      <section className="home-wrapper-1">
        <div className="container-xxl row">
          {/* <div className="col-6">
            <div className="main-banner p-3 position-relative">
              <img
                src="/images/banner 1.jpg"
                className="img-fluid rounded-3 "
                alt="main banner"
              />
              <div className="main-banner-content py-4 position-absolute">
                <h6>This winter only</h6>
                <h2>MEALS AND PARTY</h2>
                <h5>Save on party food, treats, and drink must have</h5>
                <Link className="button">BUY NOW</Link>
              </div>
            </div>
          </div>
          <div className="col-6">
            <div className="d-flex flex-wrap gap-10 justify-content-between align-items-center">
              <div className="side-banner py-3 px-2 d-flex position-relative">
                <img
                  src="/images/banner 2.jpg"
                  className="img-fluid rounded-3"
                  alt="side banner"
                />
                <div className="side-banner-content py-4 position-absolute">
                  <h6>15% OFF</h6>
                  <h4>FRIES</h4>
                  <p>Available Only For Limited Time</p>
                </div>
              </div>
              <div className="side-banner py-3 px-2 d-flex position-relative">
                <img
                  src="/images/banner 3.jpg"
                  className="img-fluid rounded-3"
                  alt="side banner"
                />
                <div className="side-banner-content py-4 position-absolute">
                  <h6>Nice To Meat You</h6>
                  <h4>RAW MEAT</h4>
                  <p>Order Fresh & Quality Meat NOW</p>
                </div>
              </div>
              <div className="side-banner py-3 px-2 d-flex position-relative">
                <img
                  src="/images/banner 4.jpg"
                  className="img-fluid rounded-3"
                  alt="side banner"
                />
                <div className="side-banner-content py-4 position-absolute">
                  <h6>Too Good To Waste</h6>
                  <h4>VEGGIES</h4>
                  <p>Eat Your Veggies</p>
                </div>
              </div>
              <div className="side-banner py-3 px-2 d-flex position-relative">
                <img
                  src="/images/banner 5.jpg"
                  className="img-fluid rounded-3"
                  alt="side banner"
                />
                <div className="side-banner-content py-4 position-absolute">
                  <h6>New Available</h6>
                  <h4>HOMEMADE NUT-MILK</h4>
                  <p>Tap To Pour</p>
                </div>
              </div>
            </div>
          </div> */}
          {/* Here */}
          <div
            id="carouselExampleCaptions"
            class="carousel slide my-3"
            data-bs-ride="carousel"
          >
            <div class="carousel-indicators">
              <button
                type="button"
                data-bs-target="#carouselExampleCaptions"
                data-bs-slide-to="0"
                class="active"
                aria-current="true"
                aria-label="Slide 1"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselExampleCaptions"
                data-bs-slide-to="1"
                aria-label="Slide 2"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselExampleCaptions"
                data-bs-slide-to="2"
                aria-label="Slide 3"
              ></button>
            </div>
            <div class="carousel-inner">
              <div class="carousel-item active">
                <img
                  src="/images/banner 1.jpg"
                  class="d-block w-100"
                  alt="..."
                />
                <div class="carousel-caption top-0 ">
                  <p className="tag">This winter only</p>
                  <div className="title-grp">
                    <p className="title">MEALS AND PARTY</p>
                    <p className="desc">
                      Save on party food, treats, and drink must have
                    </p>
                  </div>
                  <button className="button">BUY NOW</button>
                </div>
              </div>
              <div class="carousel-item">
                <img
                  src="/images/banner 2.jpg"
                  class="d-block w-100"
                  alt="..."
                />
                <div class="carousel-caption top-0 ">
                  <p className="tag">Limited Time Offer</p>
                  <div className="title-grp">
                    <p className="title">Weekly Specials</p>
                    <p className="desc">
                      Explore our exclusive weekly specials. Unbeatable prices
                      for a limited time only!
                    </p>
                  </div>
                  <button className="button">Discover Now</button>
                </div>
              </div>
              <div class="carousel-item">
                <img
                  src="/images/banner 3.jpg"
                  class="d-block w-100"
                  alt="..."
                />
                <div class="carousel-caption top-0 ">
                  <p className="tag">New Arrivals</p>
                  <div className="title-grp">
                    <p className="title">Fresh and Flavorful</p>
                    <p className="desc">
                      Introducing our latest menu additions. Discover fresh and
                      flavorful options for every craving.
                    </p>
                  </div>
                  <button className="button">See Menu</button>
                </div>
              </div>
            </div>
            <button
              class="carousel-control-prev"
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide="prev"
            >
              <span
                class="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span class="visually-hidden">Previous</span>
            </button>
            <button
              class="carousel-control-next"
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide="next"
            >
              <span
                class="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span class="visually-hidden">Next</span>
            </button>
          </div>
        </div>
      </section>
      <section className="home-wrapper-2 py-5 ">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12 ">
              <div className="services ">
                <Marquee className="service-inner-wrapper d-flex ">
                  <div className="service-element d-flex align-items-center gap-15">
                    <LiaShippingFastSolid className="fs-2" />
                    <div>
                      <h6>Free Shipping</h6>
                      <p className="mb-0">From all order over $100</p>
                    </div>
                  </div>
                  <div className="service-element d-flex align-items-center gap-15">
                    <BiTime className="fs-2" />
                    <div>
                      <h6>Daily Service Offers</h6>
                      <p className="mb-0">Save upto 25% off</p>
                    </div>
                  </div>
                  <div className="service-element d-flex align-items-center gap-15">
                    <MdOutlineSupportAgent className="fs-2" />
                    <div>
                      <h6>Support 24/7</h6>
                      <p className="mb-0">Shop with an expert</p>
                    </div>
                  </div>
                  <div className="service-element d-flex align-items-center gap-15">
                    <IoPricetagOutline className="fs-2" />
                    <div>
                      <h6>Affordabel Prices</h6>
                      <p className="mb-0">Get factory default price</p>
                    </div>
                  </div>
                  <div className="service-element d-flex align-items-center gap-15">
                    <MdOutlinePayment className="fs-2" />
                    <div>
                      <h6>Secure Payments</h6>
                      <p className="mb-0">100% protected</p>
                    </div>
                  </div>
                </Marquee>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="home-wrapper-2">
        <div className="container-xxl">
          <div className="row">
            <div className="categories d-flex justify-content-between align-items-center flex-wrap m-0">
              <div className="d-flex align-items-center justify-content-between">
                <div>
                  <h6>Raw Meat</h6>
                  <p>10 items</p>
                </div>
                <img src="/images/raw-meat.jpg" alt="" />
              </div>
              <div className="d-flex align-items-center justify-content-between">
                <div>
                  <h6>Vegetables</h6>
                  <p>10 items</p>
                </div>
                <img src="/images/veggies.jpg" alt="" />
              </div>
              <div className="d-flex align-items-center justify-content-between">
                <div>
                  <h6>Bakery</h6>
                  <p>10 items</p>
                </div>
                <img src="/images/bakery.jpg" alt="" />
              </div>
              <div className="d-flex align-items-center justify-content-between">
                <div>
                  <h6>Dairy and Eggs</h6>
                  <p>10 items</p>
                </div>
                <img src="/images/egg.jpg" alt="" />
              </div>
              <div className="d-flex align-items-center justify-content-between">
                <div>
                  <h6>Treat and Snack</h6>
                  <p>10 items</p>
                </div>
                <img src="/images/snack.jpg" alt="" />
              </div>
              <div className="d-flex align-items-center justify-content-between">
                <div>
                  <h6>Frozen</h6>
                  <p>10 items</p>
                </div>
                <img src="/images/frozen.jpg" alt="" />
              </div>
              <div className="d-flex align-items-center justify-content-between">
                <div>
                  <h6>Drinks</h6>
                  <p>10 items</p>
                </div>
                <img src="/images/drink.jpg" alt="" />
              </div>
              <div className="d-flex align-items-center justify-content-between">
                <div>
                  <h6>Fresh Fruit</h6>
                  <p>10 items</p>
                </div>
                <img src="/images/fruit.jpg" alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="product-wrapper py-5 home-wrapper-2 px-4">
        <div className="container-xxl">
          <div className="col-12">
            <h3 className="section-heading">Products</h3>
          </div>
          <div className="row">
            <ProductCard data={productItem} />
          </div>
        </div>
      </section>
      <section className="special-product py-5 home-wrapper-2 px-4">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <div className="section-heading">Featured Deals</div>
            </div>
          </div>
          <div className="row">
            {productState &&
              productState?.map((item, index) => {
                if (item.tag === "featured") {
                  return (
                    <SpecialProduct
                      key={index}
                      image={item?.images[0]?.url}
                      title={item?.title}
                      brand={item?.brand}
                      totalrating={item?.totalrating.toString()}
                      price={item?.price}
                      sold={item?.sold}
                      quantity={item?.quantity}
                    />
                  );
                }
              })}
          </div>
        </div>
      </section>
      <section className="marquee py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <div className="marquee-inner-wrapper card-wrapper">
                <Marquee className="marquee d-flex ">
                  <div className="mx-5 ">
                    <img src="/images/brand 1.png" alt="brand" />
                  </div>
                  <div className="mx-5 ">
                    <img src="/images/brand 2.png" alt="brand" />
                  </div>
                  <div className="mx-5 ">
                    <img src="/images/brand 3.png" alt="brand" />
                  </div>
                  <div className="mx-5 ">
                    <img src="/images/brand 4.png" alt="brand" />
                  </div>
                  <div className="mx-5 ">
                    <img src="/images/brand 5.png" alt="brand" />
                  </div>
                  <div className="mx-5 ">
                    <img src="/images/brand 6.png" alt="brand" />
                  </div>
                  <div className="mx-5 ">
                    <img src="/images/brand 7.png" alt="brand" />
                  </div>
                  <div className="mx-5 ">
                    <img src="/images/brand 8.png" alt="brand" />
                  </div>
                </Marquee>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="blog-wrapper py-5 home-wrapper-2 px-4">
        <div className="container-xxl">
          <div className="col-12">
            <h3 className="section-heading">Nutrien News and Recipes</h3>
          </div>
          <div className="row">
            {blogState &&
              blogState?.map((item, index) => {
                if (index < 4) {
                  return (
                    <div className="col-3 pb-4" key={index}>
                      <BlogCard
                        id={item?._id}
                        title={item?.title}
                        date={moment(item?.createdAt).format(
                          "MMMM Do YYYY, h:mm:ss a"
                        )}
                        description={item?.description}
                        image={item?.images[0].url}
                      />
                    </div>
                  );
                }
              })}
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
