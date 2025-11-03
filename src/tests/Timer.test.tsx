import Timer from '../components/Timer'
import { vi } from 'vitest'
import { render, act } from '@testing-library/react'

describe('Timer tests', () => {

    beforeEach(() => {
        vi.useFakeTimers()
    })
    
    afterEach(() => {
        vi.useRealTimers()
    })

    const onTimeout = vi.fn()

    it('Calls onTimeout after countdown ends', async () => {
        await act(() => render(<Timer seconds={3} hasStarted={true} onTimeout={onTimeout} />))

        //We wait 3 seconds for timer to reach 0
        act(() => {
            vi.advanceTimersByTime(3000)
        })

        expect(onTimeout).toHaveBeenCalled()
    })
})