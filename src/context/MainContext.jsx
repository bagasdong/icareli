import { createContext, useState } from "react";

export const MainContext = createContext();

const MainProvider = ({ children }) => {
  const [year, setYear] = useState("2023");

  return (
    <MainContext.Provider
      value={{
        year,
        setYear,
      }}
    >
      {children}
    </MainContext.Provider>
  );
};

export default MainProvider;
