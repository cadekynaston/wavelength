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
  const { gameStarted } = useAppContext()

  if (gameStarted) {
    return (
      <Game />
    )
  }
  return (
    <Lobby />
  )
}
