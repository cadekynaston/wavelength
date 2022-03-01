import dynamic from 'next/dynamic';
import { useAppContext } from '../contexts/AppContext';
import Lobby from '../components/Lobby';
import Game from '../components/Game'
import { io } from "socket.io-client";

const socket = io("https://chg-wavelength-service.herokuapp.com/");

// import ReactSpeedometer from 'react-d3-speedometer'
const ReactSpeedometer = dynamic(
  () => import('react-d3-speedometer'),
  { ssr: false },
);


export default function Home() {
  const { gameStarted } = useAppContext()

  socket.on("hello", (data) => {
    console.log(socket.id)
    console.log('we got an event!')
    console.log(data);
  });
  if (gameStarted) {
    return (
      <Game />
    )
  }
  return (
    <Lobby />
  )
}
