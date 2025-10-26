import Form from '../components/Form'
import { render, act, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import TestData from '../utils/test_data'

describe('App component tests', () => {

    const user = userEvent.setup()

    it('Renders the Form component', async () => {
        await act(() => render(<Form answers={TestData[0].answers} correctAnswer='a'/>))
        expect(true).toBeTruthy()
    })

    it('Checks only one checkbox', async () => {
        await act(() => render(<Form answers={TestData[0].answers} correctAnswer='a'/>))
        const inputs = screen.getAllByRole('checkbox') as HTMLInputElement[]

        // We click in the first input and then the second one
        await user.click(inputs[0])
        await user.click(inputs[1])

        expect(inputs[0].checked).toBeFalsy()
        expect(inputs[1].checked).toBeTruthy()
    })
})