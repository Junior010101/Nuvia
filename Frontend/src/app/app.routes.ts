import { Routes } from '@angular/router';
import { Start } from './pages/start/start';
import { Login } from './pages/start/login/login';

export const routes: Routes = [
    {
        path: '',
        component: Start,
        data: { title: 'Nuvia' }
    },
        {
        path: 'login',
        component: Login,
        data: { title: 'Nuvia - login' }
    },
];
