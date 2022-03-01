import React from 'react'
import Image from 'next/image'
import arrow from '../../public/arrow.svg'

const Concepts = () => {
  return (
    <div className='rounded relative flex w-600 text-center font-semibold text-2xl text-white'>
      <div className=' h-auto w-1/3 px-4 rounded-tl-sm rounded-bl-sm'>
        <p>Useless in an emergency</p>
      </div>
      <div className="w-1/3 mt-4">
        <Image src={arrow} alt='arrow' />
        <p className="text-sm text-indigo-100">Concepts</p>
      </div>
      <div className='w-1/3 px-4 rounded-tr-sm rounded-br-sm'>
        <p>Useful in an emergency</p>
      </div>
    </div>
  )
}

export default Concepts
