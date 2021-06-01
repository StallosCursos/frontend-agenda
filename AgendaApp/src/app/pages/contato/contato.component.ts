import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ToastService } from 'src/app/components/toast/toast.service';
import { Categoria } from 'src/app/models/categoria.model';
import { Contato } from 'src/app/models/contato.model';
import { NumeroContato } from 'src/app/models/numerocontato.model';
import { CategoriaService } from 'src/app/services/CategoriaService/categoria.service';
import { ContatoService } from 'src/app/services/ContatoService/contato.service';

@Component({
  selector: 'app-contato',
  templateUrl: './contato.component.html',
  styleUrls: ['./contato.component.css']
})

export class ContatoComponent implements OnInit {

  @Input() Contato: Contato;

  NumeroContato: NumeroContato;

  public categorias: Observable<Categoria[]>;

  constructor(
    private ContatoService: ContatoService,  
    private categoriaService: CategoriaService,
    private ToastService: ToastService,
    private router: Router
  ) { 
     this.Contato = new Contato();
     this.NumeroContato = new NumeroContato();
  }

  ngOnInit(): void {
     this.categorias = this.categoriaService.BuscarCategorias();
  }

  AddContato() {
    this.Contato.numeroContato.push(this.NumeroContato);
    this.NumeroContato = new NumeroContato();    
  }

  TipoContato(tipoContato: string) {
     if (tipoContato == "1") 
        return "Telefone";
     else if (tipoContato == "2")
        return "Celular";
     else
        return "Fax";
  }

  Cancel() {
     this.router.navigate(["/Agenda"]);
  }

  Remover(numero: NumeroContato) {
     let indexObject = this.Contato.numeroContato.indexOf(numero);
     if (indexObject !== -1) {
        this.Contato.numeroContato.splice(indexObject, 1);
     }
  } 

  CreateNewContato() {
     this.ContatoService.NovoContato(this.Contato).subscribe(sucess => {
        this.ToastService.SendToast("Contato adicionado com sucesso :) ");
        setTimeout(() => this.router.navigate(['/Agenda']), 2500);
     }) 
  }
}
