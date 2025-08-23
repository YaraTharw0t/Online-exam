import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, Validators, ReactiveFormsModule, FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from 'auth';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { Message } from 'primeng/message';
import { PasswordModule } from 'primeng/password';
import { ProgressSpinner } from 'primeng/progressspinner';





@Component({
  selector: 'app-register',
  imports: [RouterLink,ButtonModule,ReactiveFormsModule,FormsModule,InputTextModule,Message,PasswordModule,ProgressSpinner],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {


    RegisterForm:FormGroup =new FormGroup({
      'username':new FormControl(null,[Validators.required,Validators.minLength(5),Validators.maxLength(15)]),
      'firstName': new FormControl(null,[Validators.required,Validators.pattern("^[A-Z][a-z]*$")]),
      'lastName': new FormControl(null, [Validators.required,Validators.pattern("^[A-Z][a-z]*$")]),
      'email': new FormControl(null, [Validators.required,Validators.email]),
      'password': new FormControl(null, [Validators.required , Validators.pattern("^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$")]),
      'rePassword': new FormControl(null, [Validators.required,Validators.pattern("^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$")]),
      'phone': new FormControl(null, [Validators.required,Validators.pattern("^01[0125][0-9]{8}$")])
    })

    isloading:boolean=false

    _authService= inject(AuthService)
    _router= inject(Router)


    OnSubmit(){
            this.isloading=true

      
      this._authService.signup(this.RegisterForm.value).subscribe({
        next:(res)=>{
          console.log(res)
          if(res.message=='success'){
            this._router.navigate(['authlayout/login'])
            this.isloading=false

          }

        },
        
          error:(err)=>{
            console.log(err)
               this.isloading=false


          }
      })
    }
    

}
