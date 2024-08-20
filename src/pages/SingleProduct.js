import React, { useEffect } from "react";
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import ProductCard from "../components/ProductCard";
import ReactStars from "react-rating-stars-component";
import { useState } from "react";
import ReactImageZoom from "react-image-zoom";
import TrafficLightCard from "../components/TrafficLightCard";
import { BiGitCompare } from "react-icons/bi";
import { AiOutlineHeart } from "react-icons/ai";
import { useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getAProduct, getAllProducts } from "../features/products/productSlice";
import { toast } from "react-toastify";
import {
  addProductToCart,
  getUserCart,
  deleteProductCart,
} from "../features/user/userSlice";
import { MdDelete } from "react-icons/md";

const SingleProduct = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    getProducts();
  }, []);

  const getProducts = () => {
    dispatch(getAllProducts());
  };
  const [quantity, setQuantity] = useState(1);
  const [alreadyAdded, setAlreadyAdded] = useState(false);
  const [relatedProducts, setRelatedProducts] = useState([]);

  const location = useLocation();
  const getProductId = location.pathname.split("/")[2];
  const dispatch = useDispatch();
  const productState = useSelector((state) => state?.product?.singleproduct);
  const cartState = useSelector((state) => state.auth.cartProducts);
  const navigate = useNavigate();
  const productList = useSelector((state) => state?.product?.product);

  const categoryToFilter = productState?.category;
  const filteredProducts = Object.values(productList).filter((product) => {
    return product?.category === categoryToFilter;
  });
  const productRec = filteredProducts.slice(0, 4);

  useEffect(() => {
    dispatch(getAProduct(getProductId));
    dispatch(getUserCart());
    fetchRelatedProducts();
  }, [getProductId]);
  useEffect(() => {
    for (let index = 0; index < cartState?.length; index++) {
      if (getProductId === cartState[index]?.productId?._id) {
        setAlreadyAdded(true);
      }
    }
  });
  const fetchRelatedProducts = () => {
    const productsWithSameCategory = Object.values(productList).filter(
      (product) =>
        product?.category === categoryToFilter && product?._id !== getProductId
    );

    // Shuffle the array to get random products
    const shuffledProducts = shuffleArray(productsWithSameCategory);

    // Take the first 4 products
    const selectedProducts = shuffledProducts.slice(0, 4);

    setRelatedProducts(selectedProducts);
  };

  const shuffleArray = (array) => {
    const shuffledArray = [...array];
    for (let i = shuffledArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledArray[i], shuffledArray[j]] = [
        shuffledArray[j],
        shuffledArray[i],
      ];
    }
    return shuffledArray;
  };
  const uploadCart = () => {
    console.log("id: " + productState?._id);
    console.log("quantity: " + quantity);
    dispatch(
      addProductToCart({
        productId: productState?._id,
        quantity: quantity,
      })
    );
  };
  // const props = {
  //   width: 400,
  //   height: 500,
  //   zoomWidth: 200,
  //   img: productState?.images[0]?.url
  //     ? productState?.images[0]?.url
  //     : "https://climate.onep.go.th/wp-content/uploads/2020/01/default-image.jpg",
  // };
  const [orderedProduct, setOrderedProduct] = useState(true);

  // Delete Cart Item
  const deleteACartProduct = (id) => {
    dispatch(deleteProductCart(id));
    setTimeout(() => {
      dispatch(getUserCart());
    }, 200);
  };

    useEffect(() => {
      window.scrollTo(0, 0);
    }, [location.pathname]);

    
  return (
    <>
      <Meta title={productState?.title} />
      <BreadCrumb title={productState?.title} />
      <div className="main-product-wrapper py-5 home-wrapper-2">
        <div className="container-xxl">
          <div className="row">
            <div className="col-6">
              <div className="main-product-image">
                <div>
                  {/* <ReactImageZoom {...props} /> */}
                  <img
                    src={
                      productState?.images[0]?.url
                        ? productState?.images[0]?.url
                        : "https://climate.onep.go.th/wp-content/uploads/2020/01/default-image.jpg"
                    }
                    alt=""
                  />
                </div>
              </div>
              <div className="other-images d-flex flex-wrap gap-15">
                {productState &&
                  productState?.images.map((item, index) => {
                    if (index < 3) {
                      return (
                        <div>
                          <img
                            src={
                              item?.url
                                ? item?.url
                                : "https://climate.onep.go.th/wp-content/uploads/2020/01/default-image.jpg"
                            }
                            alt=""
                            key={index}
                          />
                        </div>
                      );
                    }
                  })}
              </div>
            </div>
            <div className="col-6">
              <div className="main-product-details">
                <div className="border-bottom">
                  <h3>{productState?.title}</h3>
                </div>
                <div className="border-bottom pb-3">
                  <p className="price">${productState?.price}</p>
                  <div className="d-flex align-items-center gap-10">
                    <ReactStars
                      count={5}
                      size={18}
                      value="parseInt({productState?.totalrating})"
                      edit={false}
                      activeColor="#ffd700"
                    />
                    <p className=" review-btn mb-0">
                      ({productState?.ratings?.length} reviews)
                    </p>
                  </div>
                  <a className="review-btn" href="#review">
                    Write a Review
                  </a>
                </div>
                <div className="border-bottom pt-4">
                  <div className="d-flex align-items-center gap-10 mb-2">
                    <h3 className="detail-header">Category:</h3>
                    <p className="detail">{productState?.category}</p>
                  </div>
                  <div className="d-flex align-items-center gap-10 mb-2">
                    <h3 className="detail-header">Brand:</h3>
                    <p className="detail">{productState?.brand}</p>
                  </div>
                  <div className="d-flex align-items-center gap-10 mb-2">
                    <h3 className="detail-header">Serving Size:</h3>
                    <p className="detail">
                      {productState?.nutrition?.servingSize}
                    </p>
                  </div>
                  <div className="d-flex align-items-top gap-10 mb-2">
                    <h3 className="detail-header">Description:</h3>
                    <p
                      className="detail"
                      dangerouslySetInnerHTML={{
                        __html: productState?.description,
                      }}
                    ></p>
                  </div>
                  {/* <div className="d-flex align-items-center gap-10 mb-2">
                    <h3 className="detail-header">Tag:</h3>
                    <p className="detail"></p>
                  </div> */}
                  <div className="d-flex align-items-center gap-10 mb-2">
                    <h3 className="detail-header">Available:</h3>
                    <p className="detail">{productState?.quantity}</p>
                  </div>
                </div>
                <div className="border-bottom py-4">
                  <h3 className="detail-header pb-3">Nutrition</h3>
                  <div className="nutrition-lights d-flex align-items-center justify-content-between gap-10">
                    <TrafficLightCard
                      calories={productState?.nutrition?.calories}
                      fat={productState?.nutrition?.fat}
                      saturatedFat={productState?.nutrition?.saturatedFat}
                      sugar={productState?.nutrition?.sugar}
                      salt={productState?.nutrition?.salt}
                    />
                  </div>
                </div>

                <div className="border-bottom">
                  <div className="d-flex flex-row align-items-center gap-15 my-2">
                    {alreadyAdded === false && (
                      <>
                        <h3 className="detail-header">Quantity:</h3>
                        <div>
                          <input
                            type="number"
                            min={1}
                            max={100}
                            defaultValue={1}
                            className="form-control"
                            style={{ width: "50px" }}
                            onChange={(e) => {
                              setQuantity(e.target.value);
                            }}
                            value={quantity}
                          />
                        </div>
                      </>
                    )}

                    <div
                      className={
                        alreadyAdded
                          ? "d-flex align-items-center gap-15 mt-3"
                          : "d-flex align-items-center gap-30 ms-5"
                      }
                    >
                      <button
                        className="button mt-0"
                        type="submit"
                        onClick={() => {
                          alreadyAdded ? navigate("/cart") : uploadCart();
                        }}
                      >
                        {alreadyAdded ? "Go To Cart" : "Add To Cart"}
                      </button>
                      {alreadyAdded && (
                        <>
                          <p className="mb-0" style={{ color: "gray" }}>
                            This item is already <br /> added in your cart.
                          </p>
                        </>
                      )}
                      {/* <button className="button">Buy Now</button> */}
                    </div>
                  </div>
                  <div className="d-flex align-items-center gap-30 my-4">
                    {/* <div>
                      <a className="d-flex align-items-center gap-10" href="">
                        <BiGitCompare size={"1.5em"} /> Add to Compare
                      </a>
                    </div> */}
                    {/* <div>
                      <a className="d-flex align-items-center gap-10" href="">
                        <AiOutlineHeart size={"1.5em"} /> Add to Wishlist
                      </a>
                    </div> */}
                    <div className="delete-btn d-flex align-items-center gap-10">
                      {/* <MdDelete
                        size={"1.5em"}
                        
                        className="delete-product-btn"
                      /> */}
                      {/* <p
                        className="delete-product-btn"
                        onClick={() => deleteACartProduct(productState?._id)}
                      >
                        Delete from cart?
                      </p> */}
                    </div>
                  </div>
                </div>
                <div className="border-bottom">
                  <div className="d-flex align-items-top gap-10 my-4">
                    <h3 className="detail-header">Satisfaction Guarantee</h3>
                    <p className="detail">
                      Explore our product details with confidence on our
                      platform. Rest assured with our Satisfaction Guarantee,
                      offering easy returns within 30 days for a full refund or
                      replacement to ensure your contentment.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <section className="desc-wrapper py-5 home-wrapper-2">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <div className="bg-white p-5">
                <h4>Description</h4>
                <p
                  className=""
                  dangerouslySetInnerHTML={{
                    __html: productState?.description,
                  }}
                ></p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="review" className="review-wrapper py-5 home-wrapper-2">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <div className="review-inner-wrapper bg-white">
                <div className="review-head d-flex justify-content-between align-items-end">
                  <div>
                    <h4 className="mb-2">Customer Reviews</h4>
                    <div className="d-flex align-items-center gap-10">
                      <ReactStars
                        count={5}
                        size={18}
                        value="4"
                        edit={false}
                        activeColor="#ffd700"
                      />
                      <p className="mb-0">Based on 2 reviews</p>
                    </div>
                  </div>
                  {orderedProduct && (
                    <div>
                      <a className="text-decoration-underline" href="">
                        Write a review
                      </a>
                    </div>
                  )}
                </div>
                <div className="review-form py-4">
                  <form action="" className="d-flex flex-column gap-10">
                    <h4>Write a Review</h4>
                    <div>
                      <ReactStars
                        count={5}
                        size={20}
                        value="4"
                        edit={true}
                        activeColor="#ffd700"
                      />
                    </div>
                    <div>
                      <textarea
                        rows="4"
                        cols=""
                        className="w-100 form-control"
                        placeholder="Comments"
                      ></textarea>
                    </div>
                    <div className="d-flex justify-content-end">
                      <button className="button">Submit Review</button>
                    </div>
                  </form>
                </div>
                <div className="reviews mt-4">
                  <div className="review">
                    <div className="d-flex align-items-center gap-10">
                      <h6 className="mb-0">User A</h6>
                      <ReactStars
                        count={5}
                        size={16}
                        value="4"
                        edit={false}
                        activeColor="#ffd967"
                      />
                    </div>
                    <p className="mt-3">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Ad voluptatum a dolor expedita adipisci nobis sint
                      dignissimos eligendi ratione. Ab nulla, officia alias
                      architecto officiis commodi veritatis perferendis.
                      Repellendus, fuga!
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="product-wrapper py-5 home-wrapper-2 px-4">
        <div className="container-xxl">
          <div className="col-12">
            <h3 className="section-heading">You May Also Like</h3>
          </div>
          <div className="row">
            <ProductCard data={relatedProducts} />
          </div>
        </div>
      </section>
    </>
  );
};

export default SingleProduct;
