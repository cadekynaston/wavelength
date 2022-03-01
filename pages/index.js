import { useEffect } from 'react'
import { io } from "socket.io-client";
import dynamic from 'next/dynamic';
import { useAppContext } from '../contexts/AppContext';
import Lobby from '../components/Lobby';
import Game from '../components/Game'

// import ReactSpeedometer from 'react-d3-speedometer'
const ReactSpeedometer = dynamic(
  () => import('react-d3-speedometer'),
  { ssr: false },
);


export default function Home() {
  const { gameStarted, setSocket, setSocketId, socket, setPlayers } = useAppContext()


  useEffect(() => {
    const newSocket = io(`https://chg-wavelength-service.herokuapp.com/`);
    console.log(newSocket)
    setSocket(newSocket);
    return () => newSocket.close();
  }, [setSocket]);

  useEffect(() => {
    if (socket) {
      socket.on('players-updated', (data) => {
        console.log('players-updated')
        setPlayers(data[0])
      });

      socket.on('connect', () => {
        console.log('connect', socket)
        setSocketId(socket.id)
      })
    }
  }, [socket]);

  if (gameStarted) {
    return (
      <Game />
    )
  }
  return (
    <Lobby />
  )
}
