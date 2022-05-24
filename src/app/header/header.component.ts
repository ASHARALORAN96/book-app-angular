import { Component, Input, Output , EventEmitter, OnInit, OnDestroy } from "@angular/core";
import { Router } from "@angular/router";
import { Subscription } from "rxjs";
import { AuthService } from "../auth/auth.service";
import { RecipeDataStorage } from "../data-storage.service";
// import { EventEmitter } from "stream";

@Component({
selector: 'app-header',
templateUrl: './header.component.html'
})
export class HeaderComponent implements OnInit, OnDestroy{
    isAuthanticated=false;
    isAuthSub: Subscription

    constructor(private dataStorage: RecipeDataStorage, private authService:AuthService){}
    saveRecipesData(){
        this.dataStorage.saveRecipesinDB()
    }
    ngOnInit(): void {
       this.isAuthSub= this.authService.userSub.subscribe(user=>{
            this.isAuthanticated= !!user
        })
    }
    fecheRecipesData(){
        this.dataStorage.feachRecipes().subscribe()
    }
    logoutUser(){
        this.authService.logout()
    }
    ngOnDestroy(): void {
        this.isAuthSub.unsubscribe()
    }
}