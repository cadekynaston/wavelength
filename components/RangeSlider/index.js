import { useAppContext } from '../../contexts/AppContext'

const RangeSlider = () => {
  const { pointerPosition, needleGrabbed, socket } = useAppContext()


  const handleMouseDown = () => {
    console.log('grab-needle')
    socket.emit('grab-needle')
  }

  const handleMouseUp = () => {
    console.log('release-needle')
    socket.emit('release-needle')
  }
  const handleChange = (e) => {
    console.log('move-needle', (e.target.value / 100))
    socket.emit('move-needle', (e.target.value / 100))
  }

  return (
    <input
      className={`${needleGrabbed && 'disabled'} slider h-2 bg-indigo-200 mx-auto block form-range appearance-none p-0 bg-transparent focus:outline-none focus:ring-0 focus:shadow-none rounded`}
      id="typeinp"
      type="range"
      disabled={needleGrabbed}
      min="0" max="100"
      value={pointerPosition}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      onChange={handleChange}
      step="1" />
  )
}

export default RangeSlider
