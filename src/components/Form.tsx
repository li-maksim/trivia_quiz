import Input from "./Input"
import type { FormProps } from "../interfaces"

function Form({answers, correctAnswer}: FormProps) {

    function onSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault()
    }

    return(
        <form action="POST" onSubmit={(e) => onSubmit(e)}>
            <div>
                <Input id="a" questionText={answers.answer_a}/>
                <Input id="b" questionText={answers.answer_b}/>
                <Input id="c" questionText={answers.answer_c}/>
                <Input id="d" questionText={answers.answer_d}/>
            </div>
            <button>Submit</button>
        </form>
    )
}

export default Form