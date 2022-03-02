import React from 'react'
import Image from 'next/image'
import stars from '../../public/avatars/stars.svg'
import { useAppContext } from '../../contexts/AppContext'
import Button from '../Button'


const InfoPane = () => {

  const { socket, psychicId, clue, guessSubmitted } = useAppContext()
  const isPsychic = socket.id === psychicId

  let helpText = 'Psychic is thinking... You will need to guess where to place the red dial after they share the clue.'
  if (isPsychic) {
    helpText = 'Share your clue to help guessers place the red dial in the blue target area.'
  }
  if (isPsychic && clue) {
    helpText = 'Guesser(s) are guessing...'
  }
  if (isPsychic && guessSubmitted) {
    helpText = 'See the results!'
  }
  if (!isPsychic && guessSubmitted) {
    helpText = 'See the results!'
  }
  if (!isPsychic && clue) {
    helpText = 'Drag the slider to where you think the psychic is expecting the target area.'
  }

  return (
    <div className='w-80'>
      <div className='flex mb-1'>
        {isPsychic &&
          <div className='mr-2 mt-1'>
            <Image src={stars} alt='psychic stars' />
          </div>
        }
        <p className={`${isPsychic ? 'text-gold-600' : 'text-indigo-100'} text-2xl text-2 uppercase font-semibold`}>{isPsychic ? 'Psychic' : 'Guesser'}</p>
      </div>
      <p className="text-indigo-100 text-lg leading-6 pb-5">{helpText}</p>
      {
        guessSubmitted &&
        <div className=''>
          <Button onClick={() => { console.log('next round') }}>Next Round</Button>
        </div>
      }
    </div>
  )
}

export default InfoPane
