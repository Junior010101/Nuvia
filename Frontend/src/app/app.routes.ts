import { Routes } from '@angular/router';
import { Start } from './pages/start/start';
import { Login } from './pages/start/login/login';
import { Error } from './pages/error/error';
import { AuthGuard, NoAuthGuard } from './pages/start/auth/auth-module';

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
    path: 'erro',
    component: Error,
  },
  {
    path: '**',
    redirectTo: '/erro?code=404',
  },
];
