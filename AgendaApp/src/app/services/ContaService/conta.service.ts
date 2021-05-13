import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Conta } from 'src/app/models/conta.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})

export class ContaService {

  constructor(private http: HttpClient) {}

  public NovaConta(Conta: Conta) : Observable<Conta> {
     return this.http.post<Conta>(`${environment.endpointApi}/api/Contas`, Conta);
  }
}
