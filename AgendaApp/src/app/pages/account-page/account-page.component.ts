import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastService } from 'src/app/components/toast/toast.service';
import { Conta } from 'src/app/models/conta.model';
import { ContaService } from 'src/app/services/ContaService/conta.service';

@Component({
  selector: 'app-account-page',
  templateUrl: './account-page.component.html',
  styleUrls: ['./account-page.component.css']
})

export class AccountPageComponent implements OnInit {

  public NovaConta: Conta;

  constructor(
    private ContaService: ContaService,
    private ToastService: ToastService,
    private Router: Router
  ) { 
    this.NovaConta = new Conta();
  }

  ngOnInit(): void {
  }

  CriarNovaConta() {
    this.ContaService.NovaConta(this.NovaConta).subscribe(sucess => {
       this.ToastService.SendToast("Conta criada com suceso voce será redirecionado em segundos. :)");
       setTimeout(() => this.Router.navigate(['/Login']), 2500);
    }, error => {
       this.ToastService.SendToast('Ops. Ocorreu um erro ao criar uma nova conta. :(');
       console.log(error);
    })
  }
}
