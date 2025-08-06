import { Component, inject } from '@angular/core';
import { FormControl, FormControlName, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Message } from 'primeng/message';
import { InputTextModule } from 'primeng/inputtext';
import { RouterLink } from '@angular/router';
import { ProgressSpinner } from 'primeng/progressspinner';
import { ButtonModule } from 'primeng/button';
import { AuthService } from 'auth';





@Component({
  selector: 'app-recoverpassword',
  imports: [Message,InputTextModule,RouterLink,ProgressSpinner,ButtonModule,ReactiveFormsModule],
  templateUrl: './recoverpassword.component.html',
  styleUrl: './recoverpassword.component.scss'
})
export class RecoverpasswordComponent {
  recoverform:FormGroup =new FormGroup({

    'email': new FormControl (null,[Validators.required, Validators.email])




  })

     isloading:boolean=false

  _authService = inject(AuthService)

  onsubmitrec(){
    this._authService.ForgetPassword(this.recoverform.value).subscribe({
      next:(res)=>{
        console.log(res)
      }
    })
  }

}
