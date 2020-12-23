import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import ContatoPopover from "./Contato";
import React from "react";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

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
});

export default function Pedido({ ajuda, linguagensMap }) {
  const classes = useStyles();

  return (
    <Card className={classes.root} variant="outlined">
      <CardContent>
        <Typography
          className={classes.title}
          color="textSecondary"
          gutterBottom
        >
          Pedido de ajuda
        </Typography>
        <Typography variant="h5" component="h2">
          {linguagensMap.get(ajuda.languageId)}
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          {ajuda.createdAt}
        </Typography>
        <Typography variant="body2" component="p">
          {ajuda.description}
          <br />
        </Typography>
      </CardContent>
      <CardActions>
        <ContatoPopover contato={ajuda.phoneNumber}></ContatoPopover>
      </CardActions>
    </Card>
  );
}
