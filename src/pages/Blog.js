import React from "react";
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import BlogCard from "../components/BlogCard";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getAllBlogs } from "../features/blogs/blogSlice";
import moment from "moment";
const Blog = () => {
  const blogState = useSelector((state) => state?.blog?.blog);
  const dispatch = useDispatch();
  useEffect(() => {
    getBlogs();
  }, []);
  const getBlogs = () => {
    dispatch(getAllBlogs());
  };

  return (
    <>
      <Meta title={"Blogs"} />
      <BreadCrumb title="Blogs" />
      <div className="blog-wrapper home-wrapper-2 py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-3">
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
            </div>
            <div className="col-9">
              <div className="row">
                {blogState &&
                  blogState?.map((item, index) => {
                    return (
                      <div className="col-6 pb-4" key={index}>
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
                  })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Blog;
