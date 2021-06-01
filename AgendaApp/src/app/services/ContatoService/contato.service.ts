import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Contato } from 'src/app/models/contato.model';
import { BaseService } from '../BaseService.service';

@Injectable({
  providedIn:
   'root'
})

export class ContatoService extends BaseService{

  constructor(private http: HttpClient) { 
    super();
  }

  public NovoContato(Contato: Contato) : Observable<Contato> {
    return this.http.post<Contato>(this.Endpoint('Contato'), Contato);
  }

  public AtualizarContato(Contato: Contato) : Observable<Contato> {
    return this.http.put<Contato>(this.Endpoint('Contato'), Contato);
  }

  public BuscarTodosContatos() : Observable<Contato[]> {
    return this.http.get<Contato[]>(this.Endpoint('Contato'));
  }
}
