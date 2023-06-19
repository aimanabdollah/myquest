import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';
import { QuestionserviceService } from '../service/questionservice.service';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent implements OnInit{

  public name: string="";
  public questionList:any=[];
  public currentQuestion: number=0;
  public points : number=0;
  public counter=60;
  public correctAnswer:number =0;
  public incorrectAns:number=0;
  public interval$:any;
  public quizCompleted: boolean=false;
  public status: string;
  constructor(private service : QuestionserviceService){}

  ngOnInit(): void {
    this.name=localStorage.getItem("name")!;
    this.getallQuestions();
    this.startCounter();
  }

  getallQuestions(){
     this.service.getJson()
     .subscribe(res=>{
       this.questionList=res.questions;
      });
  }

  nextQuestion(){
    this.currentQuestion++;
  }

  previousQuestion(){
    this.currentQuestion--;
  }

  checkAnswer(cq:number, opt:any){

    if(cq===this.questionList.length){
      this.quizCompleted=true;
      this.stopCounter();
    }
    if(this.points>=70){
      this.status="PASS"
    }else{
      this.status="FAIL"
    }
    if(opt.correct){
      this.points+=10;
      this.correctAnswer++;
      this.currentQuestion++;
    }else{
      this.incorrectAns++;
      this.currentQuestion++;
    }
  }

  startCounter(){
    this.interval$=interval(1000).subscribe(x=>{
      this.counter--;
      if(this.counter===0){
        this.currentQuestion++;
        this.counter=60;
      }
    });
    setTimeout(()=>{
      this.interval$.unsubscribe()
    },600000);
    
  }

  stopCounter(){
    this.interval$.unsubscribe();
    this.counter=0;
  }

  resetCounter(){
    this.stopCounter();
    this.counter=0;
    this.startCounter();
  }

}
