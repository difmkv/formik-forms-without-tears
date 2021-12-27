import { Grid, Typography } from "@material-ui/core";

import Textfield from "../../components/FormsUI/Textfield";
import Select from "../../components/FormsUI/Select";

import countries from "../../data/countries.json";

const Address = () => (
  <>
    <Grid item xs={12}>
      <Typography>Address</Typography>
    </Grid>

    <Grid item xs={12}>
      <Textfield name="addressLine1" label="Address Line 1" />
    </Grid>

    <Grid item xs={12}>
      <Textfield name="addressLine2" label="Address Line 2" />
    </Grid>

    <Grid item xs={6}>
      <Textfield name="city" label="City" />
    </Grid>

    <Grid item xs={6}>
      <Textfield name="state" label="State" />
    </Grid>

    <Grid item xs={12}>
      <Select name="country" label="Country" options={countries} />
    </Grid>
  </>
);

export default Address;
