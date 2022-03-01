import dynamic from 'next/dynamic';
import { useState } from 'react'
import UserLegend from '../UserLegend';
import CategoryCard from '../CategoryCard';
import { generateSegments } from '../../utils/generateSegments';
import PlayerList from '../PlayerList'
import Button from '../Button';
// import { useAppContext } from '../../contexts/AppContext';
// import ReactSpeedometer from 'react-d3-speedometer'
const ReactSpeedometer = dynamic(
  () => import('react-d3-speedometer'),
  { ssr: false },
);


export default function Home() {

  const [value, setValue] = useState(50)
  const [showSegments, setShowSegments] = useState(false)
  const handleChange = (e) => {
    setValue(e.target.value)
  }

  const handleClick = () => {
    console.log('clicked submit')
    setShowSegments(true)
  }
  return (
    <main>
      <div className='relative w-1200 mx-auto flex'>
        <div>
          <UserLegend />
          <PlayerList />
        </div>
        <div
          className='relative mb-10 flex flex-col align-center flex-grow justify-center'
        >
          <div
            className='mx-auto mb-8'
            style={{
              width: 550,
              height: 300
            }}>

            <ReactSpeedometer
              minValue={0}
              maxValue={100}
              value={Number(value)}
              maxSegmentLabels={0}
              currentValueText={' '}
              forceRender
              fluidWidth={true}
              needleColor={'#D64621'}
              needleTransitionDuration={0}
              customSegmentStops={showSegments ? generateSegments(40) : [0, 100]}
              segmentColors={showSegments ? ['#F5F3EF', '#FF653E', '#F6BA3F', '#5EC5F1', '#F6BA3F', '#FF653E', '#F5F3EF'] : ['#5EC5F1']}
            />
          </div>
          <div className='relative'>
            <input
              className='slider h-2 bg-indigo-200 mx-auto block mb-20 form-range appearance-none p-0 bg-transparent focus:outline-none focus:ring-0 focus:shadow-none rounded'
              id="typeinp"
              type="range"
              min="0" max="100"
              value={value}
              onChange={handleChange}
              step="1" />
            <div className='absolute right-16' style={{ top: '-18px' }}>
              <Button onClick={handleClick}>Submit</Button>
            </div>
          </div>
          <div className='mx-auto'>
            <CategoryCard />
          </div>
        </div>
      </div>
    </main>
  )
}
