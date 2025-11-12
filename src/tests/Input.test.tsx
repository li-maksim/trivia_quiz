import Input from '../components/Input'
import { render, act, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

describe('Input tests', () => {

    const user = userEvent.setup()

    const inputValue = false

    const handleInputClick = vi.fn()

    it('Clicks the button', async () => {
        await act(() => render(<Input id="a" questionText="a" checked={inputValue} fn={handleInputClick} />))

        const input = screen.getByRole('radio') as HTMLInputElement

        await user.click(input)

        expect(handleInputClick).toHaveBeenCalledOnce()
    })
})