import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker,
} from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import LogoIntroBanner from "../components/LogoIntroBanner";
import React from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import CssTextField from "../components/CssTextField";
import MenuItem from "@material-ui/core/MenuItem";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Axios from "axios";
const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: "#ffbf00",
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
    backgroundColor: "#ffbf00",
  },
  inputColor: {
    "& .MuiInput-underline:after": {
      borderBottom: "2px solid #ffbf00",
    },
    "& .MuiInputBase-root": {
      color: "black",
    },
    "& .MuiFormLabel-root.Mui-focused": {
      color: "#ffbf00",
    },
    width: "100%",
  },
}));

const appointmentTypes = [
  {
    value: "MECANICAGENERAL",
    label: "Mecanica General",
  },
  {
    value: "ELECTRONICA",
    label: "Electronica/Reprogramacion",
  },
  {
    value: "CAMBIODEACEITE",
    label: "Cambio de Aceite",
  },
];

export default function Appointments() {
  const classes = useStyles();
  const [appointmentType, setAppointmentType] = React.useState("");
  const [selectedDate, setSelectedDate] = React.useState(
    new Date("2020-11-15T09:00:00")
  );
  const [email, setEmail] = React.useState("");

  const registerAppointment = () => {
    Axios({
      method: "POST",
      data: {
        email: email,
        appointmentType: appointmentType,
        date: selectedDate,
      },
      url: "http://localhost:3001/api/appointments",
    })
      .then((res) => console.log(res))
      .catch((error) => alert(error));
  };

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const handleCategoryChange = (event) => {
    setAppointmentType(event.target.value);
  };

  return (
    <div>
      <LogoIntroBanner />
      <NavBar />
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Reservar Cita
          </Typography>
          <form className={classes.form} noValidate>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  className={classes.inputColor}
                  autoComplete="email"
                  name="email"
                  required
                  fullWidth
                  id="email"
                  label="Correo Electronico"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </Grid>
              <Grid item xs={12}>
                <CssTextField
                  className={classes.inputColor}
                  select
                  label="A que debemos tu visita?"
                  value={appointmentType}
                  onChange={handleCategoryChange}
                  helperText="Por favor seleccione tipo de cita"
                >
                  {appointmentTypes.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                      {option.label}
                    </MenuItem>
                  ))}
                </CssTextField>
              </Grid>
              <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <KeyboardDatePicker
                  className={classes.inputColor}
                  margin="normal"
                  id="date-picker-dialog"
                  label="Fecha"
                  format="MM/dd/yyyy"
                  value={selectedDate}
                  onChange={handleDateChange}
                  KeyboardButtonProps={{
                    "aria-label": "change date",
                  }}
                />
                <KeyboardTimePicker
                  className={classes.inputColor}
                  margin="normal"
                  id="time-picker"
                  label="Hora"
                  value={selectedDate}
                  onChange={handleDateChange}
                  KeyboardButtonProps={{
                    "aria-label": "change time",
                  }}
                />
              </MuiPickersUtilsProvider>
            </Grid>
            <Button
              /*  type="submit" */
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
              onClick={registerAppointment}
              /* href="/" */
            >
              Reservar Cita
            </Button>
          </form>
        </div>
        <Box mt={5}></Box>
      </Container>
      <Footer />
    </div>
  );
}
