import { Injectable } from '@angular/core';
import { BaseService } from './base.service';

@Injectable({
  providedIn: 'root'
})
export class QuestionService extends BaseService {
  
  public user:any;

  constructor(private base:BaseService) { 
    super(base.http);
  }

  public postQuestion(questionObj:any){
    return this.postReq('/questions',questionObj);
  }

  public getQuestion(){
    return this.getReq('/questions');
  }

}