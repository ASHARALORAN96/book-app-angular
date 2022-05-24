import { HttpClient, HttpParams } from "@angular/common/http";
import { Inject, Injectable } from "@angular/core";
import { tap,map } from "rxjs";
// import { exhaustMap } from "rxjs-compat/operator/exhaustMap";
import { take,exhaustMap } from "rxjs/operators";
import { AuthService } from "./auth/auth.service";
import { Recipe } from "./recipes/recipe.model";
import { RecipesService } from "./recipes/recipes.service";


@Injectable({providedIn:'root'})
export class RecipeDataStorage{
    token:string
    constructor(private http: HttpClient, private recipesService :RecipesService, private authService:AuthService){}

    saveRecipesinDB(){
        const recipes = this.recipesService.getRecipes()
            this.http.put('https://angular-pratice-e3422-default-rtdb.firebaseio.com/recipes.json',recipes).subscribe((data)=>{
                console.log(data)
            })
    }
    feachRecipes(){ 
            return this.http.get<Recipe[]>('https://angular-pratice-e3422-default-rtdb.firebaseio.com/recipes.json').pipe(tap((data)=>{
                this.recipesService.setNewRecipeArr(data)
               }))
    }
}

// map(recipes => {
//     return recipes.map(recipe => {
//       return {
//         ...recipe,
//         Ingredients: recipe.Ingredients ? recipe.Ingredients : []
//       };
//     });
//   }),