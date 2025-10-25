import App from '../components/App'
import { render, act } from '@testing-library/react'

globalThis.fetch = vi.fn(() => {
    Promise.resolve({
        json: () => 
            Promise.resolve({
                question: "question?",
                answers: {a: 'a', b: 'b'}
            })
    })
}) as unknown as typeof fetch

describe('App component tests', () => {
    it('Fetches data on startup', async () => {

        await act(() => render(<App />))
        expect(fetch).toHaveBeenCalledOnce()
    })
})