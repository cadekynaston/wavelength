import { createContext, useContext, useState } from 'react'

const AppContext = createContext();

export function AppWrapper({ children }) {

  const [gameStarted, setGameStarted] = useState(false)
  const [socketId, setSocketId] = useState(1)
  const [psychicId, setPsychicId] = useState(1)
  const [pointerPosition, setPointerPosition] = useState(50)
  const [clueSubmitted, setClueSubmitted] = useState(false)
  const [clue, setClue] = useState('')
  const [guessSubmitted, setGuessSubmitted] = useState(false)
  const [socket, setSocket] = useState(undefined)
  const [concepts, setConcepts] = useState(['Useless in an emergency', 'Useful in an emergency'])
  const [players, setPlayers] = useState([[]])

  let sharedState = {
    gameStarted,
    setGameStarted,
    players,
    setPlayers,
    socketId,
    setSocketId,
    pointerPosition,
    setPointerPosition,
    psychicId,
    setPsychicId,
    clueSubmitted,
    setClueSubmitted,
    guessSubmitted,
    setGuessSubmitted,
    clue,
    setClue,
    concepts,
    setConcepts,
    socket,
    setSocket
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
