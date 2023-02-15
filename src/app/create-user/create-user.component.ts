import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent {
  constructor(private fb:FormBuilder){}

  createUserForm = this.fb.group({
    email: ['', [Validators.required,Validators.email]],
    username: ['', [Validators.required,Validators.maxLength(10)]],
    password: ['', [Validators.required, Validators.minLength(8)]],
  });
}
