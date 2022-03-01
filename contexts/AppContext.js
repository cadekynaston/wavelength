import { createContext, useContext, useState } from 'react'

const AppContext = createContext();

export function AppWrapper({ children }) {

  const [gameStarted, setGameStarted] = useState(false)

  let sharedState = {
    gameStarted,
    setGameStarted
  }

  return (
    <AppContext.Provider value={sharedState}>
      {children}
    </AppContext.Provider>
  );
}

export function useAppContext() {
  return useContext(AppContext);
}
