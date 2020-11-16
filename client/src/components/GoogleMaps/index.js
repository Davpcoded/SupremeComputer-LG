import React from "react";
import {
  GoogleMap,
  useLoadScript,
  Marker,
  InfoWindow,
} from "@react-google-maps/api";
import { Typography, Grid, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  InfoWindowLogo: {
    width: "100px",
    height: "100px",
    display: "block",
    marginLeft: "auto",
    marginRight: "auto",
  },
  InfoWindowBtn: {
    width: "100%",
    height: "50px",
    display: "block",
    marginLeft: "auto",
    marginRight: "auto",
    textAlign: "center",
  },
}));

const libraries = ["places"];
const mapContainerStyle = {
  height: "400px",
  width: "100vw",
};
const options = {
  disableDefaultUI: false,
  zoomControl: true,
};
const center = {
  lat: 10.60545,
  lng: -67.03238,
};

export default function ShareSpot() {
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: "AIzaSyD7hLiEOK8m_BNgDU1eQHjAQYhn4D-V1_M",
    libraries,
  });
  const classes = useStyles();

  if (loadError) return "Error";
  if (!isLoaded) return "Loading...";

  return (
    <Grid style={{ width: "100vw" }}>
      <div style={{ paddingBottom: "30px" }}>
        <Typography variant={"h1"} style={{ textAlign: "center" }}>
          Visitanos
        </Typography>
        <GoogleMap
          id="map"
          mapContainerStyle={mapContainerStyle}
          zoom={12}
          center={center}
          options={options}
        >
          <InfoWindow position={{ lat: 10.60545, lng: -67.04238 }}>
            <div>
              <img
                src={process.env.PUBLIC_URL + "/images/LogoWhiteBack.JPG"}
                className={classes.InfoWindowLogo}
                alt="Company Logo"
              />
              <Typography>Av.XXXX, Casa#XXXX, Catia la Mar, Vargas</Typography>
              <Button href={"/appointments"} className={classes.InfoWindowBtn}>
                Reserva tu cita
              </Button>
            </div>
          </InfoWindow>
        </GoogleMap>
      </div>
    </Grid>
  );
}
