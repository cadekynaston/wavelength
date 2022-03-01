import dynamic from 'next/dynamic';
import { useState } from 'react'
import InfoPane from '../InfoPane';
import Concepts from '../Concepts';
import { generateSegments } from '../../utils/generateSegments';
import PlayerList from '../PlayerList'
import Button from '../Button';
import RangeSlider from '../RangeSlider';
import { useAppContext } from '../../contexts/AppContext';
import Form from '../Form';
import ReadOnlyInput from '../Form/ReadOnlyInput';
// import ReactSpeedometer from 'react-d3-speedometer'
const ReactSpeedometer = dynamic(
  () => import('react-d3-speedometer'),
  { ssr: false },
);


export default function Home() {

  const { pointerPosition, psychicId, socketId, setClueSubmitted, clueSubmitted, setClue, clue } = useAppContext()
  const [showSegments, setShowSegments] = useState(false)

  const isPsychic = psychicId === socketId

  const handleClick = () => {
    console.log('clicked submit')
    setShowSegments(true)
  }
  const handleClueSubmit = ({ value }) => {
    console.log('clue submitted:', value)
    setClueSubmitted(true);
    setClue(value)
  }

  return (
    <main>
      <div className='relative w-1200 mx-auto flex'>
        <div>
          <InfoPane />
          <div className='mb-80'></div>
          <PlayerList />
        </div>
        <div
          className='relative mb-10 flex flex-col align-center flex-grow mt-12'
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
              value={Number(pointerPosition)}
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
          <div className='mx-auto mb-16'>
            <Concepts />
          </div>

          <div className='relative'>
            {!isPsychic &&
              <div>
                <RangeSlider />
                <div className='absolute right-16' style={{ top: '-18px' }}>
                  <Button onClick={handleClick}>Submit</Button>
                </div>
              </div>
            }

            {isPsychic && !clueSubmitted &&
              <div className='mx-auto'>
                <Form label="Your Clue" buttonText='Share Clue' onSubmit={handleClueSubmit} />
              </div>
            }

            {isPsychic && clueSubmitted &&
              <div className='mx-auto'>
                <ReadOnlyInput label="Your Clue" value={clue} />
              </div>
            }

          </div>
        </div>
      </div>
    </main>
  )
}
