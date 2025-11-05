import { type InputProps } from "../utils/interfaces"
import { Check } from 'lucide-react'

function Input({type = "checkbox", id, questionText, checked, fn}: InputProps) {

    if (type === "checkbox") {
        return (
                    <label
                    htmlFor={id}
                    className="flex items-center gap-3 p-3 border-2 border-header rounded-lg cursor-pointer"
                    >
                        <input
                            type="checkbox"
                            id={id}
                            checked={checked}
                            onChange={() => fn(id)}
                            className="peer hidden"
                        />
                        <span
                            className="
                            w-5 h-5 border-2 border-gray-400 rounded-md 
                            flex items-center justify-center 
                            peer-checked:bg-header peer-checked:border-header
                            transition-all duration-200
                            "
                            >
                            {checked && <Check size={16} strokeWidth={4} className="text-white" />}
                        </span>
                        <span className="text-lg">{questionText}</span>
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