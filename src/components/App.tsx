import { useState } from 'react'
import Header from './Header'
import StartingScreen from './StartingScreen'
import Content from './Content'

function App() {

  const [questionNumber, setQuestionNumber] = useState<number>(0)
  const [score, setScore] = useState<number>(0)
  const [hasStarted, setHasStarted] = useState<boolean>(false)

  function onSubmit(isAnswerCorrect : boolean): void {
    if (questionNumber < 10) setQuestionNumber(questionNumber + 1)
    if (isAnswerCorrect) setScore(score + 1)
  }

  function restart(): void {
    return
  }

  function start(): void {
    setHasStarted(true)
  }

  return (
    <>
        <Header restartFn={restart} questionNumber={questionNumber} score={score}/>
        {hasStarted
          ? <Content questionNumber={questionNumber + 1} onSubmit={onSubmit} />
          : <StartingScreen startFn={start} />
        }
    </>
  )
}

export default App
