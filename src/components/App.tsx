import { useState } from 'react'
import Header from './Header'
import StartingScreen from './StartingScreen'
import Content from './Content'
import ControlPanel from './ControlPanel'

function App() {

  const [questionNumber, setQuestionNumber] = useState<number>(0)
  const [score, setScore] = useState<number>(0)
  const [hasStarted, setHasStarted] = useState<boolean>(false)
  const [isReady, setIsReady] = useState<boolean>(false)

  function onSubmit(isAnswerCorrect : boolean): void {
    if (questionNumber < 10) setQuestionNumber(questionNumber + 1)
    if (isAnswerCorrect) setScore(score + 1)
  }

  function restart(): void {
    setHasStarted(false)
    setIsReady(false)
    setScore(0)
    setQuestionNumber(0)
  }

  function start(): void {
    setHasStarted(true)
  }

  function handleTimeout() {
    alert('Done!')
    restart()
  }

  return (
    <div className="">
        <Header />
        {hasStarted
          ? <div className="flex max-w-[90%] justify-center gap-10">
              <Content 
                questionNumber={questionNumber} 
                onSubmit={onSubmit} 
                onFinishLoading={() => setIsReady(true)} 
              />
              <ControlPanel
                restartFn={restart} 
                questionNumber={questionNumber + 1} 
                score={score}
                seconds={1067}
                hasStarted={hasStarted && isReady}
                onTimeout={handleTimeout}
              />
            </div>
          : <StartingScreen startFn={start} />
        }
    </div>
  )
}

export default App
