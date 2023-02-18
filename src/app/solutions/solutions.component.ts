import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { QuestionService } from '../services/question.service';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-solutions',
  templateUrl: './solutions.component.html',
  styleUrls: ['./solutions.component.css']
})
export class SolutionsComponent {

  solutionText:string = "";
  questionId: any;
  questionObj:any;

  constructor(public questionService:QuestionService, public userService:UserService, private route:ActivatedRoute, private router:Router){}

  ngOnInit():void {
    this.questionId = this.route.snapshot.paramMap.get('questionid');  
    this.questionService.getQuestonWithId(this.questionId).subscribe((res) => {
      console.log(res);
      this.questionObj =res;
    })
   }

   postSolution(){
    let solutionObj = {
      username:this.userService.user.username,
      solution:this.solutionText,
      plus:[],
      minus:[]
    };
    this.questionObj.solutions.push(solutionObj);    

    this.questionService.updateQuestion(this.questionObj).subscribe((res) => {
      debugger;
      this.solutionText="";
    })
   }

   returnBack(){
    this.router.navigateByUrl('/home');
   }
}
