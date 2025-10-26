import { type InputProps } from "../utils/interfaces"

function Input({type = "checkbox", id, questionText, checked, fn}: InputProps) {

    if (type === "checkbox") {
        return (
            <label htmlFor={id}>
                <input 
                type={type} 
                id={id}
                checked={checked}
                onChange={() => fn(id)} 
                />
                {questionText}
            </label>
        )
    } else {
        return (
            <label htmlFor={id}>
                <input 
                type={type} 
                id={id}
                onClick={() => fn(id)} 
                />
                {questionText}
            </label>
        )
    }
}

export default Input