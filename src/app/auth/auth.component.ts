import { Component, ViewChild } from "@angular/core";
import { NgForm } from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";
import { Observable } from "rxjs";
import { AuthResData, AuthService } from "./auth.service";

@Component({
    selector: 'app-auth',
    templateUrl: './auth.component.html'
})
export class authComponent {
    isLogginMode = true;
    isLoading = false
    error = null
    @ViewChild('authForm', { static: false }) authForm: NgForm
    constructor(private authService: AuthService, private router: Router, private route :ActivatedRoute) { }
    onSwitchBtn() {
        this.isLogginMode = !this.isLogginMode
    }
    onAuthSubmit() {
        const email = this.authForm.value.email;
        const password = this.authForm.value.password;
        let observable:Observable<AuthResData>
        this.isLoading= true
        if (!this.authForm.valid) {
            return;
        }
        if (this.isLogginMode) {
            observable= this.authService.loggin(email,password)
            // this.router.navigate(['recipes'])
        } else {  
           observable= this.authService.signUp(email,password)
           
        }
        observable.subscribe(
            (res) => {
                console.log(res)
                this.isLoading=false
                this.router.navigate(['recipes'])
            },
            (errorRes) => {
                console.log(errorRes)
                this.error = errorRes
                this.isLoading=false
            }
        )
        this.authForm.reset()
    }
    onCloseAlert(){
        this.error=null
    }
   
}