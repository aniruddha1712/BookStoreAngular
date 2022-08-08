import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/Services/userService/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm !: FormGroup;
  hide=true;
  constructor(private fb:FormBuilder,private user:UserService) { }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email:['',[Validators.required,Validators.email]],
      password:['',[Validators.required,Validators.minLength(8)]],
    })
  }
  onSubmit(){
    if(this.loginForm.valid){
      console.log("valid data", this.loginForm.value);
      console.log("do api call");

      let data={
        EmailId:this.loginForm.value.email,
        Password:this.loginForm.value.password
      }
      this.user.login(data).subscribe((res:any)=>{
        console.log(res);
      });
    }
    else{
      console.log("invalid data",this.loginForm.value);
      console.log("no api call");
    }
  }
}
