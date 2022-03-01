import { createContext, useContext, useState } from 'react'

const AppContext = createContext();

export function AppWrapper({ children }) {

  const [gameStarted, setGameStarted] = useState(false)
  const [socketId, setSocketId] = useState(1)
  const [players, setPlayers] = useState([
    { id: 0, name: 'player 1' },
    { id: 1, name: 'player 2' },
    { id: 2, name: 'player 3' },
  ])

  let sharedState = {
    gameStarted,
    setGameStarted,
    players,
    setPlayers,
    socketId,
    setSocketId
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
