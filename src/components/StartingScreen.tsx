import { type StartingScreenProps } from "../utils/interfaces"

function StartingScreen({ startFn }: StartingScreenProps) {

    return (
        <section>
            <button onClick={startFn}>Start</button>
        </section>
    )
}

export default StartingScreen