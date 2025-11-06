import Timer from './Timer'
import Button from './Button'
import { type ControlPanelProps } from '../utils/interfaces'

function ControlPanel({restartFn, questionNumber, score, seconds, hasStarted, onTimeout}: ControlPanelProps) {

    return (
        <div>
            <div className="">
            Question #{questionNumber}
            </div>
            <div className="">
                Score: {score}/10
            </div>
            <Timer seconds={seconds} hasStarted={hasStarted} onTimeout={onTimeout} />
            <div>
                <Button onClick={restartFn} text="Restart" />
            </div>
        </div>     
    )
}

export default ControlPanel