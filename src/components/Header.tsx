import { MessageCircleQuestionMark } from 'lucide-react'
import { type HeaderProps } from '../utils/interfaces'
import Timer from './Timer'

function Header({restartFn, questionNumber, score, seconds, hasStarted, onTimeout}: HeaderProps) {

    return (
        <header>
            <div>
                <MessageCircleQuestionMark />
                <h1>Quiz</h1>
            </div>
            <div>
                Question #{questionNumber}
            </div>
            <div>
                Score: {score}/10
            </div>
            <Timer seconds={seconds} hasStarted={hasStarted} onTimeout={onTimeout} />
            <div>
                <button onClick={restartFn}>Restart</button>
            </div>
        </header>       
    )
}

export default Header