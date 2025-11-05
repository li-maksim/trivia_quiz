import { MessageCircleQuestionMark } from 'lucide-react'
import { type HeaderProps } from '../utils/interfaces'
import Timer from './Timer'
import Button from './Button'

function Header({restartFn, questionNumber, score, seconds, hasStarted, onTimeout}: HeaderProps) {

    return (
        <header className="sticky top-0 left-0 w-full h-[50px] bg-header flex justify-between items-center pl-8 pr-8">
            <div className="flex gap-2 items-center">
                <MessageCircleQuestionMark className="w-8 h-8 text-btn"/>
                <h1 className="text-btn font-black text-xl">Quiz</h1>
            </div>
            {hasStarted
                && (
                <>
                    <div className="text-btn font-bold">
                    Question #{questionNumber}
                    </div>
                    <div className="text-btn font-bold">
                        Score: {score}/10
                    </div>
                    <Timer seconds={seconds} hasStarted={hasStarted} onTimeout={onTimeout} />
                </>)
            }
            <div>
                <Button onClick={restartFn} text="Restart" />
            </div>
        </header>       
    )
}

export default Header