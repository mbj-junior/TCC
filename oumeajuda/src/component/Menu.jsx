import {
  AppBar,
  Box,
  Tab,
  Tabs,
  Typography,
  makeStyles,
} from "@material-ui/core";

import FormularioCadastroContent from "./formularioCadastro/FormularioCadastroContent";
import HomeComponent from "./formularioAjuda/HomeComponent";
import MuralPedidos from "./muralPedidos/MuralPedidos"
import PropTypes from "prop-types";
import React from "react";

function TabPanel(props) {
  console.log("construir")

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

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
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
          <Tab label="MURAL DE PEDIDOS" {...a11yProps(0)} />
          <Tab label="OU ME AJUDA" {...a11yProps(1)} />
          <Tab label="CADASTRO" {...a11yProps(2)} />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
        <MuralPedidos></MuralPedidos>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <HomeComponent></HomeComponent>
      </TabPanel>
      <TabPanel value={value} index={2}>
        <FormularioCadastroContent></FormularioCadastroContent>
      </TabPanel>
    </div>
  );
}
