import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { User } from './user';
import {Observable} from 'rxjs';





@Injectable({
  providedIn: 'root'
})
export class AuthService {
  
  baseUrl = "http://localhost:3001/user"

  userAutenticado: boolean = false;

  constructor(private router: Router,
    private http: HttpClient) { }

  // fazerLogin(user: User) {
  //   if (user.email === 'teste@teste.com' && user.senha ==='teste123'){

  //     this.userAutenticado = true;

  //     this.router.navigate(['/']);

  //   } else {
  //     this.userAutenticado = false;
  //   }
  // }

  create(user: User): Observable<User>{
    return this.http.post<User>(this.baseUrl, user)
  }

}
