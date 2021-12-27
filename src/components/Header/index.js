import { AppBar, Toolbar, Typography } from "@material-ui/core";

const Header = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6">
          Formik - Build forms without the tears
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
