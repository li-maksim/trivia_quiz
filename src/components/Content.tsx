import { useState } from 'react'
import Form from './Form'
import { useFetchData } from '../utils/useFetchData'

function Content() {

    const [data, loading, error] = useFetchData('https://quizapi.io/api/v1/questions?apiKey=xRDmaYsgDhyUiLWHT21yyxLmix8t8tzARKCgog2w&category=html&difficulty=Easy&limit=10')
    const [questionNumber, setQuestionNumber] = useState<number>(0)

    if (loading) return <div>Loading</div>
    if (error) return <div>Sorry!</div>

    console.log(data)

    function findCorrectAnswer(): string {
        const possibleAnswers = data[questionNumber].correct_answers

        const correctAnswer = Object.keys(possibleAnswers)
            .find(key => possibleAnswers[key as keyof typeof possibleAnswers] === true)
        
        //We return just the letter of the option (a or b or c, etc.)
        return correctAnswer?.split("")[7] ?? ""
    }

    function onSubmit(): void {

    }

    return (
        <section>
            <p>Question: {data[questionNumber].question}</p>
            <Form 
                answers={data[questionNumber].answers} 
                correctAnswer={findCorrectAnswer()}
                onSubmit={onSubmit}
            />
        </section>
    )
}

export default Content