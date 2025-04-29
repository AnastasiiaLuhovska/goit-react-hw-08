import { useDispatch, useSelector } from "react-redux";
import { selectContact } from "../../redux/contacts/selectors.js";
import { ErrorMessage, Field, Form, Formik } from "formik";
import s from "../ContactForm/ContactForm.module.css";
import * as Yup from "yup";
import { changeData } from "../../redux/contacts/operations.js";
import { changeContact } from "../../redux/contacts/slice.js";

const Modal = () => {
  const { name, number, id } = useSelector(selectContact);
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
    dispatch(changeData({ ...value, id: id }));
    dispatch(changeContact(null));
  };
  const handleClick = () => {
    dispatch(changeContact(null));
  };
  return (
    <div
      className="relative z-10"
      aria-labelledby="modal-title"
      role="dialog"
      aria-modal="true"
    >
      <div
        className="fixed inset-0 bg-gray-500/75 transition-opacity"
        aria-hidden="true"
      ></div>

      <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
        <div className="flex min-h-full  items-end justify-center p-4 text-center sm:items-center sm:p-0">
          <div className="relative transform  overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
            <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
              <div className="sm:flex sm:items-start ">
                <div className="mt-3  w-full text-center sm:mt-0 sm:ml-4 sm:text-left ">
                  <div className="mb-4">
                    <h3
                      className=" text-lg font-semibold text-gray-900 "
                      id="modal-title"
                    >
                      Change Contact
                    </h3>
                  </div>

                  <Formik
                    validationSchema={validationSchema}
                    initialValues={{ name: name, number: number }}
                    onSubmit={handleSubmit}
                  >
                    <Form>
                      <label className="block text-lg text-gray-900 mb-4">
                        Name
                        <Field
                          className="block border border-gray-300 rounded py-1.5 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 outline-gray-300 w-full"
                          type="text"
                          name="name"
                        ></Field>
                      </label>
                      <ErrorMessage
                        className={s.error}
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
                        className={s.error}
                        name="number"
                        component="p"
                      />
                      <div className=" px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                        <button
                          type="submit"
                          className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-xs ring-1 ring-gray-300 ring-inset hover:bg-gray-50 sm:mt-0 sm:w-auto"
                        >
                          Save
                        </button>
                        <button
                          type="button"
                          onClick={handleClick}
                          className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-xs ring-1 ring-gray-300 ring-inset hover:bg-gray-50 sm:mt-0 sm:w-auto"
                        >
                          Cancel
                        </button>
                      </div>
                    </Form>
                  </Formik>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
