import Input from '../components/Input'
import { render, act, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

describe('Input tests', () => {

    const user = userEvent.setup()

    const inputValue = false

    const handleInputClick = vi.fn()

    it('Renders the checkbox correctly', async () => {
        await act(() => render(<Input id="a" questionText="a" checked={inputValue} fn={handleInputClick} />))

        const input = screen.getByRole('checkbox') as HTMLInputElement

        expect(input.checked).toBe(false)
    })

    it('Checks the checkbox', async () => {
        await act(() => render(<Input id="a" questionText="a" checked={inputValue} fn={handleInputClick} />))

        const input = screen.getByRole('checkbox') as HTMLInputElement

        await user.click(input)

        expect(handleInputClick).toHaveBeenCalledOnce()
    })

    it('Unchecks the checkbox', async () => {
    await act(() => render(<Input id="a" questionText="a" checked={inputValue} fn={handleInputClick} />))

        const input = screen.getByRole('checkbox') as HTMLInputElement

        await user.click(input)
        await user.click(input)

        expect(handleInputClick).toHaveBeenCalledTimes(2)
    })
})