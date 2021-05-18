import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastService } from 'src/app/components/toast/toast.service';
import { Login } from 'src/app/models/login.model';
import { LoginService } from 'src/app/services/LoginService/login.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})

export class LoginPageComponent implements OnInit {

  public Login: Login;

  constructor(
    private LoginService: LoginService, 
    private ToastService: ToastService,
    private Router: Router
  ) { 
     this.Login = new Login();
  }

  ngOnInit(): void {}

  public ExecuteLogin() {
     this.LoginService.Login(this.Login).subscribe(sucess => {

      localStorage.setItem('user', JSON.stringify(sucess));

      this.ToastService.SendToast("Login efetuado com sucesso o usuario será redirecionado :)");

      setTimeout(() => this.Router.navigate(['/']), 2500);

    }, error => {
      this.ToastService.SendToast("Login e senha não correspondem :(");
      console.log(error);
    });
  }
}
