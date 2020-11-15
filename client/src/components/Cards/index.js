import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Button from "@material-ui/core/Button";
import CameraIcon from "@material-ui/icons/PhotoCamera";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Link from "@material-ui/core/Link";
import ScheduleIcon from "@material-ui/icons/Schedule";
import PinDropIcon from "@material-ui/icons/PinDrop";
import PhoneIcon from "@material-ui/icons/Phone";

const useStyles = makeStyles((theme) => ({
  icon: {
    marginRight: theme.spacing(2),
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  card: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
  },
  cardHeader: {
    textAlign: "center",
  },
  cardMedia: {
    paddingTop: "56.25%", // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
  cardIcon: {
    color: "#ffbf00",
    marginLeft: "auto",
    marginRight: "auto",
    fontSize: "50px",
  },
  cardTextRightCol: {
    width: "120px",
    display: "inline",
    marginLeft: "50px",
  },
  cardText: {
    width: "80px",
    display: "inline-block",
  },
  cardBtn: {
    width: "fit-content",
    marginLeft: "auto",
    marginRight: "auto",
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
  },
}));

const cards = [0, 1, 2];

export default function Cards() {
  const classes = useStyles();

  return (
    <Container className={classes.cardGrid} maxWidth="md">
      {/* End hero unit */}
      <Grid container>
        <Grid item xs={12} sm={12} md={4}>
          <Card className={classes.card}>
            <ScheduleIcon className={classes.cardIcon} />

            <CardContent className={classes.cardContent}>
              <Typography
                className={classes.cardHeader}
                gutterBottom
                variant="h5"
                component="h2"
              >
                Horario
              </Typography>
              <Grid item lg={12}>
                <Typography item lg={6} className={classes.cardText}>
                  Lunes
                </Typography>
                <Typography item lg={6} className={classes.cardTextRightCol}>
                  8:00AM - 5:00PM
                </Typography>
              </Grid>
              <Grid item lg={12}>
                <Typography item lg={6} className={classes.cardText}>
                  Martes
                </Typography>
                <Typography item lg={6} className={classes.cardTextRightCol}>
                  8:00AM - 5:00PM
                </Typography>
              </Grid>
              <Grid item lg={12}>
                <Typography item lg={6} className={classes.cardText}>
                  Miercoles
                </Typography>
                <Typography item lg={6} className={classes.cardTextRightCol}>
                  8:00AM - 5:00PM
                </Typography>
              </Grid>
              <Grid item lg={12}>
                <Typography item lg={6} className={classes.cardText}>
                  Jueves
                </Typography>
                <Typography item lg={6} className={classes.cardTextRightCol}>
                  8:00AM - 5:00PM
                </Typography>
              </Grid>
              <Grid item lg={12}>
                <Typography item lg={6} className={classes.cardText}>
                  Viernes
                </Typography>
                <Typography item lg={6} className={classes.cardTextRightCol}>
                  8:00AM - 5:00PM
                </Typography>
              </Grid>
              <Grid item lg={12}>
                <Typography item lg={6} className={classes.cardText}>
                  Sabado
                </Typography>
                <Typography item lg={6} className={classes.cardTextRightCol}>
                  Cerrado - Cerrado
                </Typography>
              </Grid>
              <Grid item lg={12}>
                <Typography item lg={6} className={classes.cardText}>
                  Domingo
                </Typography>
                <Typography item lg={6} className={classes.cardTextRightCol}>
                  Cerrado - Cerrado
                </Typography>
              </Grid>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} sm={12} md={4}>
          <Card className={classes.card}>
            <PinDropIcon className={classes.cardIcon} />

            <CardContent className={classes.cardContent}>
              <Typography
                className={classes.cardHeader}
                gutterBottom
                variant="h5"
                component="h2"
              >
                Ubicacion
              </Typography>
              <Typography style={{ textAlign: "center", marginTop: "20px" }}>
                Av. XXXXX, Casa# XXXXX, Catia La Mar, Vargas
              </Typography>
              <CardActions>
                <Button
                  className={classes.cardBtn}
                  style={{ marginTop: "20px" }}
                  size="small"
                  href="#map"
                >
                  Ubicanos en el mapa
                </Button>
              </CardActions>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} sm={12} md={4}>
          <Card className={classes.card}>
            <PhoneIcon className={classes.cardIcon} />

            <CardContent className={classes.cardContent}>
              <Typography
                className={classes.cardHeader}
                gutterBottom
                variant="h5"
                component="h2"
              >
                Tienes Preguntas?
              </Typography>
              <Typography style={{ textAlign: "center", marginTop: "50px" }}>
                412-905-0324 / 412-319-3686
              </Typography>
              <Typography style={{ textAlign: "center", marginTop: "50px" }}>
                Llamanos y obten la ayuda que necesitas. Creamos soluciones!
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
}
