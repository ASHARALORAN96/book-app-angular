import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable, map } from "rxjs";
import { take } from "rxjs/operators";
import { AuthService } from "./auth.service";

export class AuthGuard implements CanActivate{
    constructor(private authService :AuthService, private router :Router){}
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
        return this.authService.userSub.pipe(take(1),map((user)=>{
            const isAuth = !!user
            if(isAuth){
                return true
            }
               return this.router.createUrlTree(['auth'])
            
        }))
    }
}