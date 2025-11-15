import { type Questions } from "./interfaces";

const TestData: Questions = [
  {
    question: "How can you create a responsive image in HTML?",
    answers: {
      answer_a: "Using the 'srcset' attribute",
      answer_b: "Setting a fixed width in pixels",
      answer_c: "Using the 'height' attribute",
      answer_d: "Applying inline CSS styles",
      answer_e: null,
      answer_f: null,
    },
    correct_answers: {
      answer_a_correct: "true",
      answer_b_correct: "false",
      answer_c_correct: "false",
      answer_d_correct: "false",
      answer_e_correct: "false",
      answer_f_correct: "false",
    },
  },
  {
    question: "Which HTML element is used to define navigation links?",
    answers: {
      answer_a: "<navigation>",
      answer_b: "<nav>",
      answer_c: "<navigate>",
      answer_d: "<links>",
      answer_e: null,
      answer_f: null,
    },
    correct_answers: {
      answer_a_correct: "false",
      answer_b_correct: "true",
      answer_c_correct: "false",
      answer_d_correct: "false",
      answer_e_correct: "false",
      answer_f_correct: "false",
    },
  },
];

export default TestData;
