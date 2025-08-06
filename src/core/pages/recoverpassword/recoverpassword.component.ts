import { setpass, setpassform } from './../../../../projects/auth/src/lib/interfaces/auth';
import { Component, inject } from '@angular/core';
import { FormControl, FormControlName, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Message } from 'primeng/message';
import { InputTextModule } from 'primeng/inputtext';
import { RouterLink } from '@angular/router';
import { ProgressSpinner } from 'primeng/progressspinner';
import { ButtonModule } from 'primeng/button';
import { AuthService } from 'auth';
import { PasswordModule } from 'primeng/password';






@Component({
  selector: 'app-recoverpassword',
  imports: [Message,InputTextModule,RouterLink,ProgressSpinner,ButtonModule,ReactiveFormsModule,PasswordModule],
  templateUrl: './recoverpassword.component.html',
  styleUrl: './recoverpassword.component.scss'
})
export class RecoverpasswordComponent {
  recoverform:FormGroup =new FormGroup({

    'email': new FormControl (null,[Validators.required, Validators.email])




  })
  resetcode:FormGroup =new FormGroup({

    'resetCode': new FormControl (null,[Validators.required])




  })
  setpassform:FormGroup =new FormGroup({

'password': new FormControl(null, [Validators.required , Validators.pattern("^[A-Z].{0,10}$")]),
      'rePassword': new FormControl(null, [Validators.required,Validators.pattern("^[A-Z].{0,10}$")]),



  })





  section1:boolean=true
  section2:boolean=false
  section3:boolean=false
  otpmess:string =''

     isloading:boolean=false

  _authService = inject(AuthService)

  submitforget(){
            this.isloading=true

    this._authService.ForgetPassword(this.recoverform.value).subscribe({
      next:(res)=>{
        console.log(res)
        this.isloading=false
        this.otpmess = res.info
        this.section1=false
        this.section2=true
        this.section3=false

        setTimeout(()=>{
          this.otpmess ='';
        },2000)
      }
    })
  }

  submitreset(){

    this._authService.resetcode(this.resetcode.value).subscribe({
      next:(res)=>{
                console.log(res)
                 this.section1=false
        this.section2=false
        this.section3=true



      }
      
    })

  }

  submitsetpass(){
    this._authService.setpass(this.setpassform.value).subscribe({
      next:(res)=>{
        console.log(res)
      }
    })
  }

}
