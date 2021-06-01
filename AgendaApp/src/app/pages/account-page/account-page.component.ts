import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastService } from 'src/app/components/toast/toast.service';
import { Conta } from 'src/app/models/conta.model';
import { ContaService } from 'src/app/services/ContaService/conta.service';
import { MustMatch } from 'src/app/validators/mustmactch.validator';

@Component({
  selector: 'app-account-page',
  templateUrl: './account-page.component.html',
  styleUrls: ['./account-page.component.css']
})

export class AccountPageComponent implements OnInit {

  public NovaConta: Conta;
  public Form: FormGroup;
  public IsRequest: boolean;

  constructor(
    private ContaService: ContaService,
    private ToastService: ToastService,
    private Router: Router,
    private formBuilder: FormBuilder
  ) { 
    this.NovaConta = new Conta();
    this.Form = this.formBuilder.group({
       nome: ['', Validators.required],
       email: ['', [Validators.required, Validators.email]],
       nomeUsuario: ['', Validators.required],
       senha:['', Validators.required],
       senhaConfirmacao: ['', Validators.required]
    }, {
      validator: MustMatch('senha', 'senhaConfirmacao')
    });
  }

  ngOnInit(): void {
  }

  CreateNewAccount() {
    this.IsRequest = true;
    
    if (this.Form.valid) {
      
      this.IsRequest = false;

      this.ContaService.NovaConta(this.NovaConta).subscribe(sucess => {
         this.ToastService.SendToast("Conta criada com suceso voce será redirecionado em segundos. :)");
         setTimeout(() => this.Router.navigate(['/Login']), 2500);
      }, error => {
         this.ToastService.SendToast('Ops. Ocorreu um erro ao criar uma nova conta. :(');
         console.log(error);
      })
    }
  }

  Cancel() {
    this.Router.navigate(['/Login']);
  }
}
