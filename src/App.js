import React, { Component } from 'react';

import {connect} from "react-redux";

import {requestRealmsIfNeeded} from './actions/armory/realms';
import CharacterLoadout from "./components/CharacterLoadout";

class App extends Component {
  render() {
    return (
      <CharacterLoadout/>
    );
  }
}



export default App;