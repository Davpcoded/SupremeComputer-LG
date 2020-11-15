import { Container, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import React from "react";
import SimpleRating from "../SimpleRating";

const useStyles = makeStyles((theme) => ({
  feedbackHeader: {
    display: "block",
    width: "100%",
    height: "100%",
    marginLeft: "auto",
    marginRight: "auto",
    textAlign: "center",
  },
  feedbackSubHeader: {
    display: "block",
    width: "100%",
    height: "100%",
    marginLeft: "auto",
    marginRight: "auto",
    textAlign: "center",
    paddingBottom: "60px",
  },
}));

export default function FeedbackSection() {
  const classes = useStyles();
  return (
    <div>
      <Container style={{ paddingBottom: "30px" }}>
        <Typography className={classes.feedbackHeader} variant={"h3"}>
          Que dice nuestros clientes?
        </Typography>
        <Typography className={classes.feedbackSubHeader} variant={"h6"}>
          comentarios de clientes satisfechos
        </Typography>
        <SimpleRating />
      </Container>
    </div>
  );
}
