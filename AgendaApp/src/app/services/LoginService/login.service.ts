import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Login } from 'src/app/models/login.model';
import { ResponseLogin } from 'src/app/models/responseLogin.model';
import { BaseService } from '../BaseService.service';

@Injectable({
  providedIn: 'root'
})

export class LoginService extends BaseService {

  constructor(private http: HttpClient) { 
    super();
  }

  public Login(Login: Login): Observable<ResponseLogin> {
     return this.http.post<ResponseLogin>(this.Endpoint('Login'), Login);
  }
}
