import { Grid, Typography } from "@material-ui/core";

import Textfield from "../../components/FormsUI/Textfield";

const Details = () => (
  <>
    <Grid item xs={12}>
      <Typography>Your detalis</Typography>
    </Grid>

    <Grid item xs={6}>
      <Textfield name="firstName" label="First Name" />
    </Grid>

    <Grid item xs={6}>
      <Textfield name="lastName" label="Last Name" />
    </Grid>

    <Grid item xs={12}>
      <Textfield name="email" label="Email" />
    </Grid>

    <Grid item xs={12}>
      <Textfield name="phone" label="Phone" />
    </Grid>
  </>
);

export default Details;
