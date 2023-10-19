type QuestionAnswers = {
  question: string;
  answers: { answer: string, correct: boolean }[];
};

export default <QuestionAnswers[]>[
  {
    question: 'Who won the 2008 Formula 1 Championship',
    answers: [
      { answer: 'Lewis Hamilton', correct: true },
      { answer: 'Michael Schumacher', correct: false },
      { answer: 'Damon Hill', correct: false },
      { answer: 'Carlos Sainz', correct: false },
    ],
  },
  {
    question: "Which British band's debut album was called Please Please Me",
    answers: [
      { answer: 'The Rolling Stones', correct: false },
      { answer: 'The Beatles', correct: true },
      { answer: 'Led Zeppelin', correct: false },
      { answer: 'The Who', correct: false },
    ],
  },
  {
    question: 'Which of the following does not grow on a tree',
    answers: [
      { answer: 'Carrots', correct: true },
      { answer: 'Coconuts', correct: false },
      { answer: 'Pears', correct: false },
      { answer: 'Mangos', correct: false },
    ],
  },
];
