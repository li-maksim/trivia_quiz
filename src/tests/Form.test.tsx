import Form from '../components/Form'
import { render, act, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import TestData from '../utils/test_data'

describe('App component tests', () => {

    const user = userEvent.setup()

    const onSubmit = vi.fn()
    const goToNext = vi.fn()

    it('Renders the Form component', async () => {
        await act(() => render(<Form answers={TestData[0].answers} correctAnswer='a' onSubmit={onSubmit} nextQuestion={goToNext}/>))
        expect(true).toBeTruthy()
    })

    it('Checks only one checkbox', async () => {
        await act(() => render(<Form answers={TestData[0].answers} correctAnswer='a' onSubmit={onSubmit} nextQuestion={goToNext}/>))
        const inputs = screen.getAllByRole('checkbox') as HTMLInputElement[]

        // Clicking on the option A and then on the option B
        await user.click(inputs[0])
        await user.click(inputs[1])

        expect(inputs[0].checked).toBeFalsy()
        expect(inputs[1].checked).toBeTruthy()
    })

    it('Does not submit empty form', async () => {
        await act(() => render(<Form answers={TestData[0].answers} correctAnswer='a' onSubmit={onSubmit} nextQuestion={goToNext}/>))
        const btn = screen.getByText('Submit')
    
        await user.click(btn)

        expect(onSubmit).not.toHaveBeenCalled()
    })

    it('Submits the form', async () => {
        await act(() => render(<Form answers={TestData[0].answers} correctAnswer='a' onSubmit={onSubmit} nextQuestion={goToNext}/>))
        const input = screen.getAllByRole('checkbox') as HTMLInputElement[]
        const btn = screen.getByText('Submit')
        
        await user.click(input[0])
        await user.click(btn)

        expect(onSubmit).toHaveBeenCalled()
    })

    it('Submits the correct answer', async () => {
        await act(() => render(<Form answers={TestData[0].answers} correctAnswer='a' onSubmit={onSubmit} nextQuestion={goToNext}/>))
        const input = screen.getAllByRole('checkbox') as HTMLInputElement[]
        const btn = screen.getByText('Submit')
        
        //Clicking on the right option and check if it calls onSubmit function with the correct argument
        await user.click(input[0])
        await user.click(btn)

        expect(onSubmit).toHaveBeenCalledWith(true)
    })

    it('Submits the wrong answer', async () => {
        await act(() => render(<Form answers={TestData[0].answers} correctAnswer='a' onSubmit={onSubmit} nextQuestion={goToNext}/>))
        const input = screen.getAllByRole('checkbox') as HTMLInputElement[]
        const btn = screen.getByText('Submit')
        
        //Clicking on the wrong option and check if it calls onSubmit function with the correct argument
        await user.click(input[1])
        await user.click(btn)

        expect(onSubmit).toHaveBeenCalledWith(false)
    })
    
    it('Disables "Next" button initially', async () => {
        await act(() => render(<Form answers={TestData[0].answers} correctAnswer='a' onSubmit={onSubmit} nextQuestion={goToNext}/>))
        const btn = screen.getByText('Next')
        
        //Clicking on 'Next button' should not call function
        await user.click(btn)

        expect(goToNext).not.toHaveBeenCalled()
    })

    it('Disables "Submit" button after submitting the form', async () => {
        await act(() => render(<Form answers={TestData[0].answers} correctAnswer='a' onSubmit={onSubmit} nextQuestion={goToNext}/>))
        const btn = screen.getByText('Submit')
        const input = screen.getAllByRole('checkbox') as HTMLInputElement[]
        
        //Clicking on 'Submit' button twice should call onSubmit() only once
        await user.click(input[0])
        await user.click(btn)
        await user.click(btn)

        expect(onSubmit).toHaveBeenCalledOnce()
    })

    it('Goes to the next question', async () => {
        await act(() => render(<Form answers={TestData[0].answers} correctAnswer='a' onSubmit={onSubmit} nextQuestion={goToNext}/>))
        const submit = screen.getByText('Submit')
        const next = screen.getByText('Next')
        const input = screen.getAllByRole('checkbox') as HTMLInputElement[]
        
        await user.click(input[0])
        await user.click(submit)
        await user.click(next)

        expect(goToNext).toHaveBeenCalled()
    })
})