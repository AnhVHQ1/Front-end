import React from "react";
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import { RxCross2 } from "react-icons/rx";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getUserProductWishlist } from "../features/user/userSlice";
import { addToWishlist } from "../features/products/productSlice";

const Wishlist = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    getWishlistFromDb();
  }, []);
  const getWishlistFromDb = () => {
    dispatch(getUserProductWishlist());
  };
  const wishlistState = useSelector((state) => state?.auth?.wishlist?.wishlist);
  const removeFromWishlist = (id) => {
    dispatch(addToWishlist(id));
    setTimeout(() => {
      dispatch(getUserProductWishlist());
    }, 300);
  };

  return (
    <>
      <Meta title={"Wishlist"} />
      <BreadCrumb title="Wishlist" />
      <div className="wishlist-wrapper home-wrapper-2 py-5">
        <div className="container-xxl">
          <div className="row">
            {wishlistState?.length === 0 && (
              <div className="empty-wishlist">
                <p>Your wishlist is empty</p>
              </div>
            )}
            {wishlistState?.map((item, index) => {
              return (
                <div className="col-3" key={index}>
                  <div className="wishlist-card position-relative">
                    <RxCross2
                      onClick={() => {
                        removeFromWishlist(item?._id);
                      }}
                      size={"2em"}
                      className="position-absolute cross"
                    />
                    <div className="wishlist-card-image">
                      <img
                        src={
                          item?.images[0].url
                            ? item?.images[0].url
                            : "https://www.micreate.eu/wp-content/img/default-img.png"
                        }
                        alt=""
                      />
                    </div>
                    <h5 className="title">{item?.title}</h5>
                    <h6 className="price">${item?.price}</h6>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Wishlist;
