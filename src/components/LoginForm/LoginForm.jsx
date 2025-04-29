import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";

const LoginForm = ({ onSubmit }) => {
  const initialValues = {
    email: "",
    password: "",
  };
  const handleSubmit = (values, options) => {
    onSubmit(values);
    options.resetForm();
  };
  const validationSchema = Yup.object({
    email: Yup.string().required("Email is required"),
    password: Yup.string().required("Password is required"),
  });
  return (
    <Formik
      validationSchema={validationSchema}
      initialValues={initialValues}
      onSubmit={handleSubmit}
    >
      <Form className="flex-column items-center">
        <label className="block text-lg text-gray-900 mb-4">
          Email
          <Field
            className="block border border-gray-300 rounded py-1.5 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 outline-gray-300"
            name="email"
            type="email"
          />
        </label>
        <ErrorMessage
          className="text-red-500 text-sm mt-1"
          name="email"
          component="p"
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
          className="text-red-500 text-sm mt-1"
          name="password"
          component="p"
        />
        <button type="submit">Login</button>
      </Form>
    </Formik>
  );
};

export default LoginForm;
