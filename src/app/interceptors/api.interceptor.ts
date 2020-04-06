import { Injectable } from '@angular/core';
import {
  HttpEvent, HttpInterceptor, HttpHandler, HttpRequest
} from '@angular/common/http';
import { UtilityService } from '../services/utility.service';


@Injectable()
export class APIInterceptor implements HttpInterceptor {

  constructor(private utils: UtilityService) {}

  intercept(req: HttpRequest<any>, next: HttpHandler) {
    // Get the auth token from the service.
    const authToken = this.utils.getToken();

    /*
    * The verbose way:
    // Clone the request and replace the original headers with
    // cloned headers, updated with the authorization.
    const authReq = req.clone({
      headers: req.headers.set('Authorization', authToken)
    });
    */
    // Clone the request and set the new header in one step.
    const authReq = req.clone({ setHeaders: { "x-auth-token": authToken } });

    // send cloned request with header to the next handler.
    return next.handle(authReq);
  }
}

