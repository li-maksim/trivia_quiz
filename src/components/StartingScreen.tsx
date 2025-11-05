import { type StartingScreenProps } from "../utils/interfaces"
import Button from './Button'

function StartingScreen({ startFn }: StartingScreenProps) {

    return (
        <section className="flex w-full min-h-[calc(100vh-50px)] justify-center items-center">
            <Button onClick={startFn} text="Start" />
        </section>
    )
}

export default StartingScreen