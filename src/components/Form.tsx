import { useState } from 'react'
import Input from "./Input"
import type { FormProps, Values } from "../utils/interfaces"

function Form({answers, correctAnswer, onSubmit}: FormProps) {

    const initialValues = {
        a: false,
        b: false,
        c: false,
        d: false
    }
    
    const [values, setValues] = useState<Values>(initialValues)
    const [submittedEmpty, setSumbittedEmpty] = useState<boolean>(false)

    function changeValues(key: string): void {
        const newValues = {...initialValues, [key]: true}
        setValues(newValues)
    }

    function checkIfAnOptionWasPicked() {
        if (JSON.stringify(initialValues) === JSON.stringify(values)) {
            return false
        } else {
            return true
        }
    }

    function checkTheAnswer() {
        const answer = Object.keys(values).find(key => values[key as keyof typeof values] === true)

        if (answer === correctAnswer) {
            return true
        } else {
            return false
        }
    }

    function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault()
        if (!checkIfAnOptionWasPicked()) {
            setSumbittedEmpty(true)
        } else {
            setSumbittedEmpty(false)
            const isAnswerCorrect = checkTheAnswer()
            onSubmit(isAnswerCorrect)
        }
    }

    return(
        <form action="POST" onSubmit={(e) => handleSubmit(e)}>
            <div>
                <Input id="a" questionText={answers.answer_a} checked={values.a} fn={changeValues}/>
                <Input id="b" questionText={answers.answer_b} checked={values.b} fn={changeValues}/>
                <Input id="c" questionText={answers.answer_c} checked={values.c} fn={changeValues}/>
                <Input id="d" questionText={answers.answer_d} checked={values.d} fn={changeValues}/>
            </div>
            {!submittedEmpty ? <div>Error message</div> : null}
            <button>Submit</button>
        </form>
    )
}

export default Form