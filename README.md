# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

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
* `onSubmit // onSubmit={(data, { setSubmitting, resetForm })`
*
* Yup for object schema validation
* Formik has a special config option / prop for Yup called validationSchema
* which will automatically transform Yup's validation errors into a pretty
* object whose keys match values and touched.
*
* `<FieldArray name="friends"></FieldArray> (arrayHelpers) => ()`
* Field Arrays Example
* insert, remove, push
*
* `useField` is a custom React hook that will automagically help you hook up inputs to Formik
* `const [field, meta, helpers] = useField(props);`
* `const { setValue } = helpers;`
*
* `useFormikContext()` is a custom React hook that will return all Formik state and helpers via React Context.