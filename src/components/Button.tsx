import { type ButtonProps } from '../utils/interfaces'

function Button({btnType = "button", onClick, text, disabled = false}: ButtonProps) {

    if (!disabled) {
        return (
            <button
                type={btnType}
                onClick={onClick} 
                className="min-h-10 min-w-25 cursor-pointer bg-btn text-text-clr text-l font-semibold rounded-lg uppercase hover:border-2 active:bg-text-clr active:text-btn"
            >
                {text}
            </button>
    )} else {
        return (
            <button
                disabled
                className="min-h-10 min-w-25 bg-gray-200 text-gray-400 text-l font-semibold rounded-lg uppercase hover:border-2 active:bg-text-clr active:text-btn"
            >
                {text}
            </button>
        )
    }
}

export default Button