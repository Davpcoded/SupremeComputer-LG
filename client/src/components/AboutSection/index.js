import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    paddingBottom: "50px",
  },
  paper: {
    display: "inline-block",
    width: "100%",
    textAlign: "center",
  },
  video: {
    width: "400px",
    height: "280px",
    borderRadius: ".25rem",
    [theme.breakpoints.down("md")]: {
      width: "300px",
      height: "300px",
    },
  },
}));

export default function AboutSection() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Container>
        <Grid lg={12}>
          <Grid className={classes.paper} item sm={4} md={6}>
            <video
              className={classes.video}
              src={process.env.PUBLIC_URL + "/videos/video1.MP4"}
              alt={"hello"}
              controls
            />
          </Grid>
          <Grid className={classes.paper} item sm={4} md={6}>
            <Typography variant={"h2"}>Supreme Computer LG</Typography>
            <Typography style={{ color: "#ffbf00" }} variant={"h3"}>
              Creamos Soluciones
            </Typography>
            <Typography variant={"body1"}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
              porttitor, sem quis egestas tempus, lectus ipsum accumsan mi, sed
              sollicitudin sem ante tincidunt eros. Aliquam ut massa volutpat,
              aliquet odio at, dictum mi. Duis dapibus, tortor nec luctus
              varius, risus arcu lacinia massa, a ultrices erat massa elementum
              enim. Ut id semper lectus. Nullam hendrerit diam nulla, non
              hendrerit mauris egestas id. Mauris tristique ex nisl, nec porta
              ante feugiat sed. Nullam purus nunc, pharetra ac dui non, finibus
              luctus purus.
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}
