import React, { useEffect, useState } from "react";
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import { useDispatch, useSelector } from "react-redux";
import { getOrders } from "../features/user/userSlice";

const Orders = () => {
  const dispatch = useDispatch();
  const orderState = useSelector((state) => state?.auth?.orderedProducts);

  console.log(orderState);
  useEffect(() => {
    dispatch(getOrders());
  }, []);

  // calculate nutrition total
  // State to store total nutrition for each order
  const [orderNutrition, setOrderNutrition] = useState([]);

  // Function to calculate total nutrition for each order
  useEffect(() => {
    if (orderState && orderState.orders) {
      const updatedOrderNutrition = orderState.orders.map((order) => {
        let totalCalories = 0;
        let totalFat = 0;
        let totalSaturatedFat = 0;
        let totalSugar = 0;
        let totalSalt = 0;

        order.orderItems.forEach((item) => {
          totalCalories += item.product.nutrition.calories * item.quantity;
          totalFat += item.product.nutrition.fat * item.quantity;
          totalSaturatedFat +=
            item.product.nutrition.saturatedFat * item.quantity;
          totalSugar += item.product.nutrition.sugar * item.quantity;
          totalSalt += item.product.nutrition.salt * item.quantity;
        });

        return {
          totalCalories,
          totalFat,
          totalSaturatedFat,
          totalSugar,
          totalSalt,
        };
      });

      setOrderNutrition(updatedOrderNutrition);
    }
  }, [orderState]);

  return (
    <>
      <Meta title={"My Orders"} />
      <BreadCrumb title="My Orders" />
      {!orderState?.orders ? (
        <div>
          <p className="no-order home-wrapper-2">You have no order</p>
        </div>
      ) : (
        <div className="home-wrapper-2 container-xxl p-5">
          <div className="row">
            <div className="col-12">
              <div className="row orders-title">
                <div className="col-1">
                  <h5>No.</h5>
                </div>
                <div className="col-4">
                  <h5>Order Id</h5>
                </div>
                <div className="col-4">
                  <h5>Total Price</h5>
                </div>
                <div className="col-3">
                  <h5>Status</h5>
                </div>
              </div>
            </div>
            {orderState &&
              orderState?.orders?.map((item, index) => {
                return (
                  <div className="col-12">
                    <div className="row orders-detail">
                      <div className="col-1">
                        <h6>{index + 1}</h6>
                      </div>
                      <div className="col-4">
                        <h6>{item?._id}</h6>
                      </div>
                      <div className="col-4">
                        <h6>${item?.totalPriceWithShipping}</h6>
                      </div>
                      <div className="col-3">
                        <h6>{item?.orderStatus}</h6>
                      </div>
                      <div className="col-12">
                        <div className="row order-card p-3">
                          <div className="order-title col-1">
                            <p>No.</p>
                          </div>
                          <div className="order-title col-4">
                            <p>Product Name</p>
                          </div>
                          <div className="order-title col-4">
                            <p>Quantity</p>
                          </div>
                          <div className="order-title col-3">
                            <p>Total Price</p>
                          </div>
                          {item?.orderItems?.map((i, index) => {
                            return (
                              <div className="col-12" key={index}>
                                <div className="row">
                                  <div className="col-1">
                                    <p>{index + 1}</p>
                                  </div>
                                  <div className="col-4">
                                    <p>{i?.product?.title}</p>
                                  </div>
                                  <div className="col-4">
                                    <p>{i?.quantity}</p>
                                  </div>
                                  <div className="col-3">
                                    <p>${i?.product?.price * i?.quantity}</p>
                                  </div>
                                </div>
                              </div>
                            );
                          })}
                        </div>
                      </div>
                      {/* here */}
                      <div className="row total-nutrition">
                        <div className="col-12 ">
                          <p>
                            <b>Total calories: </b>{" "}
                            {orderNutrition[index]?.totalCalories || 0} kcal
                          </p>
                        </div>
                        <div className="col-12">
                          <p>
                            <b>Total fat: </b>
                            {orderNutrition[index]?.totalFat.toFixed(2) || 0}g
                          </p>
                        </div>
                        <div className="col-12">
                          <p>
                            <b>Total saturated fat: </b>
                            {orderNutrition[index]?.totalSaturatedFat.toFixed(
                              2
                            ) || 0}
                            g
                          </p>
                        </div>
                        <div className="col-12">
                          <p>
                            <b>Total sugar: </b>
                            {orderNutrition[index]?.totalSugar.toFixed(2) || 0}g
                          </p>
                        </div>
                        <div className="col-12">
                          <p>
                            <b>Total salt: </b>
                            {orderNutrition[index]?.totalSalt.toFixed(2) || 0}g
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
          </div>
        </div>
      )}
    </>
  );
};

export default Orders;
