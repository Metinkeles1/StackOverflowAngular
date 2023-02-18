import { Component } from '@angular/core';
import { QuestionService } from '../services/question.service';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  question:string = "";

  constructor(public questionService:QuestionService, public userService:UserService){}

  post(){
    this.questionService.postQuestion({
      username:this.userService.user.username,
      question:this.question,
      solutions:[]
    }).subscribe((res) => {
      console.log(res);
    });
  }
}
