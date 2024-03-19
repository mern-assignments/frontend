import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useAppSelector } from "store";

export const Profile = () => {
  const user = useAppSelector((state) => state?.userData?.user);

  return (
    <Formik
      initialValues={{
        firstName: "",
        lastName: "",
        email: "",
        mobileNumber: "",
        password: "",
      }}
      validationSchema={Yup.object({
        firstName: Yup.string().required("First Name is required"),
        lastName: Yup.string().required("Last Name is required"),
        email: Yup.string()
          .email("Invalid email address")
          .required("Email is required"),
        mobileNumber: Yup.string().required("Mobile Number is required"),
      })}
      onSubmit={(values) => {
        console.log(values); // You can dispatch an action to store this data in Redux here
      }}
    >
      <Form className="max-w-md mx-auto">
        {/* Personal Information */}
        <div>
          <h2 className="text-2xl font-bold mb-4">Profile Information</h2>
          {/* First Name */}
          <div className="mb-4">
            <label htmlFor="firstName" className="block font-bold mb-1">
              First Name
            </label>
            <Field
              type="text"
              id="firstName"
              name="firstName"
              value={user?.user?.firstName}
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
            <label htmlFor="lastName" className="block font-bold mb-1">
              Last Name
            </label>
            <Field
              type="text"
              id="lastName"
              name="lastName"
              value={user?.user?.lastName}
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
            <label htmlFor="email" className="block font-bold mb-1">
              Email
            </label>
            <Field
              type="email"
              id="email"
              name="email"
              value={user?.user?.email}
              className="w-full px-3 py-2 border rounded-md"
            />
            <ErrorMessage
              name="email"
              component="div"
              className="text-red-500"
            />
          </div>

          {/* Phone Number */}
          <div className="mb-4">
            <label htmlFor="mobileNumber" className="block font-bold mb-1">
              Mobile Number
            </label>
            <Field
              type="tel"
              id="mobileNumber"
              name="mobileNumber"
              value={user?.user?.mobile}
              className="w-full px-3 py-2 border rounded-md"
            />
            <ErrorMessage
              name="mobileNumber"
              component="div"
              className="text-red-500"
            />
          </div>
        </div>
      </Form>
    </Formik>
  );
};
