import { type HeaderProps } from '../utils/interfaces'
import ToggleSwitch from './ToggleSwitch'
import { MessageCircleQuestionMark } from 'lucide-react'
import { Sun, MoonStar } from 'lucide-react'

function Header({ goHome, flipped, switchFn }: HeaderProps) {

    return (
        <header className="sticky top-0 left-0 w-full h-[50px] bg-[var(--color-header)] flex justify-between items-center pl-8 pr-8 max-[400px]:">
            <div className="flex gap-14 items-center cursor-pointer">
                <div className="flex gap-2 items-center" onClick={goHome}>
                    <MessageCircleQuestionMark className="w-8 h-8 text-[var(--color-btn)]"/>
                    <h1 className="text-[var(--color-btn)] font-black text-xl">Quiz</h1>
                </div>
                <div onClick={goHome} className="text-[var(--color-btn)] font-black cursor-pointer text-lg hover:text-[var(--color-orange-timer)] max-[460px]:hidden">
                    Home
                </div>
            </div>
            <div className="mt-2 flex gap-2">
                <Sun size={28} color={'var(--color-btn)'} />
                <ToggleSwitch flipped={flipped} switchFn={switchFn} />
                <MoonStar size={28} strokeWidth={1.5} color={'var(--color-btn)'} />
            </div>
        </header>       
    )
}

export default Header