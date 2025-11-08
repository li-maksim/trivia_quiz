export interface InputProps {
    type?: string,
    id: string,
    questionText: string,
    checked?: boolean,
    highlight?: null | "green" | "red",
    fn: {
      (key: string): void
    }
}

export interface Question {
  question: string,
  answers: {
    "answer_a": string,
    "answer_b": string,
    "answer_c": string,
    "answer_d": string,
    "answer_e"?: null,
    "answer_f"?: null
  },
  correct_answers: object
}

export type Questions = Question[]

export interface ContentProps {
  hasStarted: boolean,
  onRestart: {
    (): void
  }
}

export interface FormProps {
  answers: Question['answers'],
  correctAnswer: string,
  onSubmit: {
    (isCorrect: boolean): void
  }
}

export interface StartingScreenProps {
  startFn: {
    (): void
  }
}

export interface TimerProps {
  seconds: number,
  hasStarted: boolean,
  onTimeout: {
    (): void
  }
}

export interface ControlPanelProps extends TimerProps {
  restartFn: {
    (): void
  },
  questionNumber: number,
  score: number
}

export interface ButtonProps {
  btnType?: "submit" | "reset" | "button"
  onClick?: {
    (): void
  },
  text: string,
  disabled?: boolean
}

export interface Values {
  a: boolean,
  b: boolean,
  c: boolean,
  d: boolean
}

export interface Highlights {
  a: null | "green" | "red",
  b: null | "green" | "red",
  c: null | "green" | "red",
  d: null | "green" | "red"
}