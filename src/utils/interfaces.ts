import type { ChangeEvent } from "react";

export interface InputProps {
  type?: string;
  id: string;
  questionText: string;
  checked?: boolean;
  highlight?: null | "green" | "red";
  fn: {
    (key: string): void;
  };
}

export interface Question {
  question: string;
  answers: {
    answer_a: string;
    answer_b: string;
    answer_c: string;
    answer_d: string;
    answer_e?: null;
    answer_f?: null;
  };
  correct_answers: object;
}

export type Questions = Question[];

export interface ContentProps {
  hasStarted: boolean,
  goHome: {
    (): void;
  },
  url: string,
  numOfQuestions: number
}

export interface FormProps {
  answers: Question["answers"];
  correctAnswer: string;
  onSubmit: {
    (isCorrect: boolean): void;
  };
  nextQuestion: {
    (): void;
  };
}


export interface SelectedOptions {
  numOfQuestions: string,
  category: string,
  difficulty: string
}

export interface StartingScreenProps {
  startFn: {
    (): void;
  },
  values: SelectedOptions,
  changeOption: {
    numOfQuestions(e: ChangeEvent): void,
    category(e: ChangeEvent): void,
    difficulty(e: ChangeEvent): void
  }
}

export interface TimerProps {
  seconds: number;
  hasStarted: boolean;
  onTimeout: {
    (): void;
  };
}

export interface ControlPanelProps extends TimerProps {
  questionNumber: number;
  score: number;
  numOfQuestions: number
}

export interface ButtonProps {
  btnType?: "submit" | "reset" | "button";
  onClick?: {
    (): void;
  };
  text: string;
  disabled?: boolean;
}

export interface FinalScreenProps {
  show: boolean;
  message: string;
  score: number;
  completedQuestions: number;
  goHome: {
    (): void;
  };
  numOfQuestions: number
}

export interface ToggleSwitchProps {
  flipped: boolean;
  switchFn: {
    (): void;
  };
}

export interface SelectProps {
  id: string,
  question: string,
  options: string[],
  selected: string,
  onChange: {
    (e: ChangeEvent): void
  }
}

export interface HeaderProps extends ToggleSwitchProps {
  goHome: {
    (): void;
  };
}

export interface Values {
  a: boolean;
  b: boolean;
  c: boolean;
  d: boolean;
}

export interface Highlights {
  a: null | "green" | "red";
  b: null | "green" | "red";
  c: null | "green" | "red";
  d: null | "green" | "red";
}