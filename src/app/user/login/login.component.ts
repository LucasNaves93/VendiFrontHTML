


import { Component, OnInit, NgModule } from '@angular/core';
import { FormControl, FormGroup, FormBuilder } from '@angular/forms';

import { AuthService } from './auth.service';
import { User } from './user';
import { Cadastro } from './cadastro';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})



export class LoginComponent implements OnInit {

  formCadastro : FormGroup;
  formLogin : FormGroup;
  user: User = new User();


  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService
  ) { }

  ngOnInit(): void {
    this.createFormCadastro(new Cadastro());
    this.createFormLogin(new Cadastro());
  }

  createFormCadastro(cadastro: Cadastro) {
    this.formCadastro = this.formBuilder.group({
      nome: [cadastro.nome],
      email: [cadastro.email],
      senha: [cadastro.senha],
      confirmarSenha: [cadastro.confirmarSenha],
    })
  }

    createFormLogin(user: User){
    this.formLogin = this.formBuilder.group({
      email: [user.email],
      senha: [user.senha],
    })
  }


  fazerLogin() {
    // console log, apagar depois
    console.log(this.formLogin.value);
    //Validação
    var form = document.getElementsByClassName('validation-login')[0] as HTMLFormElement;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }
    form.classList.add('was-validated');
    //Autenticação
    this.authService.fazerLogin(this.user);

  }
  realizarCadastro(){
    // aqui você pode implementar a logica para fazer seu formulário salvar
    console.log(this.formCadastro.value);
    // Usar o método reset para limpar os controles na tela
    this.formCadastro.reset(new Cadastro());
    // Validação
    var form = document.getElementsByClassName('validation-cadastro')[0] as HTMLFormElement;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }
    form.classList.add('was-validated');

}

}
