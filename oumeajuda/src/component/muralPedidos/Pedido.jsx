// import Backdrop from '@material-ui/core/Backdrop';
// import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
// import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
// import Fade from '@material-ui/core/Fade';
// import Modal from '@material-ui/core/Modal';
import React from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

// const useStylesModal = makeStyles((theme) => ({
//   modal: {
//     display: 'flex',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   paper: {
//     backgroundColor: theme.palette.background.paper,
//     border: '2px solid #000',
//     boxShadow: theme.shadows[5],
//     padding: theme.spacing(2, 4, 3),
//   },
// }));

export default function Pedido({ajuda, linguagensMap}) {
  // const [open, setOpen] = React.useState(false);

  // const handleOpen = () => {
  //   setOpen(true);
  // };

  // const handleClose = () => {
  //   setOpen(false);
  // };
  const classes = useStyles();

  // const classesModal = useStylesModal();

  console.log(ajuda)
  
  return (
    <Card className={classes.root} variant="outlined">
        <CardContent>
            <Typography className={classes.title} color="textSecondary" gutterBottom>
                Pedido de ajuda
            </Typography>
            <Typography variant="h5" component="h2">
                {linguagensMap.get(ajuda.languageId)}
            </Typography>
            <Typography className={classes.pos} color="textSecondary">
                {ajuda.createdAt}
                {/* {data && data.linguagens.map((linguagem) => <p>{linguagem.languageName}</p>)} */}
            </Typography>
            <Typography variant="body2" component="p">
                {ajuda.description}
                <br />
            </Typography>
        </CardContent>
        {/* <CardActions>
            <Button size="small" onClick={handleOpen}>Learn More</Button>
        </CardActions>

        <Modal
        aria-labelledby="modal-title"
        aria-describedby="modal-description"
        className={classesModal.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div className={classesModal.paper}>
            <h2 id="modal-title">Transition modal</h2>
            <p id="modal-description">react-transition-group animates me.</p>
          </div>
        </Fade>
      </Modal> */}
    </Card>
  );
}


/*
allowPhoneNumber: true
description: "description"
id: 13
languageId: 1
professorId: null
title: "titulo"
userId: 1
*/
