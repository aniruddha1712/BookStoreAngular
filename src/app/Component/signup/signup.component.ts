import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/Services/userService/user.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  signupForm !: FormGroup;
  hide=true;
  constructor(private fb:FormBuilder,private user:UserService) { }

  ngOnInit(): void {
    this.signupForm = this.fb.group({
      fullname:['',[Validators.required,Validators.minLength(3)]],
      email:['',[Validators.required,Validators.email]],
      password:['',[Validators.required,Validators.minLength(8)]],
      mobile:['',[Validators.required,Validators.pattern("[1-9]{1}[0-9]{9}")]]
    })
  }
  onSubmit(){
    if(this.signupForm.valid){
      console.log("valid data", this.signupForm.value);
      console.log("do api call");

      let data={
        FullName:this.signupForm.value.fullname,
        EmailId:this.signupForm.value.email,
        Password:this.signupForm.value.password,
        MobileNumber:this.signupForm.value.mobile
      }
      this.user.signup(data).subscribe((res:any)=>{
        console.log(res);
      });
    }
    else{
      console.log("invalid data",this.signupForm.value);
      console.log("no api call");
    }
  }

}
