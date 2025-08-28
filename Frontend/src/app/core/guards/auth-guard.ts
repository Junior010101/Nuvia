import { Injectable } from '@angular/core';
import {
  CanActivate,
  Router,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
} from '@angular/router';

@Injectable({ providedIn: 'root' })
export class NoAuthGuard implements CanActivate {
  constructor(private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean {
    const isLogged = !!localStorage.getItem('token');

    if (isLogged) {
      // se o usuário logado tentar acessar login ou cadastro → erro 404
      if (state.url === '/login' || state.url === '/cadastro') {
        this.router.navigate(['/erro'], { queryParams: { code: 404 } });
        return false;
      }
      // se acessar / → dashboard
      if (state.url === '/') {
        this.router.navigate(['/dashboard']);
        return false;
      }
    }

    return true; // deixa passar se não estiver logado
  }
}

@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate {
  constructor(private router: Router) {}

  canActivate(): boolean {
    const isLogged = !!localStorage.getItem('token');

    if (!isLogged) {
      this.router.navigate(['/erro'], { queryParams: { code: 403 } });
      return false;
    }
    return true;
  }
}
