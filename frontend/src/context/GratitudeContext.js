import { createContext, useReducer } from 'react';

export const GratitudesContext = createContext();

export const gratitudeReducer = (state, action) => {
  switch (action.type) {
    case 'SET_GRATITUDES':
      return {
        gratitudes: action.payload,
      };
    case 'CREATE_GRATITUDE':
      return {
        gratitudes: [action.payload, ...state.gratitudes],
      };
    default:
      return state;
  }
};
export const GratitudesContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(gratitudeReducer, {
    gratitudes: null,
  });

  return <GratitudesContext.Provider>{children}</GratitudesContext.Provider>;
};
