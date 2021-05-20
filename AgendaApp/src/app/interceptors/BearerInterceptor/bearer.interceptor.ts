import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { ResponseLogin } from 'src/app/models/responseLogin.model';

@Injectable()
export class BearerInterceptor implements HttpInterceptor {

  TokenInBrowser: ResponseLogin;

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
     this.TokenInBrowser = JSON.parse(localStorage.getItem('user'));

     if (this.TokenInBrowser != undefined || this.TokenInBrowser != null) {
         let requestClone = request.clone({
            setHeaders: { Authorization: `Bearer ${this.TokenInBrowser.Token}` }
         })

         return next.handle(requestClone);
     }

     return next.handle(request);
  }
}
