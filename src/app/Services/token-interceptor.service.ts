import {Injectable, Injector} from '@angular/core';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Observable} from 'rxjs';
import {LoginService} from './login.service';

@Injectable({
  providedIn: 'root'
})
export class TokenInterceptorService implements HttpInterceptor {

  constructor(private injector: Injector) {
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    let login = this.injector.get(LoginService);

    const tokenizedReq = req.clone({
      setHeaders: {
        Authorization: `Bearer ${LoginService.getToken()}`
      }
    });
    return next.handle(tokenizedReq);
  }
}
