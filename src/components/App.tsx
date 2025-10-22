import { useEffect, useState } from 'react'
import { type Questions} from '../interfaces'
import Content from './Content'



function App() {

  const [questionPack, setQuestionPack] = useState<Questions>([])

  useEffect(() => {
    const fetchData = async function() {
      try {
        const response = await fetch('https://quizapi.io/api/v1/questions?apiKey=xRDmaYsgDhyUiLWHT21yyxLmix8t8tzARKCgog2w&category=html&difficulty=Easy&limit=10')
        const data = await response.json()
        setQuestionPack(data)
      } catch (error) {
        console.error("Oops!", error)
      }
    }
    fetchData()
  }, [])

  return (
    <div className="text-3xl font-bold underline">
      {questionPack.length ? <Content question={questionPack[0]} /> : null}
    </div>
  )
}

export default App
