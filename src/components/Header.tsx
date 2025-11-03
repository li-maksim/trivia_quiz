import { MessageCircleQuestionMark } from 'lucide-react'
import { type HeaderProps } from '../utils/interfaces'

function Header({restartFn, questionNumber, score}: HeaderProps) {

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
            <div></div>
            <div>
                <button onClick={restartFn}>Restart</button>
            </div>
        </header>       
    )
}

export default Header