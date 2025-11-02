import { useFetchData } from '../utils/useFetchData'
import Content from './Content'

function App() {

  // const [data, loading, error] = useFetchData('https://quizapi.io/api/v1/questions?apiKey=xRDmaYsgDhyUiLWHT21yyxLmix8t8tzARKCgog2w&category=html&difficulty=Easy&limit=10')

  // if (loading) return <div>Loading</div>
  // if (error) return <div>Sorry!</div>

  return (
    <Content />
  )
}

export default App
