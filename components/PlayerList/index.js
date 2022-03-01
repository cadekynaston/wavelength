import React from 'react'
import { useAppContext } from '../../contexts/AppContext'

const PlayerList = () => {
  const { players } = useAppContext()

  return (
    <div>
      {players.map(player => {
        return (
          <div key={player.id}>
            <hr style={{ height: 2 }} className='bg-indigo-200 mt-5 w-80' />
            <p className="text-white text-xl text font-medium text-center mt-5">{player.name}</p>
          </div>
        )
      }
      )}
      <hr style={{ height: 2 }} className='bg-indigo-200 mt-5 w-80' />
    </div>
  )
}

export default PlayerList
