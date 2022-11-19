import { createContext } from 'react';

export const GratitudesContext = createContext();

export const GratitudesContextProvider = () => {
  return <GratitudesContext.Provider></GratitudesContext.Provider>;
};
