import { type SelectProps } from "../utils/interfaces"

function Select({id, question, options, selected, onChange}: SelectProps) {

    const listOfOptions = options.map((option) => {
        return <option value={option} key={option}>{option}</option>
    })

    return (
        <label htmlFor={id}>
            <p>{question}</p>
            <select id={id} value={selected} onChange={e => onChange(e)}>
                {listOfOptions}
            </select>
        </label>
    )
}

export default Select