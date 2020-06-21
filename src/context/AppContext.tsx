import React, { useState } from "react";

const AppContext = React.createContext({
  user: {},
  setUser: {}
});

export const AppContextProvider = (props: { children: any }) => {
  const [user, setUser] = useState({});

  return (
    <AppContext.Provider value={{ user, setUser }}>
      {props.children}
    </AppContext.Provider>
  );
};
