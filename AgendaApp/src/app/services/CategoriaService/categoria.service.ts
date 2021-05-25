import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Categoria } from 'src/app/models/categoria.model';
import { BaseService } from '../BaseService.service';

@Injectable({
  providedIn: 'root'
})
export class CategoriaService extends BaseService {

  constructor(private http: HttpClient) { 
    super();
  }

  public AddCategoria(Categoria: Categoria): Observable<Categoria> {
    return this.http.post<Categoria>(this.Endpoint('Categoria'), Categoria);
  }
  
  public BuscarCategorias(): Observable<Categoria[]> {
    return this.http.get<Categoria[]>(this.Endpoint('Categoria'));
  }

  public BuscarCategoriasPor(term: string): Observable<Categoria[]> {
    return this.http.get<Categoria[]>(this.Endpoint(`Categoria/${term}`));
  }
}
