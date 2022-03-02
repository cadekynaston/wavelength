import { useState } from 'react'
import { useAppContext } from '../../contexts/AppContext'
import Image from 'next/image'
import psychicAvatar from '../../public/avatars/psychic.svg'
import userAvatar from '../../public/avatars/user.svg'
import edit from '../../public/avatars/edit.svg'
import arrow from '../../public/avatars/arrow.svg'

const PlayerList = () => {
  const { players, socket, psychicId } = useAppContext()
  const [editing, setEditing] = useState(false)
  const me = players.find(player => player.id === socket.id)

  const [value, setValue] = useState(me.name)


  const handleNameChange = (e) => {
    console.log('name-change', value)
    setEditing(false)
    socket.emit('update-player', { name: value, team: 0 })
  }

  return (
    <div>
      <p className="text-white text-4xl font-bold text-center mb-2">Players</p>
      {players.map((player, i) => {
        const isMe = player.id === socket.id
        const isPsychic = player.id === psychicId

        return (
          <div key={player.id + i}>
            <div className='relative border-t-2 border-indigo-200 py-1'>
              {editing && isMe
                ? <div>
                  <input className="border py-3 px-3 text-grey-darkest rounded w-64 mr-4" value={value} type="text" onChange={e => setValue(e.target.value)} />
                  <div className='absolute' style={{ top: 3, right: 5 }} onClick={handleNameChange}>
                    <Image src={arrow} alt='avatar' />
                  </div>
                </div>
                : <div>
                  <div className='absolute' style={{ top: 6, left: 5 }}>
                    <Image src={isPsychic ? psychicAvatar : userAvatar} alt='avatar' />
                  </div>
                  <p className={`${isMe ? 'text-blue-500' : 'text-white'} text-xl text font-medium text-center p-2 `}>
                    {player.name}
                  </p>
                  {
                    isMe &&
                    <div className='absolute' style={{ top: 15, right: 5 }} onClick={() => setEditing(true)}>
                      <Image src={edit} alt='avatar' />
                    </div>
                  }

                </div>
              }

            </div>
          </div>
        )
      }
      )}
      <hr style={{ height: 3 }} className='bg-indigo-200 w-80' />
    </div>
  )
}

export default PlayerList
