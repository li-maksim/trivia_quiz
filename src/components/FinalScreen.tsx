import Button from "./Button"
import { type FinalScreenProps } from "../utils/interfaces"

function FinalScreen({show, message, score, completedQuestions, goHome}: FinalScreenProps) {

    if (show) return(
        <div className="fixed inset-0 flex items-center justify-center bg-black/40 z-50 backdrop-blur-sm">
            <div className="min-w-[50%] min-h-[50%] bg-white flex flex-col justify-center items-center gap-5">
                <div className="text-xl">{message}</div>
                    {completedQuestions < 10 
                        && <div>{"You completed " + completedQuestions + " out of 10 questions."}</div>
                    }
                <div className="text-xl">Final score: {score}</div>
                <Button onClick={goHome} text="Restart" />
            </div>
        </div>
    )
}

export default FinalScreen