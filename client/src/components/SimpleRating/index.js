import React from "react";
import Rating from "@material-ui/lab/Rating";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import { Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    right: theme.spacing(2),
  },
}));

export default function SimpleRating() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid md={6}>
          <Typography>
            Luis y los chicos de Supreme Computer LG cuidaron muy bien de mi
            Renault Twingo. Realmente satisfecho con el servicio y el trabajo
            que hicieron. ¡El carro funciona mejor que nunca! ¡Supreme Computer
            tiene soluciones para todas mis necesidades.
          </Typography>
          <Box component="fieldset" mb={3} borderColor="transparent">
            <Typography component="legend">Daniel Villarroel</Typography>
            <Rating name="read-only" value={5} readOnly />
          </Box>
        </Grid>

        <Grid md={6}>
          <Typography>
            Luis y los chicos de Supreme Computer LG cuidaron muy bien de mi
            Renault Twingo. Realmente satisfecho con el servicio y el trabajo
            que hicieron. ¡El carro funciona mejor que nunca! ¡Supreme Computer
            tiene soluciones para todas mis necesidades.
          </Typography>
          <Box component="fieldset" mb={3} borderColor="transparent">
            <Typography component="legend">Daniel Villarroel</Typography>
            <Rating name="read-only" value={5} readOnly />
          </Box>
        </Grid>
      </Grid>
    </div>
  );
}
