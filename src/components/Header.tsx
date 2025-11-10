import { type HeaderProps } from '../utils/interfaces'
import { MessageCircleQuestionMark } from 'lucide-react'

function Header({ goHome }: HeaderProps) {

    return (
        <header className="sticky top-0 left-0 w-full h-[50px] bg-header flex justify-start gap-8 items-center pl-8 pr-8">
            <div className="flex gap-2 items-center">
                <MessageCircleQuestionMark className="w-8 h-8 text-btn"/>
                <h1 className="text-btn font-black text-xl">Quiz</h1>
            </div>
            <div onClick={goHome} className="text-btn font-black cursor-pointer text-lg hover:text-orange-timer">
                Home
            </div>
        </header>       
    )
}

export default Header