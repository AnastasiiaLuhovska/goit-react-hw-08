import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";

const RegisterForm = ({ onSubmit }) => {
  const initialValues = {
    name: "",
    email: "",
    password: "",
  };
  const handleSubmit = (values, options) => {
    options.resetForm();
    onSubmit(values);
  };

  const validationSchema = Yup.object({
    name: Yup.string().required("Name is required"),
    email: Yup.string().required("Email is required"),
    password: Yup.string()
      .min(7, "Password must be at least 7 characters long")
      .matches(/[0-9]/, "Password must contain at least one number")
      .matches(/[a-z]/, "Password must contain at least one lowercase letter")
      .matches(/[A-Z]/, "Password must contain at least one uppercase letter")
      .matches(
        /[!@#$%^&*(),.?":{}|<>]/,
        "Password must contain at least one symbol",
      )
      .required("Password is required"),
  });

  return (
    <Formik
      validationSchema={validationSchema}
      initialValues={initialValues}
      onSubmit={handleSubmit}
    >
      <Form className="flex-column items-center w-50">
        <label className="block text-lg text-gray-900 mb-4">
          Name
          <Field
            className="block border border-gray-300 rounded py-1.5 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 outline-gray-300"
            name="name"
            type="text"
          />
        </label>
        <ErrorMessage
          name="name"
          component="p"
          className="text-red-500 text-sm mt-1"
        />
        <label className="block text-lg text-gray-900 mb-4">
          Email
          <Field
            className="block border border-gray-300 rounded py-1.5 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 outline-gray-300"
            name="email"
            type="email"
          />
        </label>
        <ErrorMessage
          name="email"
          component="p"
          className="text-red-500 text-sm mt-1"
        />
        <label className="block text-lg text-gray-900 mb-4">
          Password
          <Field
            className="block border border-gray-300 rounded py-1.5 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 outline-gray-300"
            name="password"
            type="password"
          />
        </label>
        <ErrorMessage
          name="password"
          component="p"
          className="text-red-500 text-sm mt-1 "
        />
        <button type="submit">Register</button>
      </Form>
    </Formik>
  );
};

export default RegisterForm;
