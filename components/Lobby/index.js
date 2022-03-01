import React from 'react'
import Image from 'next/image'
import hero from '../../public/hero.png'
import { useAppContext } from '../../contexts/AppContext'

const Lobby = () => {

  const { setGameStarted } = useAppContext()

  const startGame = () => {
    setGameStarted(true)
  }

  return (
    <div className='flex justify-center'>
      <div style={{ width: 1200 }}>
        <Image src={hero} alt="Wavelength " />
        <div className="flex justify-between pt-12 relative">
          <div className=''>
            <p className="text-white text-4xl font-bold text-center">Team 1</p>
            <hr className='bg-indigo-200 mt-5 h-1 w-80' />
            <p className="text-white text-2xl font-bold text-center mt-5">Player 1</p>
            <hr className='bg-indigo-200 mt-5 h-1 w-80' />
            <p className="text-white text-2xl font-bold text-center mt-5">Player 2</p>
            <hr className='bg-indigo-200 mt-5 h-1 w-80' />
          </div>
          <div>
            <p className="text-white text-4xl font-bold text-center">Team 2</p>
            <hr className='bg-indigo-200 mt-5 h-1 w-80' />
            <p className="text-white text-2xl font-bold text-center mt-5">Player 3</p>
            <hr className='bg-indigo-200 mt-5 h-1 w-80' />
            <p className="text-white text-2xl font-bold text-center mt-5">Player 4</p>
            <hr className='bg-indigo-200 mt-5 h-1 w-80' />
          </div>
          <div className=' text-right'>
            <button className="bg-coral-400 py-3 px-5 rounded text-white mb-1" onClick={startGame}>Start Game</button>
            {/* <button disabled className="bg-pureblack-40 cursor-not-allowed py-3 px-5 rounded text-white mb-1">Start Game</button> */}
            <p className='text-white text-xs whitespace-nowrap'>Waiting for everyone to join</p>

            <div className='text-left w-80 mt-8 text-indigo-100 text-sm'>
              <p className='mb-4'>Wavelength is a social guessing game where two teams compete to read each other&apos;s minds.</p>
              <p className='mb-4'> Teams take turns rotating a dial to where they think a target is located along a spectrum that&apos;s hidden behind a screen.</p>
              <p>One player from the active team-the Psychic- knows where the target is, but can only give a clue ON THE SPECTRUM between two opposing concepts. After that, their team- mates have to guess where the target is.</p>
            </div>

          </div>
        </div>
      </div>
    </div >
  )
}

export default Lobby
