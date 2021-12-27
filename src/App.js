import { Container, Grid, makeStyles } from "@material-ui/core";
import { Form, Formik } from "formik";
import * as yup from "yup";

import Header from "./components/Header";
import Button from "./components/FormsUI/Button";
import Details from "./containers/Details";
import Address from "./containers/Address";
import BookingInformation from "./containers/BookingInformation";

const useStyles = makeStyles((theme) => ({
  formWrapper: {
    marginTop: theme.spacing(15),
    marginBottom: theme.spacing(8),
  },
}));

const INITIAL_FORM_STATE = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  addressLine1: "",
  addressLine2: "",
  city: "",
  state: "",
  country: "",
  arrivalDate: "",
  departureDate: "",
  message: "",
  termsOfService: false,
};

const FORM_VALIDATION = yup.object().shape({
  firstName: yup.string().required("Required"),
  lastName: yup.string().required("Required"),
  email: yup.string().email("Invalid email").required(),
  phone: yup
    .number()
    .integer()
    .typeError("Please enter a valid phone number.")
    .required(),
  addressLine1: yup.string().required("Required"),
  addressLine2: yup.string(),
  city: yup.string().required("Required"),
  state: yup.string().required("Required"),
  country: yup.string().required("Required"),
  arrivalDate: yup.date().required("Required"),
  departureDate: yup.date().required("Required"),
  message: yup.string(),
  termsOfService: yup
    .boolean()
    .oneOf([true], "The terms and conditions must be accepted.")
    .required("The terms and conditions must be accepted."),
});

function App() {
  const classes = useStyles();

  return (
    <Grid container>
      <Grid item xs={12}>
        <Header />
      </Grid>

      <Grid item xs={12}>
        <Container maxWidth="md">
          <div className={classes.formWrapper}>
            <Formik
              initialValues={INITIAL_FORM_STATE}
              validationSchema={FORM_VALIDATION}
              onSubmit={(values, { setSubmitting, resetForm }) => {
                setSubmitting(true);
                console.log("submitting... ", values);
                setSubmitting(false);
                resetForm();
              }}
            >
              {({ values, errors, isSubmitting }) => (
                <Form>
                  <Grid container spacing={2}>
                    <Details />
                    <Address />
                    <BookingInformation checked={values.termsOfService} />
                    <Grid item xs={12}>
                      <Button disabled={isSubmitting}>Submit</Button>
                    </Grid>
                  </Grid>
                  <pre>values: {JSON.stringify(values, null, 2)}</pre>
                  <pre>errors: {JSON.stringify(errors, null, 2)}</pre>
                </Form>
              )}
            </Formik>
          </div>
        </Container>
      </Grid>
    </Grid>
  );
}

export default App;
