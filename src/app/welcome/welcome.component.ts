import { Component, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css'],
})
export class WelcomeComponent {
  @ViewChild('name') nameKey!: ElementRef;
  constructor() {}

  startQuiz() {
    alert(` Don't refresh the page, until you complete this quiz`);
    localStorage.setItem('name', this.nameKey.nativeElement.value);
  }
}
