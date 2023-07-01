export interface Question {
  id: number;
  image: string;
  options: Option[];
  questionText: string;
}

export interface Option {
  id: number;
  questionId: number;
  text: string;
  correct: boolean;
}
