import App from '../components/App'
import { render } from '@testing-library/react'

describe('First test', () => {
    it('Tests', () => {
        render(<App />)
        expect(true).toBeTruthy()
    })
})