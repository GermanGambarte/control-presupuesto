import { useState } from 'react'
import { Progress } from 'react-sweet-progress'
import 'react-sweet-progress/lib/style.css'
import './dashboard.css'
export const Dashboard = ({ budget = '25000', spent = '10000' }) => {
  // const percentage = (spent * 100) / budget
  const percentage = 50 
  const [status, setStatus] = useState(() => {
    if (percent > 50)  setStatus('active')

    if (percent > 75)  setStatus('error')
     setStatus('default')
  }

  return (
    <Progress
      percent={percentage}
      status={status}
      strokeWidth={10}
      theme={{
        error: {
          symbol: percentage + '%',
          trailColor: 'pink',
          color: 'red',
        },
        default: {
          symbol: percentage + '%',
          trailColor: 'lightblue',
          color: 'blue',
        },
        active: {
          symbol: percentage + '%',
          trailColor: 'yellow',
          color: 'orange',
        },
        success: {
          symbol: percentage + '%',
          trailColor: 'lime',
          color: 'green',
        },
      }}
      type="circle"
    />
  )
}
