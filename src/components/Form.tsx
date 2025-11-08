import { useState } from 'react'
import Input from "./Input"
import Button from './Button'
import type { FormProps, Values, Highlights } from "../utils/interfaces"

function Form({answers, correctAnswer, onSubmit}: FormProps) {

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
        const newValues = {...initialValues, [key]: true}
        setValues(newValues)
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

        // Delay to show correct option
        setTimeout(() => {
          resetForm()
        }, 1000)
      }

    return(
        <form 
            action="POST" 
            onSubmit={(e) => handleSubmit(e)}
            className="min-w-[35%]"
        >
            <div className="flex flex-col gap-5">
                <Input id="a" questionText={answers.answer_a} checked={values.a} fn={changeValues} highlight={highlights.a}/>
                <Input id="b" questionText={answers.answer_b} checked={values.b} fn={changeValues} highlight={highlights.b}/>
                <Input id="c" questionText={answers.answer_c} checked={values.c} fn={changeValues} highlight={highlights.c}/>
                <Input id="d" questionText={answers.answer_d} checked={values.d} fn={changeValues} highlight={highlights.d}/>
            </div>
            {submittedEmpty ? <div className="text-red">Error message</div> : null}
            <div className="mt-5 flex justify-end">
                <Button btnType="submit" text="Submit" disabled={isBtnDisabled} />
            </div>
        </form>
    )
}

export default Form