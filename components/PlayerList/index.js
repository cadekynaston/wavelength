// import { useEffect } from 'react'
import { useAppContext } from '../../contexts/AppContext'
import Image from 'next/image'
import psychicAvatar from '../../public/avatars/psychic.svg'
import userAvatar from '../../public/avatars/user.svg'

const PlayerList = () => {
  const { players, socketId, psychicId } = useAppContext()

  return (
    <div>
      <p className="text-white text-4xl font-bold text-center">Players</p>
      {players.map((player, i) => {
        const isMe = player.id === socketId
        const isPsychic = player.id === psychicId
        return (
          <div key={player.id + i}>
            <hr style={{ height: 2 }} className='bg-indigo-200 mt-4 w-80' />
            <div className='relative'>
              <div className='absolute' style={{ top: -8, left: 5 }}>
                <Image src={isPsychic ? psychicAvatar : userAvatar} alt='avatar' />
              </div>
              <p className={`${isMe ? 'text-blue-500' : 'text-white'} text-xl text font-medium text-center mt-4`}>{player.name}</p>
            </div>
          </div>
        )
      }
      )}
      <hr style={{ height: 2 }} className='bg-indigo-200 mt-4 w-80' />
    </div>
  )
}

export default PlayerList
