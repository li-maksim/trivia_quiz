import Form from "./Form"
import { type ContentProps} from '../utils/interfaces'

function Content({ question }: ContentProps) {

    return (
        <section>
            <p>Question: {question.question}</p>
            <Form answers={question.answers} />
        </section>
    )
}

export default Content