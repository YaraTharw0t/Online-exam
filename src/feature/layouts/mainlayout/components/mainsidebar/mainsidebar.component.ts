import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { AuthService } from 'auth';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-mainsidebar',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './mainsidebar.component.html',
  styleUrl: './mainsidebar.component.scss'
})
export class MainsidebarComponent {

   _router = inject(Router)
  _authService= inject(AuthService)

  private logoutsubscrption :Subscription |undefined

logout(){

 this.logoutsubscrption=  this._authService.logout().subscribe({
    next:(res)=>{
      console.log(res)
      localStorage.removeItem('_token')
      this._router.navigate(['/authlayout/login'])


    },

    error:(err)=>{
      localStorage.removeItem("_token")
      this._router.navigate(["/authlayout/login"])
console.log(err)
    }
  })

 }


 ngOnDestroy(): void {
 if(this.logoutsubscrption){
  this.logoutsubscrption.unsubscribe()
 }
  
 }
}
