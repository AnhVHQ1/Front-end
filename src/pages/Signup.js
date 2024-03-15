import React, { useEffect } from "react";
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import { useFormik } from "formik";
import * as yup from "yup";
import CustomInput from "../components/CustomInput";
import { useDispatch, useSelector } from "react-redux";
import { registerUser } from "../features/user/userSlice";
import { useNavigate } from "react-router-dom";


const signUpSchema = yup.object({
  firstname: yup.string().required("First name is required"),
  lastname: yup.string().required("Last name is required"),
  email: yup
    .string()
    .nullable()
    .email("Email should be valid")
    .required("Email is required"),
  mobile: yup
    .string()
    .required("Mobile number is required")
    .matches(
      /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/,
      "Phone number is not valid"
    )
    .min(10, "Phone number must be 10 digits long")
    .max(10, "Phone number must be 10 digits long"),
  password: yup.string().required("Password is required"),
  confirmpassword: yup
    .string()
    .required("Please confirm password")
    .oneOf([yup.ref("password"), null], "Password must match"),
});

const Signup = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      firstname: "",
      lastname: "",
      email: "",
      mobile: "",
      password: "",
    },
    validationSchema: signUpSchema,
    onSubmit: (values) => {
      dispatch(registerUser(values));
    },
  });
  const authState = useSelector((state) => state);

  const { user, isError, isSuccess, isLoading, message } = authState.auth;
  useEffect(() => {
    if (isSuccess) {
      navigate("/login");
    } else {
      navigate("/register");
    }
  }, [user, isError, isSuccess, isLoading]);


  return (
    <>
      <Meta title={"Sign Up"} />
      <BreadCrumb title="Sign Up" />
      <div className="login-wrapper py-5 home-wrapper-2">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <div className="login-card">
                <h3 className="text-center mb-3">Sign Up</h3>
                <form
                  action=""
                  onSubmit={formik.handleSubmit}
                  className="d-flex flex-column gap-15 "
                >
                  <div>
                    <CustomInput
                      type="firstname"
                      name="firstname"
                      placeholder="First Name"
                      value={formik.values.firstname}
                      onChange={formik.handleChange("firstname")}
                      onBlur={formik.handleBlur("firstname")}
                    />
                  </div>
                  <div className="error">
                    {formik.touched.firstname && formik.errors.firstname}
                  </div>
                  <div>
                    <CustomInput
                      type="lastname"
                      name="lastname"
                      placeholder="Last Name"
                      value={formik.values.lastname}
                      onChange={formik.handleChange("lastname")}
                      onBlur={formik.handleBlur("lastname")}
                    />
                  </div>
                  <div className="error">
                    {formik.touched.lastname && formik.errors.lastname}
                  </div>
                  <div>
                    <CustomInput
                      type="email"
                      name="email"
                      placeholder="Email"
                      value={formik.values.email}
                      onChange={formik.handleChange("email")}
                      onBlur={formik.handleBlur("email")}
                    />
                  </div>
                  <div className="error">
                    {formik.touched.email && formik.errors.email}
                  </div>
                  <div>
                    <CustomInput
                      type="phone-number"
                      name="phone-number"
                      placeholder="Phone Number"
                      value={formik.values.mobile}
                      onChange={formik.handleChange("mobile")}
                      onBlur={formik.handleBlur("mobile")}
                    />
                  </div>
                  <div className="error">
                    {formik.touched.mobile && formik.errors.mobile}
                  </div>
                  <div>
                    <CustomInput
                      type="password"
                      name="password"
                      placeholder="Password"
                      className="form-control mt-2"
                      value={formik.values.password}
                      onChange={formik.handleChange("password")}
                      onBlur={formik.handleBlur("password")}
                    />
                  </div>
                  <div className="error">
                    {formik.touched.password && formik.errors.password}
                  </div>
                  <div>
                    <CustomInput
                      type="password"
                      name="confirmpassword"
                      placeholder="Confirm Password"
                      className="form-control mt-2"
                      value={formik.values.confirmpassword}
                      onChange={formik.handleChange("confirmpassword")}
                      onBlur={formik.handleBlur("confirmpassword")}
                    />
                  </div>
                  <div className="error">
                    {formik.touched.confirmpassword &&
                      formik.errors.confirmpassword}
                  </div>
                  <div>
                    <div className="d-flex justify-content-center align-items-center gap-15">
                      <button className="button">Sign Up</button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signup;
