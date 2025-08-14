import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { AuthService } from 'auth';

@Component({
  selector: 'app-mainsidebar',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './mainsidebar.component.html',
  styleUrl: './mainsidebar.component.scss'
})
export class MainsidebarComponent {

   _router = inject(Router)
  _authService= inject(AuthService)

logout(){

  // this._authService.logout().subscribe({
  //   next:(res)=>{
  //     console.log(res)
      localStorage.removeItem('_token')
      this._router.navigate(['/authlayout/login'])


//     },

//     error:(err)=>{
// console.log(err)
//     }
//   })

 }


}
