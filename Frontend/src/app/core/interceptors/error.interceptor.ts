import { Injectable, NgZone } from '@angular/core';
import {
  HttpEvent,
  HttpInterceptor,
  HttpHandler,
  HttpRequest,
  HttpErrorResponse,
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {
  constructor(private snackBar: MatSnackBar, private zone: NgZone) {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    return next.handle(req).pipe(
      catchError((error: HttpErrorResponse) => {
        const msg =
          typeof error.error === 'string'
            ? error.error
            : error.error?.message || 'Erro na requisição';

        this.zone.run(() => {
          this.snackBar.open(msg, 'Fechar', {
            duration: 5000,
            panelClass: ['popup-erro'],
          });
        });

        return throwError(() => error);
      })
    );
  }
}
