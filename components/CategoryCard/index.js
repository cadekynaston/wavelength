import React from 'react'
import Image from 'next/image'
import arrow from '../../public/arrow.svg'

const CategoryCard = () => {
  return (
    <div className='rounded relative flex w-80 text-center font-semibold text-2xl text-indigo-900'>
      <div className="absolute top-6 left-0 right-0">
        <Image src={arrow} alt='arrow' />
      </div>
      <div className='bg-gold-400 h-auto w-1/2 pt-20 pb-9 px-4 rounded-tl-sm rounded-bl-sm'>
        <p>Useless in an emergency</p>
      </div>
      <div className='bg-tan-100 h-auto w-1/2 pt-20 pb-9 px-4 rounded-tr-sm rounded-br-sm'>
        <p>Useful in an emergency</p>
      </div>
    </div>
  )
}

export default CategoryCard
