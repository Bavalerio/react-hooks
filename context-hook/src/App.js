import React from "react";
import "./App.css";
import ComponentC from "./components/componentC";

export const UserContext = React.createContext();
export const ChannelContext = React.createContext();

function App() {
  return (
    <div className="App">
      <UserContext.Provider value={"Brayan"}>
        <ChannelContext.Provider value={"Keep Moving"}>
          <ComponentC />
        </ChannelContext.Provider>
      </UserContext.Provider>
    </div>
  );
}

export default App;
