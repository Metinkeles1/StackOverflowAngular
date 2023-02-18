import { Component } from '@angular/core';
import { QuestionService } from '../services/question.service';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  question: string = '';
  questionTitle: string = '';
  questionList: Array<any> = [];

  constructor(
    public questionService: QuestionService,
    public userService: UserService
  ) {}

  ngOnInit(): void {
    this.questionService.getQuestion().subscribe((res) => {
      this.questionList = res;
    });
  }

  post() {
    this.questionService
      .postQuestion({
        username: this.userService.user.username,
        questionTitle: this.questionTitle,
        question: this.question,
        solutions: [],
      })
      .subscribe((res) => {
        this.questionList.push(res);
      });
  }
}
