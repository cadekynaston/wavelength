import { useState } from 'react'
import { useAppContext } from '../../contexts/AppContext'

const RangeSlider = () => {
  const { pointerPosition, setPointerPosition } = useAppContext()
  return (
    <input
      className='slider h-2 bg-indigo-200 mx-auto block form-range appearance-none p-0 bg-transparent focus:outline-none focus:ring-0 focus:shadow-none rounded'
      id="typeinp"
      type="range"
      min="0" max="100"
      value={pointerPosition}
      onChange={e => setPointerPosition(e.target.value)}
      step="1" />

  )
}

export default RangeSlider
