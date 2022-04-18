import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {

  constructor(
    private authService: AuthService
  ) { }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    console.log('Metodo intercept');

    if (this.authService.isLogged()) {
      const req = request.clone({
        setHeaders: {
          Authorization: `${this.authService.getToken()}`
        }
      });

      return next.handle(req);
    }

    return next.handle(request);
  }
}
