import React, { Component } from 'react';
import './App.css';
import ClassCounter from './components/classCounter';
import ClassCounterTwo from './components/classCounterTwo';
import HookCounter from './components/hookCounter';
import HookCounterTwo from './components/hookCounterTwo'
import HookCounterThree from './components/hookCounterThree';
import HookCounterFour from './components/hookCounterFour'

class App extends Component {
    render(){
    return (
      <div className="App">
        <ClassCounter />
        <ClassCounterTwo />
        <HookCounter />
        <HookCounterTwo />
        <HookCounterThree />
        <HookCounterFour />
      </div>
    );
  }
}

export default App;
