import { Button } from "@material-ui/core";
import React from "react";
import SwipeableViews from "react-swipeable-views";
import { autoPlay } from "react-swipeable-views-utils";
import WhatsAppIcon from "@material-ui/icons/WhatsApp";

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const styles = {
  root: {
    position: "relative",
    width: "100vw",
  },
  slide: {
    padding: 15,
    minHeight: 100,
    color: "#fff",
  },
  slide1: {
    backgroundImage:
      "url(" + process.env.PUBLIC_URL + "/images/RenaultBackground.jpg" + ")",
    backgroundRepeat: "no-repeat",
    height: "40vh",
    backgroundSize: "cover",
    backgroundPosition: "center",
  },
  slide2: {
    backgroundImage:
      "url(" +
      process.env.PUBLIC_URL +
      "/images/electronicBackground.jpg" +
      ")",
    backgroundRepeat: "no-repeat",
    height: "40vh",
    backgroundSize: "cover",
    backgroundPosition: "center",
  },
  slide3: {
    backgroundImage:
      "url(" + process.env.PUBLIC_URL + "/images/Mechanic.jpg" + ")",
    backgroundRepeat: "no-repeat",
    height: "40vh",
    backgroundSize: "cover",
    backgroundPosition: "center",
  },
  slideBtn: {
    color: "white",
    borderColor: "#ffbf00",
    marginLeft: "5vw",
  },
  slideText: {
    marginLeft: "5vw",
  },
  whatsAppIcon: {
    marginLeft: "5vw",
    fontSize: "40px",
    backgroundColor: "green",
    borderRadius: ".5rem",
    color: "white",
  },
  whatsappBtn: {
    color: "white",
    margingLeft: "5vw",
  },
};

class Carousel extends React.Component {
  state = {
    index: 0,
  };

  handleChangeIndex = (index) => {
    this.setState({
      index,
    });
  };

  render() {
    const { index } = this.state;

    return (
      <div style={styles.root}>
        <AutoPlaySwipeableViews
          index={index}
          onChangeIndex={this.handleChangeIndex}
        >
          <div style={Object.assign({}, styles.slide, styles.slide1)}>
            <div style={styles.slideTextDiv}>
              <h1 style={styles.slideText}>Creamos Soluciones</h1>
              <Button variant="outlined" size="medium" style={styles.slideBtn}>
                Servicios
              </Button>
            </div>
          </div>
          <div style={Object.assign({}, styles.slide, styles.slide2)}>
            <div style={styles.slideTextDiv}>
              <h1 style={styles.slideText}>
                Revisamos Cualquier Equipo Electronico
              </h1>
              <Button style={styles.whatsappBtn}>
                <WhatsAppIcon style={styles.whatsAppIcon} />
                Contactenos
              </Button>
              <h3 style={styles.slideText}>412-905-0324 / 412-319-3686</h3>
            </div>
          </div>
          <div style={Object.assign({}, styles.slide, styles.slide3)}>
            <div style={styles.slideTextDiv}>
              <h1 style={styles.slideText}>
                Ofrecemos mecanica ligera y preventiva
              </h1>
              <h4 style={styles.slideText}>Renault</h4>
              <h4 style={styles.slideText}>Chevrolet</h4>
              <h4 style={styles.slideText}>Toyota</h4>
              <h4 style={styles.slideText}>Escaneo Computarizado y mas</h4>
            </div>
          </div>
        </AutoPlaySwipeableViews>
        {/* <Pagination
          dots={3}
          index={index}
          onChangeIndex={this.handleChangeIndex}
        /> */}
      </div>
    );
  }
}

export default Carousel;
