import Form from './Form'
import ControlPanel from './ControlPanel'
import { useState } from 'react'
import { type ContentProps } from '../utils/interfaces'
import { useFetchData } from '../utils/useFetchData'

function Content({hasStarted, onRestart} : ContentProps) {

    //Fetching questions from API
    const [data, loading, error] = useFetchData('https://quizapi.io/api/v1/questions?apiKey=xRDmaYsgDhyUiLWHT21yyxLmix8t8tzARKCgog2w&category=html&difficulty=Easy&limit=10')
    //Keeping the player's score and the current question
    const [questionNumber, setQuestionNumber] = useState<number>(0)
    const [score, setScore] = useState<number>(0)

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
        if (questionNumber < 10) {
            setQuestionNumber(questionNumber + 1)
        } else {
            alert('Congratulations!')
        }
    }

    function restart(): void {
        onRestart()
        setScore(0)
        setQuestionNumber(0)
    }

    function handleTimeout() {
        alert('Done!')
        restart()
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
                    restartFn={restart} 
                    questionNumber={questionNumber + 1} 
                    score={score}
                    seconds={1067}
                    hasStarted={hasStarted}
                    onTimeout={handleTimeout}
                />
            </div>
        </section>
    )
}

export default Content