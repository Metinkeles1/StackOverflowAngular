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
  questionObj:any;

  constructor(
    public questionService: QuestionService,
    public userService: UserService
  ) {}

  ngOnInit(): void {
    this.questionService.getQuestion().subscribe((res) => {
      this.questionList = res;      
      this.questionObj = res;
    });
  }

  post() {    
    this.questionService
      .postQuestion({
        username: this.userService.user.username,
        questionTitle: this.questionTitle,
        question: this.question,
        questionPlus:[],
        questionMinus:[],
        solutions: [],
      })
      .subscribe((res) => {
        this.questionList.push(res);
        this.questionTitle = '';
        this.question = '';        
      });
  }

  questionVote(index: number, point: number) {
    if(point == 1){
      if(!(this.questionList[index].questionPlus.indexOf(this.userService.user.id)>=0))
      this.questionList[index].questionPlus.push(this.userService.user.id);
      for(let i = 0; i < this.questionList[index].questionMinus.length; i++){
        if(this.questionList[index].questionMinus[i] == this.userService.user.id){
          this.questionList[index].questionMinus.splice(i, 1);
        }
      }
    }     
    else{
      if(!(this.questionList[index].questionMinus.indexOf(this.userService.user.id) >= 0)){
        this.questionList[index].questionMinus.push(this.userService.user.id);
      }

      for(let i = 0; i < this.questionList[index].questionPlus.length; i++){
        if(this.questionList[index].questionPlus[i] == this.userService.user.id){
          this.questionList[index].questionPlus.splice(i, 1);
        }
      }
    }  
    console.log(this.questionObj.id)
    this.questionService.updateQuestion(this.questionObj).subscribe((res) => console.log(res));    
  }
}
