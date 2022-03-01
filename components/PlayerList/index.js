import React from 'react'
import { useAppContext } from '../../contexts/AppContext'

const PlayerList = () => {
  const { players } = useAppContext()

  return (
    <div>
      {players.map(player => {
        return (
          <div key={player.id}>
            <hr className='bg-indigo-200 mt-5 h-1 w-80' />
            <p className="text-white text-xl font-bold text-center mt-5">{player.name}</p>
          </div>
        )
      }
      )}
      <hr className='bg-indigo-200 mt-5 h-1 w-80' />
    </div>
  )
}

export default PlayerList
