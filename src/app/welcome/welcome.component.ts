import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { QuestionserviceService } from '../service/questionservice.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css'],
})
export class WelcomeComponent implements OnInit {
  public questionList: any = [];
  constructor(
    private router: Router,
    private service: QuestionserviceService
  ) {}

  ngOnInit(): void {
    this.getallQuestions();
  }

  startQuiz() {
    alert(`Remember, don't refresh the page until you complete this quiz.`);
    // Navigate to the quiz page or perform any other actions
    this.router.navigateByUrl('/question');
  }

  getallQuestions() {
    this.service.getJson().subscribe((res) => {
      this.questionList = { questions: res };
      //console.log(this.questionList);
    });
  }
}
