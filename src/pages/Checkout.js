import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";
import { useFormik } from "formik";
import * as yup from "yup";
import { createAnOrder } from "../features/user/userSlice";
const shippingSchema = yup.object({
  firstname: yup.string().required("First name is required"),
  lastname: yup.string().required("Last name is required"),
  address: yup.string().required("Address is required"),
  district: yup.string(),
  city: yup.string().required("City/Province is required"),
  country: yup.string().required("Country is required"),
  zipcode: yup.string(),
  shippingNote: yup.string(),
});

const Checkout = () => {
  const dispatch = useDispatch();
  const cartState = useSelector((state) => state.auth.cartProducts);
  const orderState = useSelector((state) => state?.auth?.order);
  const [shippingInfo, setShippingInfo] = useState(null);
  const navigate = useNavigate();
  const [shippingNote, setShippingNote] = useState("")
  // Calculate total
  const [totalAmount, setTotalAmount] = useState(null);
  useEffect(() => {
    let sum = 0;
    for (let index = 0; index < cartState?.length; index++) {
      sum =
        sum +
        Number(cartState[index]?.quantity) * cartState[index]?.productId?.price;
      setTotalAmount(sum);
    }
  }, [cartState]);

  const handleShippingNoteChange = (e) => {
    setShippingNote(e.target.value); // Update shippingNote state
  };
  const formik = useFormik({
    initialValues: {
      firstname: "",
      lastname: "",
      address: "",
      district: "",
      city: "",
      country: "",
      zipcode: "",
      shippingNote:shippingNote,
    },
    validationSchema: shippingSchema,
    onSubmit: (values) => {
      setShippingInfo(values);
      let items = [];
      for (let index = 0; index < cartState?.length; index++) {
        items.push({
          product: cartState[index]?.productId?._id,
          quantity: cartState[index]?.quantity,
        });
      }
      const orderDetail = {
        shippingInfo: {
          firstName: values.firstname,
          lastName: values.lastname,
          address: values.address,
          district: values.district,
          city: values.city,
          country: values.country,
          zipcode: values.zipcode,
        },
        shippingNote: shippingNote,
        orderItems: items,
        totalPrice: totalAmount,
        totalPriceWithShipping: totalAmount + 5,
      };
      if (formik.isValid) {
        // Dispatch the createAnOrder action with the shipping information
        dispatch(createAnOrder(orderDetail)).then(() => {
          navigate("/my-orders"); // Navigate to '/my-orders' after successful order creation
        });
      }
    },
  });
  // useEffect(() => {});
  // const { order, isError, isSuccess, isLoading, message } = orderState;
  // useEffect(() => {
  //   if (isSuccess) {
  //     navigate("/");
  //   } else {
  //     navigate("/my-orders");
  //   }
  // }, [order, isError, isSuccess, isLoading]);

  return (
    <>
      <div className="checkout-wrapper p-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-7">
              <div className="checkout-information">
                <h3 className="gusteau">Gusteau</h3>
                <nav aria-label="breadcrumb">
                  <ol className="breadcrumb">
                    <li className="breadcrumb-item">
                      <Link to="/cart" className=" text-dark">
                        Cart
                      </Link>
                    </li>
                    <li className="breadcrumb-item active" aria-current="page">
                      Information
                    </li>
                    <li className="breadcrumb-item active" aria-current="page">
                      Shipping
                    </li>
                    <li className="breadcrumb-item active" aria-current="page">
                      Payment
                    </li>
                  </ol>
                </nav>
                {/* <h4 className="title mt-4">Contact Information</h4>
                <p className="user-details py-3">aaa (a@a.a) </p> */}
                <h4 className="title my-4">Shipping Address</h4>
                <form
                  action=""
                  className="d-flex gap-15 flex-wrap justify-content-between"
                  onSubmit={formik.handleSubmit}
                >
                  <div className="w-100">
                    <select
                      className="form-control form-select"
                      id=""
                      name="country"
                      value={formik.values.country}
                      onChange={formik.handleChange("country")}
                      onBlur={formik.handleBlur("country")}
                    >
                      <option value="" selected disabled>
                        Select Country
                      </option>
                      <option value="vietnam">Vietnam</option>
                    </select>
                    <div className="error">
                      {formik.touched.country && formik.errors.country}
                    </div>
                  </div>
                  <div className="flex-grow-1">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="First Name"
                      name="firstname"
                      value={formik.values.firstname}
                      onChange={formik.handleChange("firstname")}
                      onBlur={formik.handleBlur("firstname")}
                    />
                    <div className="error">
                      {formik.touched.firstname && formik.errors.firstname}
                    </div>
                  </div>
                  <div className="flex-grow-1">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Last Name"
                      name="lastname"
                      value={formik.values.lastname}
                      onChange={formik.handleChange("lastname")}
                      onBlur={formik.handleBlur("lastname")}
                    />
                    <div className="error">
                      {formik.touched.lastname && formik.errors.lastname}
                    </div>
                  </div>
                  <div className="w-100">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="House number, street name, ward,..."
                      name="address"
                      value={formik.values.address}
                      onChange={formik.handleChange("address")}
                      onBlur={formik.handleBlur("address")}
                    />
                    <div className="error">
                      {formik.touched.address && formik.errors.address}
                    </div>
                  </div>

                  <div className="flex-grow-1">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="District (Optional)"
                      name="district"
                      value={formik.values.district}
                      onChange={formik.handleChange("district")}
                      onBlur={formik.handleBlur("district")}
                    />
                    <div className="error">
                      {formik.touched.district && formik.errors.district}
                    </div>
                  </div>
                  <div className="flex-grow-1">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="City/Province"
                      name="city"
                      value={formik.values.city}
                      onChange={formik.handleChange("city")}
                      onBlur={formik.handleBlur("city")}
                    />
                    <div className="error">
                      {formik.touched.city && formik.errors.city}
                    </div>
                  </div>
                  <div className="flex-grow-1">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Zip Code (Optional)"
                      name="zipcode"
                      value={formik.values.zipcode}
                      onChange={formik.handleChange("zipcode")}
                      onBlur={formik.handleBlur("zipcode")}
                    />
                    <div className="error">
                      {formik.touched.zipcode && formik.errors.zipcode}
                    </div>
                  </div>
                  <div className="w-100">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Shipping Note"
                      name="shippingNote"
                      value={shippingNote} // Use shippingNote state
                      onChange={handleShippingNoteChange}
                    />
                    <div className="error">
                      {formik.touched.shippingNote &&
                        formik.errors.shippingNote}
                    </div>
                  </div>
                  <h4 className="title mt-4 mb-0">Shipping Method</h4>
                  <div className="w-100 ">
                    <select className="form-control form-select" id="">
                      <option value="" disabled>
                        Select Shipping Method
                      </option>
                      <option value="cod" selected>
                        Cash On Delivery
                      </option>
                    </select>
                  </div>
                  <div className="w-100">
                    <div className="d-flex justify-content-between align-items-center">
                      <Link
                        to="/cart"
                        className="text-dark d-flex align-items-center"
                      >
                        <IoIosArrowBack className="me-2" />
                        Return to Cart
                      </Link>
                      <button type="submit" className="button">
                        Place Order
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
            <div className="col-5">
              <div className="border-bottom py-4">
                {cartState &&
                  cartState?.map((item, index) => {
                    return (
                      <div
                        key={index}
                        className="d-flex gap-10 align-items-center justify-content-between"
                      >
                        <div className="w-75 d-flex gap-10 mt-3">
                          <div className="w-25 position-relative">
                            <span
                              style={{ top: "-10px", right: "-7px" }}
                              className="badge bg-secondary text-white rounded-circle p-2 position-absolute"
                            >
                              {item?.quantity}
                            </span>
                            <img
                              // style={{ border: "1px solid black" }}
                              className="checkout-img "
                              src={item?.productId?.images[0]?.url}
                              alt="product img"
                            />
                          </div>
                          <div>
                            <h5 className="title">{item?.productId?.title}</h5>
                            <p className="subtotal">
                              Quantity: {item?.quantity}
                            </p>
                          </div>
                        </div>
                        <div className="">
                          <h5>${item?.quantity * item?.productId?.price}</h5>
                        </div>
                      </div>
                    );
                  })}
              </div>
              <div className="border-bottom pt-4 pb-0">
                <div className="d-flex justify-content-between align-items-center">
                  <p className="subtotal">Subtotal</p>
                  <p className="subtotal-price">${totalAmount}</p>
                </div>
                <div className="d-flex justify-content-between align-items-center">
                  <p className="subtotal">Shipping</p>
                  <p className="subtotal-price">$5</p>
                </div>
              </div>
              <div className="d-flex justify-content-between align-items-center my-3">
                <h4 className="total">Total</h4>
                <h5 className="total-price">${totalAmount + 5}</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Checkout;
