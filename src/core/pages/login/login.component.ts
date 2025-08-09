import { InputTextModule } from 'primeng/inputtext';
import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { Message } from 'primeng/message';
import { PasswordModule } from 'primeng/password';
import { ProgressSpinner } from 'primeng/progressspinner';
import { AuthService } from 'auth';










@Component({
  selector: 'app-login',
  imports: [RouterLink,ButtonModule,ReactiveFormsModule,FormsModule,InputTextModule,Message,PasswordModule,ProgressSpinner],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  

    LoginForm:FormGroup =new FormGroup({
      'email': new FormControl(null,[Validators.required,Validators.email]),
      'password': new FormControl(null, [Validators.required,Validators.pattern("^[A-Z].{0,8}$")])
    })

 _authService= inject(AuthService)
 _router= inject(Router)
     isloading:boolean=false


      OnSubmitlog(){
   this.isloading=true

        this._authService.Login(this.LoginForm.value).subscribe({
          next:(res)=>{
            console.log(res)
            if(res.message=="success"){
              localStorage.setItem('_token',res.token)
              this._router.navigate(['/blanklayout/dashboard'])
   this.isloading=false

            }

          }
        })

      }


}
