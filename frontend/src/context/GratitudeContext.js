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
    case 'DELETE_WORKOUT':
      return {
        gratitudes: state.gratitudes.filter(
          (g) => g._id !== action.payload._id
        ),
      };
    default:
      return state;
  }
};
export const GratitudesContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(gratitudeReducer, {
    gratitudes: null,
  });

  return (
    <GratitudesContext.Provider value={{ ...state, dispatch }}>
      {children}
    </GratitudesContext.Provider>
  );
};
