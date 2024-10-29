import { create } from "zustand";

type Question = {
  question: string;
  options: string[];
  correctAnswer: number;
};

interface QuizState {
  currentQuestion: number;
  answers: (number | null)[];
  score: number;
  showScore: boolean;
  questions: Question[];
  selectAnswer: (optionIndex: number) => void;
  nextQuestion: () => void;
  prevQuestion: () => void;
  resetQuiz: () => void;
}

const useQuizStore = create<QuizState>((set) => ({
  currentQuestion: 0,
  answers: Array(3).fill(null),
  score: 0,
  showScore: false,

  questions: [
    {
      question: "What does CSS stand for?",
      options: [
        "Computer Style Sheets",
        "Creative Style Sheets",
        "Cascading Style Sheets",
        "Colorful Style Sheets",
      ],
      correctAnswer: 2,
    },
    {
      question: "What does HTTP stand for?",
      options: [
        "Hypertext Technical Protocol",
        "Hypertext Transfer Protocol",
        "High Transfer Text Protocol",
        "Hyper Transfer Text Protocol",
      ],
      correctAnswer: 1,
    },
    {
      question: "Which language is primarily used for web scripting?",
      options: ["JavaScript", "Python", "C++", "Java"],
      correctAnswer: 0,
    },
    {
      question: "What does SQL stand for?",
      options: [
        "Standard Question Language",
        "Simple Query Language",
        "Sequential Query Language",
        "Structured Query Language",
      ],
      correctAnswer: 3,
    },
    {
      question: "What is the main function of a web server?",
      options: [
        "To store data",
        "To run applications",
        "To serve web pages to clients",
        "To protect networks",
      ],
      correctAnswer: 2,
    },
    {
      question: "Which company developed the Java programming language?",
      options: ["Sun Microsystems", "Microsoft", "IBM", "Apple"],
      correctAnswer: 0,
    },
    {
      question: "What is the purpose of the <title> tag in HTML?",
      options: [
        "To create a new section",
        "To define the title of the web page",
        "To add a comment",
        "To include a script",
      ],
      correctAnswer: 1,
    },
    {
      question: "What does API stand for?",
      options: [
        "Application Program Interface",
        "Advanced Programming Interface",
        "Application Programming Interface",
        "Automated Program Interface",
      ],
      correctAnswer: 2,
    },
    {
      question: "What is the purpose of a database index?",
      options: [
        "To store large files",
        "To create backups",
        "To manage user permissions",
        "To speed up data retrieval",
      ],
      correctAnswer: 3,
    },
    {
      question:
        "Which protocol is commonly used for secure communication over the internet?",
      options: ["HTTPS", "FTP", "HTTP", "SMTP"],
      correctAnswer: 0,
    },
  ],

  selectAnswer: (optionIndex) =>
    set((state) => {
      const answers = [...state.answers];
      answers[state.currentQuestion] = optionIndex;
      return { answers };
    }),

  nextQuestion: () =>
    set((state) => {
      const isLastQuestion =
        state.currentQuestion === state.questions.length - 1;

      if (isLastQuestion) {
        let score = 0;

        state.questions.forEach((question, index) => {
          if (state.answers[index] === question.correctAnswer) {
            score++;
          }
        });

        return { showScore: true, score };
      }

      return { currentQuestion: state.currentQuestion + 1 };
    }),

  prevQuestion: () =>
    set((state) => ({
      currentQuestion: Math.max(state.currentQuestion - 1, 0),
    })),

  resetQuiz: () =>
    set(() => ({
      currentQuestion: 0,
      answers: Array(3).fill(null),
      score: 0,
      showScore: false,
    })),
}));

export default useQuizStore;
