import React from "react";
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import { Link, useLocation } from "react-router-dom";
import { BsArrowLeft } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getABlog } from "../features/blogs/blogSlice";

const SingleBlog = () => {
   useEffect(() => {
     window.scrollTo(0, 0);
   }, []);
  const blogState = useSelector((state) => state?.blog?.singleBlog);
  const location = useLocation();
  const getBlogId = location.pathname.split("/")[2];
  const dispatch = useDispatch();
  console.log(blogState);
  useEffect(() => {
    getBlog();
  }, []);
  const getBlog = () => {
    dispatch(getABlog(getBlogId));
  };

  return (
    <>
      <Meta title={blogState?.title} />
      <BreadCrumb title={blogState?.title} />
      <div className="blog-wrapper home-wrapper-2 py-5">
        <div className="container-xxl">
          <div className="row">
            {/* <div className="col-3">
              <div className="filter-card mb-3">
                <h3 className="filter-title">FIND BY TOPICS</h3>
                <div>
                  <ul className="ps-0">
                    <li>Nutrition and Health</li>
                    <li>Kids' Nutrition</li>
                    <li>Vegetarian and Vegan Recipes</li>
                    <li>Low-Carb and Keto Recipes</li>
                    <li>Healthy Desserts Recipes</li>
                    <li>Cooking Techniques</li>
                    <li>Healthy Snack Ideas</li>
                    <li>Culinary Culture</li>
                  </ul>
                </div>
              </div>
            </div> */}
            <div className="col-12">
              <Link
                to="/blogs"
                className="back-arrow d-flex align-items-center gap-10"
              >
                <BsArrowLeft />
                <div className="back-to-blog">Back to Blogs</div>
              </Link>
              <div className="single-blog-card">
                <h3 className="title">{blogState?.title}</h3>
                <img
                  src={
                    blogState?.images[0].url
                      ? blogState?.images[0].url
                      : "https://climate.onep.go.th/wp-content/uploads/2020/01/default-image.jpg"
                  }
                  alt=""
                  className="image-fluid"
                />
                <p
                  dangerouslySetInnerHTML={{
                    __html: blogState?.description,
                  }}
                ></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SingleBlog;
