import dynamic from 'next/dynamic';
import { useState } from 'react'
import UserLegend from '../UserLegend';
import CategoryCard from '../CategoryCard';
// import { useAppContext } from '../../contexts/AppContext';
// import ReactSpeedometer from 'react-d3-speedometer'
const ReactSpeedometer = dynamic(
  () => import('react-d3-speedometer'),
  { ssr: false },
);


export default function Home() {

  const [value, setValue] = useState(50)
  const handleChange = (e) => {
    setValue(e.target.value)
  }
  return (
    <main>
      <div className='relative pt-20'>
        <UserLegend />
        <div
          className='mx-auto relative mb-10'
          style={{
            width: '550px',
            height: '300px',
          }}
        >
          <ReactSpeedometer
            minValue={0}
            maxValue={100}
            value={value}
            maxSegmentLabels={0}
            currentValueText={' '}
            fluidWidth={true}
            needleColor={'#D64621'}
            needleTransitionDuration={10}
            customSegmentStops={[0, 20, 25, 30, 35, 40, 45, 100]}
            segmentColors={['#F5F3EF', '#FF653E', '#F6BA3F', '#5EC5F1', '#F6BA3F', '#FF653E', '#F5F3EF']}
          />
        </div>
        <input
          className='h-2 bg-indigo-200 mx-auto block'
          style={{
            width: "500px",
          }}
          id="typeinp"
          type="range"
          min="0" max="100"
          value={value}
          onChange={handleChange}
          step="1" />
        <div>
          <CategoryCard />
        </div>
      </div>
    </main>
  )
}
