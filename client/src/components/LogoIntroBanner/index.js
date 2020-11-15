import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import PhoneAndroidIcon from "@material-ui/icons/PhoneAndroid";
import InstagramIcon from "@material-ui/icons/Instagram";
import PinDropIcon from "@material-ui/icons/PinDrop";
import IconButton from "@material-ui/core/IconButton";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
  image: {
    backgroundImage: "url(https://source.unsplash.com/cGNCepznaV8)",
    backgroundRepeat: "no-repeat",
    height: "14vh",
    width: "100vw",
    backgroundSize: "cover",
    backgroundPosition: "center",
  },
  phoneIcon: {
    color: "white",
    marginLeft: "5%",
    marginTop: "1%",
  },
  instagramIcon: {
    color: "white",
    marginLeft: "5%",
  },
  iconText: {
    color: "white",
    fontSize: "20px",
  },
  iconButton: {
    width: "340px",
    [theme.breakpoints.down("sm")]: {
      display: "none",
      width: "200px",
    },
    color: "#ffbf00",
    padding: "0",
    height: "30px",
  },
  bannerLogo: {
    height: "160px",
    [theme.breakpoints.down("sm")]: {
      height: "100px",
    },
    display: "inline-block",
  },
  bannerBtnGrid: {
    display: "inline-block",
    position: "absolute",
  },
}));

export default function CenteredGrid() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Paper className={(classes.paper, classes.image)}>
            <Grid className={classes.bannerLogo} item xs={2}>
              <img
                src={
                  process.env.PUBLIC_URL +
                  "/images/Supreme_Computer_Transparent.png"
                }
                alt="company logo"
                className={classes.bannerLogo}
              />
            </Grid>

            <Grid className={classes.bannerBtnGrid} item xs={9}>
              <IconButton className={classes.iconButton}>
                <PhoneAndroidIcon />
                <p className={classes.iconText}> 412-905-0324 / 412-319-3686</p>
              </IconButton>
              <IconButton className={classes.iconButton}>
                <InstagramIcon />
                <p className={classes.iconText}>@SupremeComputerIg</p>
              </IconButton>
              <IconButton className={classes.iconButton}>
                <PinDropIcon />
                <p className={classes.iconText}>Catia La Mar, Vargas</p>
              </IconButton>
            </Grid>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}
