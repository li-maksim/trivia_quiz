import { type ButtonProps } from '../utils/interfaces'

function Button({btnType = "button", onClick, text, disabled = false}: ButtonProps) {

    if (!disabled) {
        return (
            <button
                type={btnType}
                onClick={onClick} 
                className="min-h-10 min-w-25 pl-2 pr-2 cursor-pointer bg-btn text-text-clr text-sm md:text-base font-semibold rounded-lg uppercase hover:border-2 active:bg-text-clr active:text-btn active:border-none"
            >
                {text}
            </button>
    )} else {
        return (
            <button
                disabled
                className="min-h-10 min-w-25 pl-2 pr-2 bg-gray-200 text-gray-400 text-sm md:text-base font-semibold rounded-lg uppercase"
            >
                {text}
            </button>
        )
    }
}

export default Button