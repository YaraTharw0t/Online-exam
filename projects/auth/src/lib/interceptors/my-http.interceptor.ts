import { isPlatformBrowser } from '@angular/common';
import { HttpInterceptorFn } from '@angular/common/http';
import { inject, PLATFORM_ID } from '@angular/core';

export const myHTTPInterceptor: HttpInterceptorFn = (req, next) => {

  const platformid =inject(PLATFORM_ID)


  if(isPlatformBrowser(platformid)){
  const token = localStorage.getItem('_token')

if(token){



   const modifiedReq= req.clone({
  setHeaders :{
      token :token
  }
});
  return next(modifiedReq);

}

  }




return  next(req)



};
