import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from 'src/app/Services/userService/user.service';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss']
})
export class ResetPasswordComponent implements OnInit {

  hide:boolean=true;
  hide1:boolean=true;
  token:any;

  resetForm !: FormGroup;

  constructor(private fb:FormBuilder,private user :UserService,private activeRoute: ActivatedRoute,
    private router:Router) { }

  ngOnInit(): void {
    this.resetForm = this.fb.group({
      password:['',[Validators.required,Validators.minLength(8)]],
      confirmpassword:['',[Validators.required,Validators.minLength(8)]],
    })
    this.token = this.activeRoute.snapshot.paramMap.get('token');
  }

  onSubmit(){
    if (this.resetForm.valid) {
      let reqData = {
        Password: this.resetForm.value.password,
        CPassword: this.resetForm.value.confirmpassword
      }
      this.user.resetPass(reqData, this.token).subscribe((response: any) => {
        console.log("Password changed successfully", response);
        this.router.navigateByUrl('/login')
      });
    }
  }
}
