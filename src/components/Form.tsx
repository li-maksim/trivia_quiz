import { useState } from 'react'
import Input from "./Input"
import Button from './Button'
import { type FormProps, type Values, type Highlights } from "../utils/interfaces"

function Form({answers, correctAnswer, onSubmit, nextQuestion}: FormProps) {

    const initialValues = {
        a: false,
        b: false,
        c: false,
        d: false
    }

    const initialHighlights: Highlights = {
        a: null,
        b: null,
        c: null,
        d: null
    }
    
    const [values, setValues] = useState<Values>(initialValues)
    const [submittedEmpty, setSubmittedEmpty] = useState<boolean>(false)
    const [highlights, setHighlights] = useState<Highlights>(initialHighlights)
    const [isBtnDisabled, setIsBtnDisabled] = useState<boolean>(false)

    function changeValues(key: string): void {
        if (!isBtnDisabled) {
            const newValues = {...initialValues, [key]: true}
            setValues(newValues)
        }
    }

    function checkIfAnOptionWasPicked(): boolean {
        if (JSON.stringify(initialValues) === JSON.stringify(values)) {
            return false
        } else {
            return true
        }
    }

    function checkAndHighlight(): boolean {
        const answer = Object.keys(values).find(
          key => values[key as keyof typeof values]
        ) as keyof typeof values | undefined
    
        if (!answer) return false
    
        const isCorrect = answer === correctAnswer
    
        if (isCorrect) {
          setHighlights(prev => ({ ...prev, [answer]: "green" }))
        } else {
          setHighlights(prev => ({
            ...prev,
            [answer]: "red",
            [correctAnswer]: "green",
          }))
        }
    
        return isCorrect
      }
    
    function resetForm() {
    setValues(initialValues)
    setHighlights(initialHighlights)
    setIsBtnDisabled(false)
    }

    function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()

    if (!checkIfAnOptionWasPicked()) {
        setSubmittedEmpty(true)
        return
    }

    setSubmittedEmpty(false)
    setIsBtnDisabled(true)

    const isCorrect = checkAndHighlight()
    onSubmit(isCorrect)
    }

    function goToNext() {
        nextQuestion()
        resetForm()
    }

    return(
        <form 
            action="POST" 
            onSubmit={(e) => handleSubmit(e)}
        >
            <div className="flex flex-col gap-5">
                <Input type="radio" id="a" questionText={answers.answer_a} checked={values.a} fn={changeValues} highlight={highlights.a}/>
                <Input type="radio" id="b" questionText={answers.answer_b} checked={values.b} fn={changeValues} highlight={highlights.b}/>
                <Input type="radio" id="c" questionText={answers.answer_c} checked={values.c} fn={changeValues} highlight={highlights.c}/>
                <Input type="radio" id="d" questionText={answers.answer_d} checked={values.d} fn={changeValues} highlight={highlights.d}/>
            </div>
            {submittedEmpty ? <div className="text-[var(--color-red)]">Please choose an option</div> : null}
            <div className="mt-5 flex justify-center md:justify-end gap-5">
                <Button btnType="submit" text="Submit" disabled={isBtnDisabled} />
                <Button text="Next" onClick={goToNext} disabled={!isBtnDisabled} />
            </div>
        </form>
    )
}

export default Form