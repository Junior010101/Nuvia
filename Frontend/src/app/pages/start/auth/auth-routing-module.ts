import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Login } from '../login/login';
import { Register } from '../register/register';
import { NoAuthGuard } from './auth-module'; // ou onde você colocar o NoAuthGuard

const routes: Routes = [
  { path: 'login', component: Login, canActivate: [NoAuthGuard] },
  { path: 'register', component: Register, canActivate: [NoAuthGuard] },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuthRoutingModule {}
