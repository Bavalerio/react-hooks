import React, { Component } from "react";
import "./App.css";
import ClassCounterOne from "./components/counter/classCounterOne";
import ClassMouse from "./components/counter/classMouse";
import IntevarlClassCounter from "./components/interval/intervalClassCounter";
import HookCounterOne from "./components/hooks/hookCounterOne";
import HookMouse from "./components/hooks/hookMouse";
import DataFetching from "./components/data/dataFetching";
import IntervalHookCounter from "./components/interval/intervalHookCounter";
import MouseContainer from "./components/container/mouseContainer";

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <ClassCounterOne />
        <ClassMouse />
        <IntevarlClassCounter /> */}
        {/* <HookCounterOne />
        <HookMouse />
        <DataFetching />
        <IntervalHookCounter /> */}
        <MouseContainer />
      </div>
    );
  }
}

export default App;
