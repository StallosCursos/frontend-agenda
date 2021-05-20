import { Injectable } from '@angular/core';
import { catchError } from "rxjs/operators";
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { Router } from '@angular/router';
import { ToastService } from 'src/app/components/toast/toast.service';

@Injectable()
export class NotAutorizedInterceptor implements HttpInterceptor {

  constructor(private Router: Router, private ToastService: ToastService) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(request).pipe(
       catchError((error: HttpErrorResponse) => {
           if (error.status == 401 || error.status == 403) {
              this.ToastService.SendToast("O usuario não tem acesso para estes recursos e será redirecionado para o login :(");
              setTimeout(() => this.Router.navigate(['/Login']), 2500);
           }               

           return throwError(error.error);
       })
    );
  }
  
}
