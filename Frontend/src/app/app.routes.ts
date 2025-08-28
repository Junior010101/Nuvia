import { Routes } from '@angular/router';
import { Start } from './pages/start/start';
import { Login } from './pages/start/login/login';
import { Error } from './pages/error/error';
import { AuthGuard, NoAuthGuard } from './core/guards/auth-guard';
import { Register } from './pages/start/register/register';
import { Home } from './pages/home/home';

export const routes: Routes = [
  {
    path: '',
    component: Start,
    canActivate: [NoAuthGuard],
    data: { title: 'Nuvia' },
  },
  {
    path: 'login',
    component: Login,
    canActivate: [NoAuthGuard],
    data: { title: 'Nuvia - login' },
  },
  {
    path: 'cadastro',
    component: Register,
    canActivate: [NoAuthGuard],
    data: { title: 'Nuvia - cadastro' },
  },
  {
    path: 'dashboard',
    component: Home,
    canActivate: [AuthGuard],
    data: { title: 'Nuvia' },
  },
  {
    path: 'erro',
    component: Error,
  },
  {
    path: '**',
    redirectTo: '/erro?code=404',
  },
];
