import React from "react";
import { AppContextProvider } from "../context/AppContext";

function App() {
  return (
    <AppContextProvider>
      <div>Hello World</div>
    </AppContextProvider>
  );
}

export default App;
