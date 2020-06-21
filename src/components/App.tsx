import React from "react";
import { AppContextProvider } from "../context/AppContext";
import { Router } from "@reach/router";
import { HomeScreen } from "./screens/Home";
import { DefaultScreen } from "./screens/Default";

function App() {
  return (
    <AppContextProvider>
      <Router>
        <HomeScreen path="/" />
        <DefaultScreen path="*" />
      </Router>
    </AppContextProvider>
  );
}

export default App;
