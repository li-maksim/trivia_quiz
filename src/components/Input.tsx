import { type InputProps } from "../utils/interfaces"

function Input({type = "radio", id, questionText, checked, fn, highlight}: InputProps) {

    if (type === "radio") {
        return (
                    <label
                    htmlFor={id}
                    className={`flex items-center gap-3 p-3 rounded-lg cursor-pointer
                        ${highlight === "green" ? "border-2 border-green-answer bg-green-answer" 
                          : highlight === "red" ? "border-2 border-red bg-red"
                          : "border-2 border-header"}`}
                    >
                        <input
                            type="radio"
                            id={id}
                            checked={checked}
                            onChange={() => fn(id)}
                            className="peer hidden"
                        />
                        <span
                            className="
                            min-w-5 min-h-5 border-2 border-gray-400 rounded-full
                            flex items-center justify-center
                            transition-all duration-200
                            peer-checked:border-header peer-checked:bg-header
                            "
                        >
                        {checked && (
                        <span className="w-2.5 h-2.5 bg-white rounded-full"></span>
                        )}
                        </span>
                        <span className="text-sm lg:text-lg">{questionText}</span>
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