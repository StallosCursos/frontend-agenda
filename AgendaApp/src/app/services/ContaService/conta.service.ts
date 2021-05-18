import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Conta } from 'src/app/models/conta.model';
import { environment } from 'src/environments/environment';
import { BaseService } from '../BaseService.service';

@Injectable({
  providedIn: 'root'
})

export class ContaService extends BaseService {

  constructor(private http: HttpClient) {
     super();
  }

  public NovaConta(Conta: Conta) : Observable<Conta> {
     return this.http.post<Conta>(this.Endpoint('Contas'), Conta);
  }
}
