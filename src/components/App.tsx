import { useState } from 'react'
import Header from './Header'
import StartingScreen from './StartingScreen'
import Content from './Content'

function App() {

  const [hasStarted, setHasStarted] = useState<boolean>(false)

  function start(): void {
    setHasStarted(true)
  }

  function restart(): void {
    setHasStarted(false)
  }

  return (
    <div className="">
        <Header />
        {hasStarted
          ? <Content hasStarted={hasStarted} onRestart={restart}/>
          : <StartingScreen startFn={start} />
        }
    </div>
  )
}

export default App
