import { Component, OnInit } from '@angular/core';
import { Conta } from 'src/app/models/conta.model';
import { ContaService } from 'src/app/services/ContaService/conta.service';

@Component({
  selector: 'app-account-page',
  templateUrl: './account-page.component.html',
  styleUrls: ['./account-page.component.css']
})

export class AccountPageComponent implements OnInit {

  public NovaConta: Conta;

  constructor(private ContaService: ContaService) { 
    this.NovaConta = new Conta();
  }

  ngOnInit(): void {
  }

  CriarNovaConta() {
    this.ContaService.NovaConta(this.NovaConta).subscribe(sucess => {
       console.log(sucess);
    }, error => {
       console.log(error);
    })
  }
}
