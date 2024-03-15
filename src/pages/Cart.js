import React, { useEffect, useState } from "react";
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import { AiFillDelete } from "react-icons/ai";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteProductCart,
  getUserCart,
  updateProductCart,
} from "../features/user/userSlice";
import { FaArrowLeft } from "react-icons/fa";

const Cart = () => {
  const dispatch = useDispatch();

  const userCartState = useSelector((state) => state.auth.cartProducts);
  useEffect(() => {
    dispatch(getUserCart());
  }, []);

  // Delete Cart Item
  const deleteACartProduct = (id) => {
    dispatch(deleteProductCart(id));
    setTimeout(() => {
      dispatch(getUserCart());
    }, 200);
  };
  useEffect(() => {}, [userCartState]);

  // total
  const [totalAmount, setTotalAmount] = useState(null);
  useEffect(() => {
    let sum = 0;
    for (let index = 0; index < userCartState?.length; index++) {
      sum =
        sum +
        Number(userCartState[index]?.quantity) *
          userCartState[index]?.productId?.price;
      setTotalAmount(sum);
    }
  }, [userCartState]);
  return (
    <>
      <Meta title={"Cart"} />
      <BreadCrumb title="Cart" />
      <section className="cart-wrapper home-wrapper-2 py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              {totalAmount !== null && totalAmount !== 0 ? (
                <div className="cart-header py-3 d-flex justify-content-between align-items-center">
                  <h4 className="cart-col-1">Product</h4>
                  <h4 className="cart-col-2">Price</h4>
                  <h4 className="cart-col-3">Quantity</h4>
                  <h4 className="cart-col-4">Total</h4>
                </div>
              ) : (
                <p className="text-center" style={{ color: "gray" }}>
                  Your cart is empty
                </p>
              )}

              {userCartState &&
                userCartState?.map((item, index) => {
                  return (
                    <div
                      className="cart-data py-3 mb-2 d-flex justify-content-between align-items-center"
                      key={index}
                    >
                      <div className="cart-col-1 gap-15 d-flex align-items-center">
                        <div className="w-25">
                          <img
                            className="img-fluid"
                            src={
                              item?.productId?.images[0]?.url
                                ? item?.productId?.images[0]?.url
                                : "/images/product-compare-1.jpg"
                            }
                            alt="product image"
                          />
                        </div>
                        <div className="w-75">
                          <h5 className="title">{item?.productId?.title}</h5>
                          <p className="brand">
                            Brand: {item?.productId?.brand}
                          </p>
                          <p className="calories ">
                            Serving size:{" "}
                            {item?.productId?.nutrition.servingSize}
                          </p>
                        </div>
                      </div>
                      <div className="cart-col-2">
                        <h5 className="price">${item?.productId?.price}</h5>
                      </div>
                      <div className="cart-col-3 d-flex align-items-center gap-15">
                        <div>
                          <input
                            className="form-control"
                            type="number"
                            min={1}
                            max={10}
                            value={item?.quantity}
                          />
                        </div>
                        <div>
                          <AiFillDelete
                            onClick={() => deleteACartProduct(item?._id)}
                            size={"1.5em"}
                          />
                        </div>
                      </div>
                      <div className="cart-col-4">
                        <h5 className="price">
                          ${item?.productId?.price * item?.quantity}
                        </h5>
                      </div>
                    </div>
                  );
                })}

              <div className="cart-total col-12 py-2 ">
                <div className="d-flex align-items-baseline justify-content-between">
                  <Link to="/product" className="button">
                    <FaArrowLeft
                      className="gap-10"
                      style={{ margin: "0 10px 2px 0" }}
                    />
                    Continue shopping
                  </Link>
                  {totalAmount !== null && totalAmount !== 0 && (
                    <div className="d-flex flex-column align-items-end">
                      <h4 className="">Subtotal: ${totalAmount}</h4>
                      <p className="">
                        Taxes and shipping caculated at checkout
                      </p>
                      <Link className="button" to="/checkout">
                        Checkout
                      </Link>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Cart;
