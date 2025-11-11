import Timer from './Timer'
import { type ControlPanelProps } from '../utils/interfaces'

function ControlPanel({ questionNumber, score, seconds, hasStarted, onTimeout}: ControlPanelProps) {

    return (
        <div className="w-full h-full bg-bg-clr rounded-lg flex flex-col justify-between box-border p-8">
            <div>
                <div className="">
                    <span className="text-2xl text-header font-black">Question:</span> 
                    <span className="text-2xl">
                        {" " + questionNumber}
                        <span className="text-gray-500">/10</span>
                    </span>
                </div>
                <div className="mt-5">
                    <span className="text-2xl text-header font-black">Score:</span> 
                    <span className="text-2xl">
                        {" " + score}
                        <span className="text-gray-500">/10</span>
                    </span>
                </div>
            </div>
            <div className="flex justify-center">
            <Timer seconds={seconds} hasStarted={hasStarted} onTimeout={onTimeout} />
            </div>
        </div>     
    )
}

export default ControlPanel