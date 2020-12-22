import React, {useState} from 'react';

import Button from '@material-ui/core/Button';
import Popover from '@material-ui/core/Popover';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  typography: {
    padding: theme.spacing(2),
  },
}));

export default function ContatoPopover(contato) {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = useState(null);
  const [contatoHandled, setContato] = useState("");
  
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
    handleContato()
  };

  const handleClose = () => {
    setAnchorEl(null);
    setContato(null);
  };
  
  const handleContato = () => {
    console.log(contato.contato === null);
    if(contato.contato === null){
      setContato("Contato não definido");
    } else {
      setContato(contato.contato);
    }
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

  return (
    <div>
      <Button aria-describedby={id} variant="contained" color="primary" onClick={handleClick}>
          Ver Contato
      </Button>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'center',
        }}
      >
        <Typography className={classes.typography}>{contatoHandled}</Typography>
      </Popover>
    </div>
  );
}