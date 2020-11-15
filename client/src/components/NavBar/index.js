import React from "react";
import PropTypes from "prop-types";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import useScrollTrigger from "@material-ui/core/useScrollTrigger";
import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";
import Fab from "@material-ui/core/Fab";
import KeyboardArrowUpIcon from "@material-ui/icons/KeyboardArrowUp";
import Zoom from "@material-ui/core/Zoom";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import Divider from "@material-ui/core/Divider";
import { Button, Grid } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    right: theme.spacing(2),
  },
  navBarPosition: {
    position: "inherit",
    backgroundColor: "#ffbf00",
    height: "60px",
    width: "100vw",
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up("lg")]: {
      display: "none",
    },
    float: "right",
  },
  navBarBtn: {
    [theme.breakpoints.down("md")]: {
      display: "none",
    },
  },
  navBarContainer: {
    paddingLeft: "64px",
    paddingRight: "64px",
  },
  scrollTopIcon: {
    backgroundColor: "#ffbf00",
    color: "white",
    position: "fixed",
    top: "90vh",
    right: "6vw",
    [theme.breakpoints.down("md")]: {
      right: "8vw",
    },
  },
}));

function ScrollTop(props) {
  const { children, window } = props;
  const classes = useStyles();
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
    disableHysteresis: true,
    threshold: 50,
  });

  const handleClick = (event) => {
    const anchor = (event.target.ownerDocument || document).querySelector(
      "#back-to-top-anchor"
    );

    if (anchor) {
      anchor.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  };

  return (
    <Zoom in={trigger}>
      <div onClick={handleClick} role="presentation" className={classes.root}>
        {children}
      </div>
    </Zoom>
  );
}

ScrollTop.propTypes = {
  children: PropTypes.element.isRequired,
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default function NavBar(props) {
  const classes = useStyles();
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <AppBar className={classes.navBarPosition}>
      <Toolbar id="back-to-top-anchor">
        <Container className={classes.navBarContainer}>
          <Grid container alignItems="center">
            <Button className={classes.navBarBtn} variant="h6">
              Servicios
            </Button>
            <Divider orientation="vertical" flexItem />
            <Button className={classes.navBarBtn} variant="h6">
              Servicios
            </Button>
            <Divider orientation="vertical" flexItem />
            <Button className={classes.navBarBtn} variant="h6">
              Servicios
            </Button>
            <Divider orientation="vertical" flexItem />
            <Button className={classes.navBarBtn} variant="h6">
              Servicios
            </Button>
          </Grid>
        </Container>
        <ScrollTop {...props}>
          <Fab
            className={classes.scrollTopIcon}
            size="small"
            aria-label="scroll back to top"
          >
            <KeyboardArrowUpIcon />
          </Fab>
        </ScrollTop>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          edge="start"
          onClick={handleDrawerToggle}
          className={classes.menuButton}
        >
          <MenuIcon />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
}
