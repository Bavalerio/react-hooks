import React, { useReducer } from "react";
import "./App.css";
import CounterOne from "./components/counters/counterOne";
import CounterTwo from "./components/counters/counterTwo";
import CounterThree from "./components/counters/counterThree";
import ComponentA from "./components/component/componentA";
import ComponentB from "./components/component/componentB";
import ComponentC from "./components/component/componentC";
import DataFetchingOne from "./components/datas/dataFetchingOne";
import DataFetchingTwo from "./components/datas/dataFetchingTwo";

const initialState = 0;
const reducer = (state, action) => {
  switch (action) {
    case "increment":
      return state + 1;
    case "decrement":
      return state - 1;
    case "reset":
      return initialState;
    default:
      return state;
  }
};

export const CountContext = React.createContext();

function App() {
  const [count, dispatch] = useReducer(reducer, initialState);
  return (
    <CountContext.Provider
      value={{ countState: count, countDispatch: dispatch }}
    >
      <div className="App">
        <CounterOne />
        <CounterTwo />
        <CounterThree />
        {count}
        <ComponentA />
        <ComponentB />
        <ComponentC />
        <DataFetchingOne />
        <DataFetchingTwo />
      </div>
    </CountContext.Provider>
  );
}

export default App;
