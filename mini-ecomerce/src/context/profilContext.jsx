import { useState } from "react"
import React from "react";

export const profilContext = React.createContext();

export function ProfilContextProvider({children}) {
  const [profil, setProfil] = useState([]);

  function ajouter(data) {
    setProfil([...profil, data]);
  }

  return (
    <profilContext.Provider value={{profil, ajouter}}>
      {children}
    </profilContext.Provider>
  );
}

export default ProfilContextProvider ;
