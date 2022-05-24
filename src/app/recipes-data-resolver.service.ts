import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs";
import { RecipeDataStorage } from "./data-storage.service";
import { Recipe } from "./recipes/recipe.model";
import { RecipesService } from "./recipes/recipes.service";

@Injectable({providedIn:'root'})
export class recipesResolverService implements Resolve<Recipe[]>{
    constructor(private dataStorage: RecipeDataStorage, private recipeService :RecipesService){}
    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot){
        const recipes = this.recipeService.getRecipes()
        if(recipes.length === 0){
            return this.dataStorage.feachRecipes()
        }else{
            return recipes;
        }
    }

}