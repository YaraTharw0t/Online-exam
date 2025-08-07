import { Component, inject } from '@angular/core';
import { FormControl, FormControlName, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Message } from 'primeng/message';
import { InputTextModule } from 'primeng/inputtext';
import { Router, RouterLink } from '@angular/router';
import { ProgressSpinner } from 'primeng/progressspinner';
import { ButtonModule } from 'primeng/button';
import { AuthService} from 'auth';
import { PasswordModule } from 'primeng/password';
import { setpassform } from '../../../../projects/auth/src/public-api';
import { log } from 'node:console';
import { JsonPipe } from '@angular/common';






@Component({
  selector: 'app-recoverpassword',
  imports: [Message,InputTextModule,RouterLink,ProgressSpinner,ButtonModule,ReactiveFormsModule,PasswordModule,],
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
  restpassform:FormGroup =new FormGroup({

'newPassword': new FormControl(null, [Validators.required , Validators.pattern("^[A-Z].{0,10}$")]),
      'rePassword': new FormControl(null, [Validators.required,Validators.pattern("^[A-Z].{0,10}$")]),



  })





  section1:boolean=true
  section2:boolean=false
  section3:boolean=false
  otpmess:string =''
  email:string =''

     isloading:boolean=false

  _authService = inject(AuthService)

  _router = inject(Router)

  //function for forgetpass
  submitforget(){
            this.isloading=true
            //تخزين الايميل
            let userEmail= this.recoverform.value
            this.email =userEmail.email
            

    this._authService.ForgetPassword(userEmail).subscribe({
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
      },
      error:(err)=>{
        this.isloading =false
        console.log(err)

      }
    })
  }

  //function for reset code 

  submitreset(){
            this.isloading=true
    this._authService.resetcode(this.resetcode.value).subscribe({
      next:(res)=>{
                        this.isloading=false

                console.log(res)

                 this.section1=false
        this.section2=false
        this.section3=true



      },

      error:(err)=>{
         this.isloading=false
        console.log(err)


      }
      
    })

  }

  //function for set password

  submitsetpass(){
    
    if(this.restpassform.invalid){
  

 return;


    }

    let pass = this.restpassform.value.newPassword 
    let repass = this.restpassform.value.rePassword
    if(pass == repass ) {
      const  datatosend : setpassform={
        email :this.email,
        newPassword :pass

      }
            this.isloading=true

 this._authService.setpass(datatosend).subscribe({
      next:(res)=>{
                this.isloading=false

        console.log("نجح",res)

        this._router.navigate(['/authlayout/login'])



      },
      error :(err)=>{
          this.isloading=false
                  console.log("خطا",err)



      }
    });
    


    }


   
  }

}
