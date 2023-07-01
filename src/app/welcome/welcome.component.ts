import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css'],
})
export class WelcomeComponent {
  constructor(private router: Router) {}

  startQuiz() {
    alert(`Remember, don't refresh the page until you complete this quiz.`);
    // Navigate to the quiz page or perform any other actions
    this.router.navigateByUrl('/question');
  }
}
