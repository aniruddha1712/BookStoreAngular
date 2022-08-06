import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  signupForm !: FormGroup;
  hide=true;
  constructor(private fb:FormBuilder) { }

  ngOnInit(): void {
    this.signupForm = this.fb.group({
      fullname:['',[Validators.required,Validators.minLength(3)]],
      email:['',[Validators.required,Validators.email]],
      password:['',[Validators.required,Validators.minLength(8)]],
      mobile:['',[Validators.required,Validators.pattern("[1-9]{1}[0-9]{9}")]]
    })
  }

}
