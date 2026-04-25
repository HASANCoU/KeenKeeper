'use client';
import React, { createContext, useContext, useState } from 'react';

const GlobalContext = createContext();

const GlobalContextProvider = ({ children }) => {
  const [logInfo, setLogInfo] = useState([]);
  const [search, setSearch] = useState([]);

  return (
    <GlobalContext.Provider value={{ logInfo, setLogInfo }}>
      {children}
    </GlobalContext.Provider>
  );
};

// custom hook (important)
export const useGlobalContext = () => useContext(GlobalContext);

export default GlobalContextProvider;