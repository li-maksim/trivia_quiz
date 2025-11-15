import { useState, useEffect } from 'react'
import Header from './Header'
import StartingScreen from './StartingScreen'
import Content from './Content'

function App() {

  const [hasStarted, setHasStarted] = useState<boolean>(false)
  const [isDark, setIsDark] = useState<boolean>(false)

  useEffect(() => {
    const root = document.documentElement;
    if (isDark) {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
  }, [isDark]);

  function start(): void {
    setHasStarted(true)
  }

  function goHome(): void {
    setHasStarted(false)
  }

  return (
    <div className="bg-[var(--color-bg)] min-h-[100vh]">
        <Header goHome={goHome} flipped={isDark} switchFn={() => setIsDark(prev => !prev)} />
        {hasStarted
          ? <Content hasStarted={hasStarted} goHome={goHome} />
          : <StartingScreen startFn={start} />
        }
    </div>
  )
}

export default App
