import React, { useEffect } from "react";
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import { Link } from "react-router-dom";
import { useFormik } from "formik";
import * as yup from "yup";
import CustomInput from "../components/CustomInput";
import { loginUser } from "../features/user/userSlice";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const loginSchema = yup.object({
  email: yup
    .string()
    .email("Email should be valid")
    .required("Email is required"),
  password: yup.string().required("Password is required"),
});

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: loginSchema,
    onSubmit: (values) => {
      dispatch(loginUser(values));
    },
  });
  const authState = useSelector((state) => state);
  const createdUser = useSelector((state) => state.auth.createdUser);
  const { user, isError, isSuccess, isLoading, message } = authState.auth;
  useEffect(() => {
    let token = localStorage.getItem("token");
    if (isSuccess && token) {
      navigate("/");
    }
  }, [user, isError, isSuccess, isLoading]);
  return (
    <>
      <Meta title={"Login"} />
      <BreadCrumb title="Login" />
      <div className="login-wrapper py-5 home-wrapper-2">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <div className="login-card">
                <h3 className="text-center mb-3">Login</h3>
                <form
                  action=""
                  onSubmit={formik.handleSubmit}
                  className="d-flex flex-column gap-15 "
                >
                  <div>
                    <CustomInput
                      type="email"
                      name="email"
                      placeholder="Email"
                      className="form-control mt-3"
                      onChange={formik.handleChange("email")}
                      onBlur={formik.handleBlur("email")}
                      value={formik.values.email}
                    />
                    <div className="error">
                      {formik.touched.email && formik.errors.email}
                    </div>
                  </div>
                  <div>
                    <CustomInput
                      type="password"
                      name="password"
                      placeholder="Password"
                      className="form-control mt-2"
                      onChange={formik.handleChange("password")}
                      onBlur={formik.handleBlur("password")}
                      value={formik.values.password}
                    />
                    <div className="error">
                      {formik.touched.password && formik.errors.password}
                    </div>
                  </div>
                  <div>
                    {/* <Link
                      className="forgotpassword text-dark"
                      to="/forgot-password"
                    >
                      Forgot Password?
                    </Link> */}
                    <div className="d-flex justify-content-center align-items-center gap-15">
                      <button className="button" type="submit">
                        Login
                      </button>
                      {!createdUser ? (
                        <Link className="button signup" to="/register">
                          Sign Up
                        </Link>
                      ) : (
                        <div></div>
                      )}
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

export default Login;
