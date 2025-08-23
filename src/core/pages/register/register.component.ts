import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, Validators, ReactiveFormsModule, FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from 'auth';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { Message } from 'primeng/message';
import { PasswordModule } from 'primeng/password';
import { ProgressSpinner } from 'primeng/progressspinner';
import { Password_Pattern} from '../../../core/constants/regex.constants';
import { rePassword_Pattern} from '../../../core/constants/regex.constants';
import { FirstName_Pattern} from '../../../core/constants/regex.constants';
import { lastName_Pattern} from '../../../core/constants/regex.constants';
import { phone_Pattern} from '../../../core/constants/regex.constants';
import { ErrMsgComponent } from '../../../shared/err-msg/err-msg.component';
import {  Subscription } from 'rxjs';





@Component({
  selector: 'app-register',
  imports: [RouterLink,ButtonModule,ReactiveFormsModule,FormsModule,InputTextModule,PasswordModule,ProgressSpinner,ErrMsgComponent],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {


    RegisterForm:FormGroup =new FormGroup({
      'username':new FormControl(null,[Validators.required,Validators.minLength(5),Validators.maxLength(15)]),
      'firstName': new FormControl(null,[Validators.required,Validators.pattern(FirstName_Pattern)]),
      'lastName': new FormControl(null, [Validators.required,Validators.pattern(lastName_Pattern)]),
      'email': new FormControl(null, [Validators.required,Validators.email]),
      'password': new FormControl(null, [Validators.required , Validators.pattern(Password_Pattern)]),
      'rePassword': new FormControl(null, [Validators.required,Validators.pattern(rePassword_Pattern)]),
      'phone': new FormControl(null, [Validators.required,Validators.pattern(phone_Pattern)])
    })


    // create property to unsubcribe 
    private registersubcribtion : Subscription | undefined
    isloading:boolean=false

    _authService= inject(AuthService)
    _router= inject(Router)


    OnSubmit(){
            this.isloading=true

      
    this.registersubcribtion = this._authService.signup(this.RegisterForm.value).subscribe({
        next:(res)=>{
          console.log(res)
          if(res.message=='success'){
            this._router.navigate(['authlayout/login'])
            this.isloading=false

          }

        },
        error:(err)=>{
                      this.isloading=false


        }
      })
    }
    


    ngOnDestroy(): void {
          console.log('RegisterComponent is being destroyed now! 💥');

      if(this.registersubcribtion){
        this.registersubcribtion.unsubscribe()
      }
      

      
    }
}
