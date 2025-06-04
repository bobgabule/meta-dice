import { useContext, createContext, useState } from "react";

const MobileMenuContext = createContext();

function MobileMenuContextProvider({ children }) {
  const [mobileMenuOpened, setMobileMenuOpened] = useState( false );

  return (
    <MobileMenuContext.Provider value={{ mobileMenuOpened, setMobileMenuOpened }}>
      {children}
    </MobileMenuContext.Provider>
  );
}

function useMobileMenuContext() {
  const context = useContext( MobileMenuContext );

  if ( !context ) {
    throw new Error( "useMobileMenuContext must be used within a MobileMenuContextProvider" );
  }

  return context;
}

export { useMobileMenuContext, MobileMenuContextProvider };