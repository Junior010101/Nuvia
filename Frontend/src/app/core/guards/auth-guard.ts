import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable({ providedIn: 'root' })
export class NoAuthGuard implements CanActivate {
  constructor(private router: Router) {}

  canActivate(): boolean {
    const isLogged = !!localStorage.getItem('token');

    if (isLogged) {
      this.router.navigate(['/']);
      return false;
    }
    return true;
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
