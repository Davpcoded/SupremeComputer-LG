import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import LogoIntroBanner from "../components/LogoIntroBanner";
import React, { useState } from "react";
import API from "../utils/API";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import Checkbox from "@material-ui/core/Checkbox";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
  table: {
    minWidth: 700,
  },
});

export default function Admin() {
  const [appointments, setAppointments] = React.useState([]);
  const [checked, setChecked] = React.useState(true);
  const classes = useStyles();

  React.useEffect(() => {
    loadAppointments();
  }, []);

  function loadAppointments() {
    API.getAppointments()
      .then((res) => setAppointments(res.data))
      .catch((err) => console.log(err));
  }

  const handleChange = (event) => {
    setChecked(event.target.checked);
  };
  /* {console.log(appointments)}; */
  return (
    <div>
      <LogoIntroBanner />
      <NavBar />

      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell>Cliente</StyledTableCell>
              <StyledTableCell align="right">Fecha</StyledTableCell>
              <StyledTableCell align="right">Hora</StyledTableCell>
              <StyledTableCell align="right">Motivo de Visita</StyledTableCell>
              <StyledTableCell align="right">Completado</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {appointments.map((appointment) => (
              <StyledTableRow key={appointment.email}>
                <StyledTableCell component="th" scope="appointment">
                  {appointment.email}
                </StyledTableCell>
                <StyledTableCell align="right">
                  {appointment.date}
                </StyledTableCell>
                <StyledTableCell align="right">
                  {" "}
                  {/* this lane displays nothing but makes the row of heading be large enough to fir with the content of the table will stay here please fix later improve performance */}
                  {appointment.fat}
                </StyledTableCell>
                <StyledTableCell align="right">
                  {appointment.appointmentType}
                </StyledTableCell>

                <StyledTableCell align="right">
                  <Checkbox
                    checked={checked}
                    onChange={handleChange}
                    inputProps={{ "aria-label": "primary checkbox" }}
                  />
                </StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}
