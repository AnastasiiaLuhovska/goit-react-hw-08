import { ErrorMessage, Field, Form, Formik } from "formik";
import s from "./ContactForm.module.css";
import * as Yup from "yup";

import { useDispatch } from "react-redux";
import { postData } from "../../redux/contacts/operations.js";

const ContactForm = () => {
  const phoneRegExp = /^\+380\d{9}$/;

  const dispatch = useDispatch();

  const validationSchema = Yup.object({
    name: Yup.string()
      .min(3, "Too short Name")
      .max(50, "Too long Name")
      .required("This field is required"),
    number: Yup.string()
      .matches(phoneRegExp, "Введіть коректний номер у форматі +380XXXXXXXXX")
      .required("This field is required"),
  });

  const handleSubmit = (value, action) => {
    action.resetForm();
    dispatch(postData(value));
  };

  return (
    <Formik
      validationSchema={validationSchema}
      initialValues={{ name: "", number: "" }}
      onSubmit={handleSubmit}
    >
      <Form className="border border-gray-300 rounded p-8 flex-column mb-8">
        <label className="block text-lg text-gray-900 mb-4">
          Name
          <Field
            className="block border border-gray-300 rounded py-1.5 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 outline-gray-300 w-full"
            type="text"
            name="name"
          ></Field>
        </label>
        <ErrorMessage
          className="text-red-500 text-sm mt-1"
          name="name"
          component="p"
        />

        <label className="block text-lg text-gray-900 mb-4">
          Number
          <Field
            className="block border border-gray-300 rounded py-1.5 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 outline-gray-300 w-full"
            type="text"
            name="number"
          ></Field>
        </label>
        <ErrorMessage
          className="text-red-500 text-sm mt-1"
          name="number"
          component="p"
        />

        <button className="mx-auto block" type="submit">
          Add Contact
        </button>
      </Form>
    </Formik>
  );
};

export default ContactForm;
