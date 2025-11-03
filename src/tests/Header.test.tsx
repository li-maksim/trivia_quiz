import Header from '../components/Header'
import { render, act, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

describe('Header tests', () => {

    const user = userEvent.setup()

    const restart = vi.fn()

    it('Restarts the quiz', async () => {
        await act(() => render(<Header restartFn={restart} questionNumber={1} score={1} />))

        const btn = screen.getByRole('button') as HTMLInputElement
        await user.click(btn)

        expect(restart).toHaveBeenCalled()
    })
})