import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Contato } from 'src/app/models/contato.model';
import { ContatoService } from 'src/app/services/ContatoService/contato.service';

@Component({
  selector: 'app-schedule-page',
  templateUrl: './schedule-page.component.html',
  styleUrls: ['./schedule-page.component.css']
})

export class SchedulePageComponent implements OnInit {

  public Contatos: Observable<Contato[]>;

  constructor(private ContatoService: ContatoService, private Router: Router) { 
    this.Contatos = this.ContatoService.BuscarTodosContatos();
  }

  ngOnInit(): void { }

  NovoContato() {
    this.Router.navigate(['/Contato']);
  }
}
