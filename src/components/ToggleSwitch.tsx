import { type ToggleSwitchProps } from '../utils/interfaces'

function ToggleSwitch({flipped, switchFn}: ToggleSwitchProps) {

    return (
        <div>
            <button
            onClick={switchFn}
            className="relative w-14 h-7 rounded-full transition-colors bg-[#FFE6FF]"
            >
            <span
                className={`
                absolute top-1 left-1 w-5 h-5 rounded-full transition-all
                ${flipped ? "translate-x-7 bg-[#8C00FF]" : "bg-[var(--color-btn)]"}
                `}
            ></span>
            </button>
        </div>
    )
}

export default ToggleSwitch