import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { User } from '../models/user';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class AccountService {

  // registerUrl = "http://localhost:3001/user"
  // loginUrl = "http://localhost:3001/user"
  registerUrl = "http://localhost:8080/user/cadastro"
  loginUrl = "http://localhost:8080/user/login"

  private userSubject: BehaviorSubject<User>;

  constructor(
    private http: HttpClient,
    private router: Router,
  ) { }



  register(user: User): Observable<User> {
    return this.http.post<User>(this.registerUrl, user);

  }
  login(email: string, password: string): Observable<User> {
    return this.http.post<User>(this.loginUrl, { email, password })
      .pipe(map(user => {
        // armazena token
        localStorage.setItem('user', JSON.stringify(user));
        this.userSubject.next(user);
        return user;
      }));
  }
  logout(){
    
  }

}

