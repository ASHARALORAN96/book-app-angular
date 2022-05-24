import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { BehaviorSubject, catchError, Subject, tap, throwError } from "rxjs";
import { UserDataModel } from "./user.model";


export interface AuthResData {
    idToken: string,
    email: string,
    refreshToken: string,
    expiresIn: string,
    localId: string,
    registered?: boolean
}

@Injectable({ providedIn: 'root' })
export class AuthService {
    userSub = new BehaviorSubject<UserDataModel>(null)
    experdTimerForLogin : any
    constructor(private http: HttpClient, private router:Router) { }

    signUp(email: string, password: string) {
        return this.http.post<AuthResData>('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyAyiyb8JGqidWJPcGBtZyY8uZlMCV2X5pg',
            {
                email: email,
                password: password,
                returnSecureToken: true
            }).pipe(catchError(this.errorHandler), tap(resData=>this.handleUserData(resData.email,resData.localId,resData.idToken,resData.expiresIn)))
    }

    loggin(email: string, password: string) {
        return this.http.post<AuthResData>('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyAyiyb8JGqidWJPcGBtZyY8uZlMCV2X5pg',
            {
                email: email,
                password: password,
                returnSecureToken: true
            }
        ).pipe(catchError((this.errorHandler)), tap(resData=>this.handleUserData(resData.email,resData.localId,resData.idToken,resData.expiresIn)))
    }


    handleUserData(email:string,id:string,token:string,expiredDate:string) {
        const expDate = new Date(new Date().getTime() + +expiredDate * 1000)
        const user = new UserDataModel(email,id,token, expDate)
        this.userSub.next(user)
        this.autoLogout(+expiredDate*1000 )
        localStorage.setItem('userData', JSON.stringify(user))
    }

    outlogin(){
        const userData =JSON.parse(localStorage.getItem('userData'));
        if(!userData){
            return;
        }
        const loadedUser = new UserDataModel(userData.email,userData.id, userData._token,new Date(userData._tokenExpirationDate))
        if(loadedUser.token){
            this.userSub.next(loadedUser)
            this.autoLogout(new Date(userData._tokenExpirationDate).getTime() - new Date().getTime())

        }
    }
    logout(){
        this.userSub.next(null)
        this.router.navigate(['auth'])
        localStorage.removeItem('userData')
        if(this.experdTimerForLogin){
            clearTimeout(this.experdTimerForLogin)
        }
        this.experdTimerForLogin = null
    }
    autoLogout(experdTimer:number){
        this.experdTimerForLogin= setTimeout(()=>{
            this.logout()
        },experdTimer)


    }

    errorHandler(errorRes: HttpErrorResponse) {
        let errorMessage = 'cant know the eerror reason'
        if (!errorRes.error || !errorRes.error.error) {
            return throwError(errorMessage)
        }
        else {
            switch (errorRes.error.error.message) {
                case 'EMAIL_EXISTS':
                    errorMessage = 'this email is already exists'
                    break;
                case 'INVALID_PASSWORD' || 'EMAIL_NOT_FOUND':
                    errorMessage = 'invalid email or password'
                    break
            }
            return throwError(errorMessage)
        }

    }
}
