import { useState } from 'react'
import Input from "./Input"
import type { FormProps, Values } from "../utils/interfaces"

function Form({answers, correctAnswer}: FormProps) {

    function onSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault()
    }

    const initialValues = {
        a: false,
        b: false,
        c: false,
        d: false
    }
    
    const [values, setValues] = useState<Values>(initialValues)

    function changeValues(key: string): void {
        const newValues = {...initialValues, [key]: true}
        setValues(newValues)
    }

    return(
        <form action="POST" onSubmit={(e) => onSubmit(e)}>
            <div>
                <Input id="a" questionText={answers.answer_a} checked={values.a} fn={changeValues}/>
                <Input id="b" questionText={answers.answer_b} checked={values.b} fn={changeValues}/>
                <Input id="c" questionText={answers.answer_c} checked={values.c} fn={changeValues}/>
                <Input id="d" questionText={answers.answer_d} checked={values.d} fn={changeValues}/>
            </div>
            <button>Submit</button>
        </form>
    )
}

export default Form