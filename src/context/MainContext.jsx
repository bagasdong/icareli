import { createContext, useState } from "react";

export const MainContext = createContext();

const MainProvider = ({ children }) => {
  const [event, setEvent] = useState(1);

  return (
    <MainContext.Provider
      value={{
        event,
        setEvent,
      }}
    >
      {children}
    </MainContext.Provider>
  );
};

export default MainProvider;
