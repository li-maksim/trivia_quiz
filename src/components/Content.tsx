import Form from './Form'
import ControlPanel from './ControlPanel'
import FinalScreen from './FinalScreen'
import { useState } from 'react'
import { type ContentProps } from '../utils/interfaces'
import { useFetchData } from '../utils/useFetchData'

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

    if (loading) return <div>Loading</div>
    if (error) return <div>Sorry!</div>

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
        <section className="w-full mt-8 pl-8 pr-8">
            <p className="text-xl text-center">{data[questionNumber].question}</p>
            <div className="flex justify-center gap-10 mt-8">
                <Form 
                    answers={data[questionNumber].answers} 
                    correctAnswer={findCorrectAnswer()}
                    onSubmit={onSubmit}
                    nextQuestion={nextQuestion}
                />
                <ControlPanel
                    questionNumber={questionNumber + 1} 
                    score={score}
                    seconds={300}
                    hasStarted={hasStarted && !showFinalScreen}
                    onTimeout={handleTimeout}
                />
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