import Content from '../components/Content'
import TestData from '../utils/test_data'
import { render, act } from '@testing-library/react'

globalThis.fetch = vi.fn(() => {
    Promise.resolve({
        json: () => 
            Promise.resolve({
                TestData
            })
    })
}) as unknown as typeof fetch

describe('Content component tests', () => {
    it('Fetches data on startup', async () => {
        await act(() => render(<Content hasStarted={true} onRestart={() => vi.fn()} />))
        expect(fetch).toHaveBeenCalledOnce()
    })
})