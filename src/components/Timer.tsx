import { useState, useEffect } from 'react'
import { type TimerProps } from '../utils/interfaces'

function Timer({seconds, hasStarted, onTimeout}: TimerProps) {

    const [time, setTime] = useState<number>(seconds)

    useEffect(() => {
        if (!hasStarted) return
        setTime(seconds)
    
        const timer = setInterval(() => {
          setTime(prev => {
            if (prev <= 1) {
              clearInterval(timer)
              onTimeout()
              return 0
            }
            return prev - 1
          })
        }, 1000)
    
        return () => clearInterval(timer)
      }, [hasStarted, seconds])

    const minutesLeft: number = Math.floor(time / 60)
    const secondsLeft: number = time % 60

    return(
        <div className="">
            {(minutesLeft < 10) ? '0' + minutesLeft : minutesLeft}:{(secondsLeft < 10) ? '0' + secondsLeft : secondsLeft}
        </div>
    )
}

export default Timer