import { Routes } from '@angular/router';
import { Start } from './pages/start/start';
import { Login } from './pages/start/login/login';
import { Error } from './pages/error/error';
import { AuthGuard, NoAuthGuard } from './core/guards/auth-guard';
import { Register } from './pages/start/register/register';
import { Home } from './pages/home/home';
import { GamesPage } from './pages/games-page/games-page';
import { Configs } from './pages/home/configs/configs';
import { Main } from './pages/home/main/main';

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
    children: [
      {
        path: '',
        component: Main,
        data: { title: 'Nuvia' },
      },

      {
        path: 'settings',
        component: Configs,
        data: { title: 'Configurações' },
      },
    ],
  },
  {
    path: 'games',
    component: GamesPage,
    canActivate: [AuthGuard],
    data: { title: 'Nuvia - games' },
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
