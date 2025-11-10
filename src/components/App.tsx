import { useState } from 'react'
import Header from './Header'
import StartingScreen from './StartingScreen'
import Content from './Content'

function App() {

  const [hasStarted, setHasStarted] = useState<boolean>(false)

  function start(): void {
    setHasStarted(true)
  }

  function goHome(): void {
    setHasStarted(false)
  }

  return (
    <div className="">
        <Header goHome={goHome} />
        {hasStarted
          ? <Content hasStarted={hasStarted} goHome={goHome} />
          : <StartingScreen startFn={start} />
        }
    </div>
  )
}

export default App
