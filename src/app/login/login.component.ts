import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(private fb:FormBuilder){}

  ngOnInit():void {
    
  }

  loginForm = this.fb.group({
    email: ['', [Validators.required,Validators.email]],
    password: ['', [Validators.required, Validators.minLength(8)]],
  });

  get f(): { [key: string]: AbstractControl}{
    return this.loginForm.controls;
  }
}
