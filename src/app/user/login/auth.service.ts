import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { User } from './user';



@Injectable({
  providedIn: 'root'
})
export class AuthService {
  

  userAutenticado: boolean = false;

  constructor(private router: Router) { }

  fazerLogin(user: User) {
    if (user.email === 'teste@teste.com' && user.senha ==='teste123'){

      this.userAutenticado = true;

      this.router.navigate(['/']);

    } else {
      this.userAutenticado = false;
    }
  }

}
