import { type ButtonProps } from '../utils/interfaces'

function Button({btnType = "button", onClick, text, disabled = false}: ButtonProps) {

    if (!disabled) {
        return (
            <button
                type={btnType}
                onClick={onClick} 
                className="min-h-10 min-w-25 pl-2 pr-2 cursor-pointer bg-[var(--color-btn)] text-[var(--color-text-btn)] text-sm md:text-base font-semibold rounded-lg uppercase hover:bg-[var(--color-orange-timer)] active:bg-[var(--color-text-btn)] active:text-[var(--color-btn)] active:border-none"
            >
                {text}
            </button>
    )} else {
        return (
            <button
                disabled
                className="min-h-10 min-w-25 pl-2 pr-2 bg-[var(--color-disabled-btn)] text-gray-400 text-sm md:text-base font-semibold rounded-lg uppercase"
            >
                {text}
            </button>
        )
    }
}

export default Button