export interface InputProps {
    type?: string
    id: string
    questionText: string
}

export interface Question {
  question: string
  answers: {
    "answer_a": string
    "answer_b": string
    "answer_c": string
    "answer_d": string
    "answer_e"?: null,
    "answer_f"?: null
  }
  correct_answers: object
}

export type Questions = Question[]

export interface ContentProps {
  question: Question
}

export interface FormProps {
  answers: Question['answers']
  correctAnswer: string
}