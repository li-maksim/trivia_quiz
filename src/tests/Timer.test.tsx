import Timer from '../components/Timer'
import { vi } from 'vitest'
import { render, act, screen } from '@testing-library/react'

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

        //Waiting 3 seconds for timer to reach 0
        act(() => {
            vi.advanceTimersByTime(3000)
        })

        expect(onTimeout).toHaveBeenCalled()
    })

    it('Is green in the beginning', async () => {
        await act(() => render(<Timer seconds={3} hasStarted={true} onTimeout={onTimeout} />))

        const timer = screen.getByText("00:03")

        expect(timer.classList.contains("text-green-timer")).toBeTruthy()
    })

    it('Is orange in the middle', async () => {
        await act(() => render(<Timer seconds={6} hasStarted={true} onTimeout={onTimeout} />))

        const timer = screen.getByText("00:06")

        act(() => {
            vi.advanceTimersByTime(3000)
        })

        expect(timer.classList.contains("text-orange-timer")).toBeTruthy()
    })

    it('Is red in the end', async () => {
        await act(() => render(<Timer seconds={6} hasStarted={true} onTimeout={onTimeout} />))

        const timer = screen.getByText("00:06")

        act(() => {
            vi.advanceTimersByTime(5000)
        })

        expect(timer.classList.contains("text-red")).toBeTruthy()
    })
})