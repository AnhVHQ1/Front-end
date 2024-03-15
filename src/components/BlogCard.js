import React from "react";
import { Link } from "react-router-dom";

const BlogCard = (props) => {
  const { id, title, description, date, image } = props;
  return (
    <div className="blog-card mb-4">
      <div className="card-image">
        <img
          src={
            image
              ? image
              : "https://climate.onep.go.th/wp-content/uploads/2020/01/default-image.jpg"
          }
          className="img-fluid w-100"
          alt="blog"
        />
      </div>
      <div className="blog-content">
        <p className="date">{date}</p>
        <h5 className="title">{title}</h5>
        <p
          className="desc"
          dangerouslySetInnerHTML={{
            __html: description?.substr(0, 70) + "...",
          }}
        ></p>
        <Link to={"/blog/" + id} className="button">
          Read more
        </Link>
      </div>
    </div>
  );
};

export default BlogCard;
