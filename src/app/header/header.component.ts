import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  constructor(public userService: UserService, private router: Router){}

  ngOnInit(): void{
    let str = localStorage.getItem('user');
    
    if(str){
      this.userService.user =JSON.parse(str);
    }else{
      this.router.navigateByUrl('/login');
    }
  }

  logout(){
    this.userService.user = undefined;
    localStorage.clear();
    this.router.navigateByUrl('/login');
  }
}
