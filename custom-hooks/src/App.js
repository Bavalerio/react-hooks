import React from "react";
import "./App.css";
import DocTitleOne from "./components/docTitleOne";
import DocTitleTwo from "./components/docTitleTwo";
import CounterOne from "./components/counterOne";
import CounterTwo from "./components/counterTwo";
import UseForm from "./components/userForm";

function App() {
  return (
    <div className="App">
      <DocTitleOne />
      <DocTitleTwo />
      <CounterOne />
      <CounterTwo />
      <UseForm />
    </div>
  );
}

export default App;
