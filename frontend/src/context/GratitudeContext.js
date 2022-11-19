import { createContext } from 'react';

export const GratitudesContext = createContext();

export const GratitudesContextProvider = ({ children }) => {
  return <GratitudesContext.Provider>{children}</GratitudesContext.Provider>;
};
