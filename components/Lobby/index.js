import { useState, useEffect } from 'react'
import Image from 'next/image'
import hero from '../../public/hero.png'
import { useAppContext } from '../../contexts/AppContext'
import PlayerList from '../PlayerList'
import Button from '../Button'

const Lobby = () => {

  const { setGameStarted, players } = useAppContext()
  const [gameCanStart, setGameCanStart] = useState(true)

  const startGame = () => {
    setGameStarted(true)
  }

  useEffect(() => {
    if (players.length > 1) {
      setGameCanStart(true)
    }
  }, [players.length])
  return (
    <div className='flex justify-center'>
      <div className='w-1200'>
        <Image src={hero} alt="Wavelength " />
        <div className="flex justify-between pt-12 relative">
          <div className='text-left w-80 text-indigo-100 text-sm'>
            <p className='mb-4'>Wavelength is a social guessing game where two teams compete to read each other&apos;s minds.</p>
            <p className='mb-4'> Teams take turns rotating a dial to where they think a target is located along a spectrum that&apos;s hidden behind a screen.</p>
            <p>One player from the active team-the Psychic- knows where the target is, but can only give a clue ON THE SPECTRUM between two opposing concepts. After that, their team- mates have to guess where the target is.</p>
          </div>
          <div>
            <PlayerList />
          </div>
          <div className='text-right w-44'>
            <div>
              <Button disabled={!gameCanStart} onClick={startGame}>Start Game</Button>

              {!gameCanStart &&
                <p className='text-white text-xs whitespace-nowrap'>Need at least 2 players</p>
              }
            </div>
          </div>

        </div>
      </div>
    </div >
  )
}

export default Lobby
