import { type InputProps } from "../utils/interfaces"

function Input({type = "checkbox", id, questionText}: InputProps) {

    return (
        <label htmlFor="">
            <input type={type} id={id} />
            {questionText}
        </label>
    )
}

export default Input