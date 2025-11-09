import Form from '../components/Form'
import { render, act, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import TestData from '../utils/test_data'

describe('App component tests', () => {

    const user = userEvent.setup()

    const onSubmit = vi.fn()

    it('Renders the Form component', async () => {
        await act(() => render(<Form answers={TestData[0].answers} correctAnswer='a' onSubmit={onSubmit} nextQuestion={() => vi.fn()}/>))
        expect(true).toBeTruthy()
    })

    it('Checks only one checkbox', async () => {
        await act(() => render(<Form answers={TestData[0].answers} correctAnswer='a' onSubmit={onSubmit} nextQuestion={() => vi.fn()}/>))
        const inputs = screen.getAllByRole('checkbox') as HTMLInputElement[]

        // Clicking on the option A and then on the option B
        await user.click(inputs[0])
        await user.click(inputs[1])

        expect(inputs[0].checked).toBeFalsy()
        expect(inputs[1].checked).toBeTruthy()
    })

    it('Does not submit empty form', async () => {
        await act(() => render(<Form answers={TestData[0].answers} correctAnswer='a' onSubmit={onSubmit} nextQuestion={() => vi.fn()}/>))
        const btn = screen.getByRole('button')
    
        await user.click(btn)

        expect(onSubmit).not.toHaveBeenCalled()
    })

    it('Submits the form', async () => {
        await act(() => render(<Form answers={TestData[0].answers} correctAnswer='a' onSubmit={onSubmit} nextQuestion={() => vi.fn()}/>))
        const input = screen.getAllByRole('checkbox') as HTMLInputElement[]
        const btn = screen.getByRole('button')
        
        await user.click(input[0])
        await user.click(btn)

        await waitFor(() => {
            expect(onSubmit).toHaveBeenCalled()
        })
    })

    it('Submits the correct answer', async () => {
        await act(() => render(<Form answers={TestData[0].answers} correctAnswer='a' onSubmit={onSubmit} nextQuestion={() => vi.fn()}/>))
        const input = screen.getAllByRole('checkbox') as HTMLInputElement[]
        const btn = screen.getByRole('button')
        
        //Clicking on the right option and check if it calls onSubmit function with the correct argument
        await user.click(input[0])
        await user.click(btn)

        await waitFor(() => {
            expect(onSubmit).toHaveBeenCalledWith(true)
        })
    })

    it('Submits the wrong answer', async () => {
        await act(() => render(<Form answers={TestData[0].answers} correctAnswer='a' onSubmit={onSubmit}/>))
        const input = screen.getAllByRole('checkbox') as HTMLInputElement[]
        const btn = screen.getByRole('button')
        
        //Clicking on the wrong option and check if it calls onSubmit function with the correct argument
        await user.click(input[1])
        await user.click(btn)

        await waitFor(() => {
            expect(onSubmit).toHaveBeenCalledWith(false)
        }, {timeout: 1500})
    })
})