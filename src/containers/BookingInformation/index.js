import { Grid, Typography } from "@material-ui/core";

import Textfield from "../../components/FormsUI/Textfield";
import DateTimePicker from "../../components/FormsUI/DateTimePicker";
import Checkbox from "../../components/FormsUI/Checkbox";

const BookingInformation = ({ checked }) => (
  <>
    <Grid item xs={12}>
      <Typography>Booking information</Typography>
    </Grid>

    <Grid item xs={6}>
      <DateTimePicker name="arrivalDate" label="Arrival Date" />
    </Grid>

    <Grid item xs={6}>
      <DateTimePicker name="departureDate" label="Departure Date" />
    </Grid>

    <Grid item xs={12}>
      <Textfield name="message" label="Message" multiline={true} rows={4} />
    </Grid>

    <Grid item xs={12}>
      <Checkbox
        name="termsOfService"
        legend="Terms Of Service"
        label="I agree"
        checked={checked}
      />
    </Grid>
  </>
);

export default BookingInformation;
