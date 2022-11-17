import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse,
} from '@angular/common/http';
import { catchError, Observable, throwError } from 'rxjs';
import { JWT_NAME } from '../services/auth.service';
import { Router } from '@angular/router';

@Injectable()
export class JwtInterceptor implements HttpInterceptor {
  constructor(private router: Router) {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    const token = sessionStorage.getItem(JWT_NAME);
    if (token) {
      const clonedReq = request.clone({
        headers: request.headers.set('Authorization', 'Bearer ' + token),
      });
      console.log(clonedReq);
      console.log(token);
      return next.handle(clonedReq);
    } else {
      return next.handle(request).pipe(
        catchError((err: HttpErrorResponse) => {
          if (err.status === 401) {
            this.router.navigateByUrl('login');
          }

          return throwError(err);
        })
      );
    }
  }
}
