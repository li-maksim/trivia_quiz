import { type ButtonProps } from '../utils/interfaces'

function Button({btnType = "button", onClick, text}: ButtonProps) {

    return (
        <button 
            type={btnType}
            onClick={onClick} 
            className="min-h-10 min-w-25 cursor-pointer bg-btn text-text-clr text-l rounded-lg"
        >
            {text}
        </button>
    )
}

export default Button