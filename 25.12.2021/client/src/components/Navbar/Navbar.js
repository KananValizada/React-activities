import { AppBar, Toolbar, Typography, Button } from "@material-ui/core";
import useStyles from "./styles";

const Navbar = () => {
  const classes = useStyles();

  return (
    <AppBar className={classes.appBar} position="static" color="inherit">
      <div className={classes.brandContainer}>
        <Typography className={classes.heading} variant="h2" align="center">
          Memories
        </Typography>
      </div>
      <Toolbar className={classes.toolbar}>
        <Button variant="contained" color="primary">
          Sign In
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
