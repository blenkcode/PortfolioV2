// context/MainRefContext.js
import { createContext, useContext, useState } from "react";

// Créez le contexte
const MainRefContext = createContext();

// Créez un fournisseur de contexte
export const MainRefProvider = ({ children }) => {
  const [mainRefValue, setMainRefValue] = useState(null);

  return (
    <MainRefContext.Provider value={{ mainRefValue, setMainRefValue }}>
      {children}
    </MainRefContext.Provider>
  );
};

// Hook personnalisé pour utiliser le contexte
export const useMainRef = () => {
  return useContext(MainRefContext);
};
