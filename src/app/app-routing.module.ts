
import { CadastroComponent } from './user/cadastro/cadastro.component';
import { RecuperarComponent } from './user/recuperar/recuperar.component';
import { HeaderComponent } from './shared/header/header.component';
import { LoginComponent } from './user/login/login.component';

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: 'login' , component: LoginComponent},
  {path: 'header' , component: HeaderComponent},
  {path: 'recuperar' , component: RecuperarComponent},
  {path: 'cadastro' , component: CadastroComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
