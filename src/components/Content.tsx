import Form from './Form'
import ControlPanel from './ControlPanel'
import Timer from './Timer'
import FinalScreen from './FinalScreen'
import { useState } from 'react'
import { type ContentProps } from '../utils/interfaces'
import { useFetchData } from '../utils/useFetchData'
import { LoaderCircle } from 'lucide-react'

function Content({hasStarted, goHome} : ContentProps) {

    const initialMessage = "You've completed the Quiz!"

    //Fetching questions from API
    const [data, loading, error] = useFetchData('https://quizapi.io/api/v1/questions?apiKey=xRDmaYsgDhyUiLWHT21yyxLmix8t8tzARKCgog2w&category=html&difficulty=Easy&limit=10')
    //Keeping the player's score and the current question
    const [questionNumber, setQuestionNumber] = useState<number>(0)
    const [score, setScore] = useState<number>(0)
    //Showing final screen. This state will be also used to stop timer.
    const [showFinalScreen, setShowFinalScreen] = useState<boolean>(false)
    const [finalsScreenMessage, setShowFinalScreenMessage] = useState<string>(initialMessage)

    if (loading) return (
        <div className="w-full h-[calc(100vh-50px)] flex items-center justify-center">
            <div className="animate-spin">
                <LoaderCircle size={64} />
            </div>
        </div>
    )
    if (error) return (
        <div className="w-full h-[calc(100vh-50px)] flex items-center justify-center">
        <div className="text-red">
            Sorry, we have a little problem.
        </div>
    </div>
    )

    function findCorrectAnswer(): string {
        const possibleAnswers = data[questionNumber].correct_answers

        const correctAnswer = Object.keys(possibleAnswers)
            .find(key => possibleAnswers[key as keyof typeof possibleAnswers] === 'true')
        
        //Returning just the letter of the option (a or b or c, etc.)
        return correctAnswer?.split("")[7] ?? ""
    }

    function onSubmit(isAnswerCorrect : boolean): void {
        if (isAnswerCorrect) setScore(score + 1)
    }

    function nextQuestion(): void {
        if (questionNumber < 9) {
            setQuestionNumber(questionNumber + 1)
        } else {
            //Finishing the quiz if the player answered all questions
            setShowFinalScreenMessage(initialMessage)
            setShowFinalScreen(true)
        }
    }

    function handleTimeout() {
        setShowFinalScreenMessage("Sorry, time's up!")
        setShowFinalScreen(true)
    }

    return (
        <section className="lg:w-[70%] m-0 m-auto mt-8 pl-8 pr-8 flex flex-col">
            {/* Only for mobile devices */}
            <div className="flex justify-between md:hidden">
                <div >
                    <span className="text-base sm:text-xl text-header font-black">Question:</span> 
                    <span className="text-base sm:text-xl">
                        {" " + questionNumber}
                        <span className="text-gray-500">/10</span>
                    </span>
                </div>
                <div>
                    <span className="text-base sm:text-xl text-header font-black">Score:</span> 
                    <span className="text-base sm:text-xl">
                        {" " + score}
                        <span className="text-gray-500">/10</span>
                    </span>
                </div>
            </div>

            <div className="flex items-center justify-between mt-8 md:mt-0 max-[480px]:flex-col-reverse max-[480px]:justify-center max-[480px]:gap-4 max-[480px]:mt-4">
                <p className="text-sm sm:text-base md:text-xl">{data[questionNumber].question}</p>
                {/* Timer for mobile devices */}
                <div className="md:hidden">
                    <Timer seconds={300} hasStarted={hasStarted && !showFinalScreen} onTimeout={handleTimeout}/>
                </div>
            </div>

            <div className="flex w-full mt-8 justify-center md:justify-between gap-8 max-[480px]:mt-4">
                <div className="min-w-[80%] md:min-w-[50%]">
                    <Form 
                        answers={data[questionNumber].answers} 
                        correctAnswer={findCorrectAnswer()}
                        onSubmit={onSubmit}
                        nextQuestion={nextQuestion}
                    />
                </div>
                <div className="hidden md:block min-w-[40%]">
                    <ControlPanel
                        questionNumber={questionNumber + 1} 
                        score={score}
                        seconds={300}
                        hasStarted={hasStarted && !showFinalScreen}
                        onTimeout={handleTimeout}
                    />
                </div>
            </div>
            <FinalScreen 
                show={showFinalScreen} 
                message={finalsScreenMessage}
                score={score} 
                completedQuestions={questionNumber}
                goHome={goHome}
            />
        </section>
    )
}

export default Content