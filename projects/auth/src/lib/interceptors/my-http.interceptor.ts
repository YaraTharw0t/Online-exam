import { HttpInterceptorFn } from '@angular/common/http';

export const myHTTPInterceptor: HttpInterceptorFn = (req, next) => {
      console.log('Interceptor is running for URL:', req.url); // أضف هذا السطر
  const token = localStorage.getItem('_token')
  console.log('Token found in localStorage:', token); // <-- وهذا السطر أهم شيء


if(!token){
      console.log('Token is missing, sending request without header.'); // وهذا أيضاً
  return next(req);

}

const modifireq = req.clone({
  setHeaders :{
      Authorization  :`Bearer ${token}`
  }
});
return  next(modifireq)



};
