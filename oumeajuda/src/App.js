import "fontsource-roboto";
import React, { Component } from "react";
import Menu from "./component/Menu";
import api from "./api";

class App extends Component {

  async componentDidMount(){
    const response = await api.get("/linguagem/1")

    console.log(response.data)
  }

  render() {
    return (
      <>
        <div>início</div>
        <Menu></Menu>
        <div>fim</div>

      </>
    );
  }
}

export default App;
