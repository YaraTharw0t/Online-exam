import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, Validators, ReactiveFormsModule, FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { AuthService } from 'auth';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { Message } from 'primeng/message';



@Component({
  selector: 'app-register',
  imports: [RouterLink,ButtonModule,ReactiveFormsModule,FormsModule,InputTextModule,Message],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {


    RegisterForm:FormGroup =new FormGroup({
      'username':new FormControl(null,[Validators.required,Validators.minLength(5),Validators.maxLength(15)]),
      'firstName': new FormControl(null,[Validators.required,Validators.pattern("^[A-Z][a-z]*$")]),
      'lastName': new FormControl(null, [Validators.required,Validators.pattern("^[A-Z][a-z]*$")]),
      'email': new FormControl(null, [Validators.required,Validators.email]),
      'password': new FormControl(null, [Validators.required , Validators.pattern("^[A-Z].{0,8}$")]),
      'rePassword': new FormControl(null, [Validators.required,Validators.pattern("^[A-Z].{0,8}$")]),
      'phone': new FormControl(null, [Validators.required,Validators.pattern("^01[0125][0-9]{8}$")])
    })

    _authService= inject(AuthService)


    OnSubmit(){
      this._authService.signup(this.RegisterForm.value).subscribe({
        next:(res)=>{
          console.log(res)

        }
      })
    }
    

}
