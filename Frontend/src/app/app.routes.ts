import { Routes } from '@angular/router';
import { Start } from './pages/start/start';

export const routes: Routes = [
    {
        path: '',
        component: Start,
        data: { title: 'Nuvia' }
    },
];
