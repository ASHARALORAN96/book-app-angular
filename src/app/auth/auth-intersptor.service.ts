import { HttpHandler, HttpInterceptor, HttpParams, HttpRequest } from "@angular/common/http";
import { AuthService } from "./auth.service";
import { take, exhaustMap } from "rxjs/operators";
import { Injectable } from "@angular/core";

@Injectable()
export class AuthIntercptor implements HttpInterceptor {
    constructor(private authService: AuthService) { }
    intercept(req: HttpRequest<any>, next: HttpHandler) {
        return this.authService.userSub.pipe(take(1), exhaustMap(user => {
            if(!user){
              return next.handle(req)
            }
            const ModifiedUser = req.clone({ params: new HttpParams().set('auth', user.token) })
            return next.handle(ModifiedUser)
        }))
    }
}