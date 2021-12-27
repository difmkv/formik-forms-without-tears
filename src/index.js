import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

/**
 * Formik
 * keeping track of values/errors/visited fields, orchestrating validation, and handling submission
 * No fancy subscriptions or observables under the hood, just plain React state and props.
 *
 * Getting values in and out of form state
 * Validation and error messages
 * Handling form submission
 *
 * initialValues
 * validationSchema
 * onSubmit // onSubmit={(data, { setSubmitting, resetForm })
 *
 * Yup for object schema validation
 * Formik has a special config option / prop for Yup called validationSchema
 * which will automatically transform Yup's validation errors into a pretty
 * object whose keys match values and touched.
 *
 * <FieldArray name="friends"></FieldArray> (arrayHelpers) => ()
 * Field Arrays Example
 * insert, remove, push
 *
 * useField is a custom React hook that will automagically help you hook up inputs to Formik
 * const [field, meta, helpers] = useField(props);
 *  const { setValue } = helpers;
 *
 * useFormikContext() is a custom React hook that will return all Formik state and helpers via React Context.
 *
 */
