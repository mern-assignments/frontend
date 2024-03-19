import { FC } from "react";
import { useAppSelector, useAppDispatch } from "store";
import { signUp } from "./../../features/userSlice";
import { useNavigate } from "react-router-dom";

import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { Link } from "react-router-dom";

export const SignUp: FC = () => {
  const user = useAppSelector((state) => state?.userData?.user);
  const { error, message, success } = useAppSelector(
    (state) => state?.userData
  );
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  if (user || success) {
    navigate("/");
  }

  return (
    <Formik
      initialValues={{
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        mobile: "",
      }}
      validationSchema={Yup.object({
        firstName: Yup.string().required("First Name is required"),
        lastName: Yup.string().required("Last Name is required"),
        email: Yup.string()
          .email("Invalid email address")
          .required("Email is required"),
        password: Yup.string().required("Password is required"),
        mobile: Yup.string().required("Mobile Number is required"),
      })}
      onSubmit={(values) => {
        dispatch(signUp(values));
      }}
    >
      <Form className="space-y-10">
        {error && <p className="text-red-500">{message}</p>}
        <div>
          <h2 className="text-2xl font-bold mb-4">Sign Up</h2>
          {/* First Name */}
          <div className="mb-4">
            <label htmlFor="firstName" className="block mb-1">
              First Name
            </label>
            <Field
              type="text"
              id="firstName"
              name="firstName"
              className="w-full px-3 py-2 border rounded-md"
            />
            <ErrorMessage
              name="firstName"
              component="div"
              className="text-red-500"
            />
          </div>

          {/* Last Name */}
          <div className="mb-4">
            <label htmlFor="lastName" className="block mb-1">
              Last Name
            </label>
            <Field
              type="text"
              id="lastName"
              name="lastName"
              className="w-full px-3 py-2 border rounded-md"
            />
            <ErrorMessage
              name="lastName"
              component="div"
              className="text-red-500"
            />
          </div>

          {/* Email */}
          <div className="mb-4">
            <label htmlFor="email" className="block mb-1">
              Email
            </label>
            <Field
              type="email"
              id="email"
              name="email"
              className="w-full px-3 py-2 border rounded-md"
            />
            <ErrorMessage
              name="email"
              component="div"
              className="text-red-500"
            />
          </div>
          {/* Password */}
          <div className="mb-4">
            <label htmlFor="password" className="block mb-1">
              Password
            </label>
            <Field
              type="password"
              id="password"
              name="password"
              className="w-full px-3 py-2 border rounded-md"
            />
            <ErrorMessage
              name="password"
              component="div"
              className="text-red-500"
            />
          </div>

          {/* Phone Number */}
          <div className="mb-4">
            <label htmlFor="mobile" className="block  mb-1">
              Mobile Number
            </label>
            <Field
              type="tel"
              id="mobile"
              name="mobile"
              className="w-full px-3 py-2 border rounded-md"
            />
            <ErrorMessage
              name="mobile"
              component="div"
              className="text-red-500"
            />
          </div>
          <div>
            <button
              type="submit"
              className="mb-4 flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              id="signup-button"
            >
              Sign Up
            </button>
            <Link
              to="/login"
              className="mb-4 flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-black focus:outline-none"
            >
              Existing User ? Sign In
            </Link>
          </div>
        </div>
      </Form>
    </Formik>
  );
};
