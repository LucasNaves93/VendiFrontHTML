import { Router } from '@angular/router';



import { Component, OnInit, NgModule } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, EmailValidator } from '@angular/forms';

import { AuthService } from './auth.service';
import { User } from './user';
import { Cadastro } from './cadastro';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})



export class LoginComponent implements OnInit {

  // formCadastro : FormGroup;
  formLogin : FormGroup;
  

  user: User = {
    nome: '',
    email: '',
    senha: ''
  }


  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit(): void {
    // this.createFormCadastro(new User());
    // this.createFormLogin(new User());
  }



  //   createFormLogin(user: User){
  //   this.formLogin = this.formBuilder.group({
  //     email: [user.email],
  //     senha: [user.senha],
  //   })
  // }


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
    // this.authService.fazerLogin(this.user);

  }
  realizarCadastro(): void{
    //Realizar Cadastro
    this.authService.create(this.user).subscribe(() =>{     
    })
    // Validação
    // var form = document.getElementsByClassName('validation-cadastro')[0] as HTMLFormElement;
    // if (form.checkValidity() === false) {
    //   event.preventDefault();
    //   event.stopPropagation();
    // }
    // form.classList.add('was-validated');

}

}
