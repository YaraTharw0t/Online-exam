import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {
    const router = inject(Router)
  if(localStorage.getItem('_token') != null){
      return true;


  }
  else{

    router.navigate(['/authlayout/login'])
    return false

    

  }
};
