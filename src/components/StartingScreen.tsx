import { type StartingScreenProps } from "../utils/interfaces"
import Button from './Button'

function StartingScreen({ startFn }: StartingScreenProps) {

    return (
        <section className="">
            <Button onClick={startFn} text="Start" />
        </section>
    )
}

export default StartingScreen