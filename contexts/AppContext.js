import { createContext, useContext, useState } from 'react'

const AppContext = createContext();

export function AppWrapper({ children }) {

  const [gameStarted, setGameStarted] = useState(false)
  const [psychicId, setPsychicId] = useState(1)
  const [pointerPosition, setPointerPosition] = useState(50)
  const [clue, setClue] = useState(undefined)
  const [guessSubmitted, setGuessSubmitted] = useState(false)
  const [target, setTarget] = useState(false)
  const [socket, setSocket] = useState(undefined)
  const [needleGrabbed, setNeedleGrabbed] = useState(false)
  const [roundEnded, setRoundEnded] = useState(false)
  const [concepts, setConcepts] = useState(['Useless in an emergency', 'Useful in an emergency'])
  const [players, setPlayers] = useState([[]])

  let sharedState = {
    gameStarted,
    setGameStarted,
    players,
    setPlayers,
    pointerPosition,
    setPointerPosition,
    psychicId,
    setPsychicId,
    guessSubmitted,
    setGuessSubmitted,
    clue,
    setClue,
    concepts,
    setConcepts,
    socket,
    setSocket,
    needleGrabbed,
    setNeedleGrabbed,
    target,
    setTarget,
    roundEnded,
    setRoundEnded
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
