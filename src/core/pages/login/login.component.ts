import { InputTextModule } from 'primeng/inputtext';
import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { AuthService } from 'auth';
import { Message } from 'primeng/message';







@Component({
  selector: 'app-login',
  imports: [RouterLink,ButtonModule,ReactiveFormsModule,FormsModule,InputTextModule,Message],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  

    LoginForm:FormGroup =new FormGroup({
      'email': new FormControl(null,[Validators.required,Validators.email]),
      'password': new FormControl(null, [Validators.required,Validators.pattern("^[A-Z].{0,8}$")])
    })

 _authService= inject(AuthService)

      OnSubmitlog(){

        this._authService.Login(this.LoginForm.value).subscribe({
          next:(res)=>{
            console.log(res)

          }
        })

      }


}
