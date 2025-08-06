import { HttpInterceptorFn } from '@angular/common/http';

export const myHTTPInterceptor: HttpInterceptorFn = (req, next) => {
  return next(req);
};
