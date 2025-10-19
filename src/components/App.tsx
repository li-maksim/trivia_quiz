import { useEffect, useState } from "react"

interface Question {
  type: "multiple",
  difficulty: "easy" | "medium" | "hard",
  category: string,
  question: string,
  correct_answer: string,
  incorrect_answers: string[]
}

type Questions = Question[]

function App() {

  const [questionPack, setQuestionPack] = useState<Questions>([])

  useEffect(() => {
    const fetchData = async function() {
      try {
        const response = await fetch('https://opentdb.com/api.php?amount=10&category=9&difficulty=medium&type=multiple')
        const data = await response.json()
        setQuestionPack(data.results)
      } catch (error) {
        console.error("Oops!", error)
      }
    }
    fetchData()
  }, [])

  return (
    <div className="text-3xl font-bold underline">Hello World</div>
  )
}

export default App
