import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';
import { QuestionserviceService } from '../service/questionservice.service';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css'],
})
export class QuestionComponent implements OnInit {
  public questionList: any = [];
  public currentQuestion: number = 0;
  public points: number = 0;
  public counter = 60;
  public correctAnswer: number = 0;
  public incorrectAns: number = 0;
  public interval$: any;
  public quizCompleted: boolean = false;
  public status: string;

  constructor(private service: QuestionserviceService) {}

  ngOnInit(): void {
    this.getallQuestions();
  }

  getallQuestions() {
    this.service.getJson().subscribe((res) => {
      this.questionList = { questions: res };
      //console.log(this.questionList);
    });
  }

  getOptionLabel(index: number): string {
    return String.fromCharCode(65 + index); // Convert index to corresponding alphabet (A, B, C, ...)
  }

  nextQuestion() {
    if (this.currentQuestion < this.questionList.questions.length - 1) {
      this.currentQuestion++;
    } else if (
      this.currentQuestion ===
      this.questionList.questions.length - 1
    ) {
      this.finishQuiz();
    }
  }

  previousQuestion() {
    this.currentQuestion--;
  }

  selectedOption: any;

  checkAnswer(option: any) {
    this.selectedOption = option;
    const question = this.questionList.questions[this.currentQuestion];

    if (option.correct) {
      this.points += 1;
      this.correctAnswer++;
    } else {
      this.incorrectAns++;
    }

    if (this.currentQuestion === this.questionList.questions.length - 1) {
      this.finishQuiz();
    } else {
      setTimeout(() => {
        this.currentQuestion++;
      }, 200); // Delay of 0.5 seconds
    }
  }

  finishQuiz() {
    this.quizCompleted = true;

    const totalQuestions = this.questionList.questions.length;
    const correctPercentage = Math.round((this.points / totalQuestions) * 100);
    this.points = Math.round((this.points / totalQuestions) * 100);

    if (correctPercentage >= 75) {
      this.status = 'PASS';
    } else {
      this.status = 'FAIL';
    }
  }
}
