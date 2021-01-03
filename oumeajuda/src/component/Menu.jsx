import {
  AppBar,
  Box,
  Tab,
  Tabs,
  Typography,
  makeStyles,
} from "@material-ui/core";

import FormularioCadastroContent from "./formularioCadastro/FormularioCadastroContent";
import FormularioLoginContent from "./formularioLogin/FormularioLoginContent"
import HomeComponent from "./formularioAjuda/HomeComponent";
import MuralPedidos from "./muralPedidos/MuralPedidos"
import PropTypes from "prop-types";
import React from "react";
import { useCookies } from "react-cookie";

function TabPanel(props) {

  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index, cookies) {
  if (index === 2 && validarCookies(cookies)) {
    return {
      id: `simple-tab-${index}`,
      "aria-controls": `simple-tabpanel-${index}`,
      disabled: true
    };
  }

  if (index === 1 && !validarCookies(cookies)) {
    return {
      id: `simple-tab-${index}`,
      "aria-controls": `simple-tabpanel-${index}`,
      disabled: true
    };
  }

  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

function validarCookies(cookies) {
  if (cookies.token === "undefined") {
    return false;
  }

  return true;
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
}));

export default function Menu() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  const [cookies] = useCookies(["token"]);


  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Tabs
          centered={true}
          value={value}
          onChange={handleChange}
          aria-label="string"
          indicatorColor="secondary"
        >
          <Tab label="MURAL DE PEDIDOS" {...a11yProps(0, cookies)} />
          <Tab label="PEDI AJUDA" {...a11yProps(1, cookies)} />
          <Tab label="CADASTRAR" {...a11yProps(2, cookies)} />
          <Tab label="ENTRAR" {...a11yProps(3, cookies)} />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
        <MuralPedidos></MuralPedidos>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <HomeComponent cookies={cookies}></HomeComponent>
      </TabPanel>
      <TabPanel value={value} index={2}>
        <FormularioCadastroContent></FormularioCadastroContent>
      </TabPanel>
      <TabPanel value={value} index={3}>
        <FormularioLoginContent></FormularioLoginContent>
      </TabPanel>
    </div>
  );
}
