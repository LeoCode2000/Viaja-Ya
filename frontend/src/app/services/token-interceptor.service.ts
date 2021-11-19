import { Injectable } from '@angular/core';
import { HttpInterceptor } from '@angular/common/http';
import { AuthService } from './auth.service';
import { AuthGuard } from '../auth.guard';
@Injectable({
  providedIn: 'root'
})
export class TokenInterceptorService implements HttpInterceptor {
  
  constructor(
    private authsevice: AuthService
  ) { }

  intercept (req:any, next:any){
    const tokenizeReq = req.clone({
      setHeaders: {
        Authorization: 'Bearer ${this.authservice.getToken()}'
      }
    })
    return next.handle(tokenizeReq);
  }
}
