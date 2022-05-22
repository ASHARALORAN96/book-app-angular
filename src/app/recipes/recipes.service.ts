import { EventEmitter , Injectable } from "@angular/core";
import { Subject } from "rxjs";
import { Ingredients } from "../models/ingredient.model";
import { ShoppingListService } from "../shopping-list/shoppingList.service";
import { Recipe } from "./recipe.model";

@Injectable()
export class RecipesService{
    selectedRecipe :Recipe
    changeRecipeArr= new Subject<Recipe[]>()
    private recipes: Recipe[] = [
        new Recipe('test recipe name', 'this is for test only', 'https://static01.nyt.com/images/2021/03/28/dining/mc-shakshuka/mc-shakshuka-articleLarge.jpg', [new Ingredients('bread', 1), new Ingredients('Souce', 15)])
        ,new Recipe('test recipe name 2', 'Recipe two description', 'https://static01.nyt.com/images/2021/03/28/dining/mc-shakshuka/mc-shakshuka-articleLarge.jpg', [new Ingredients('meat', 2)])
      ]
    constructor(private ShoppingListService:ShoppingListService){}
    getRecipes(){
        return this.recipes.slice()
    }
    getRecipeByIndex(id: number){
       return this.recipes[id]
    }
    addToShoppingList (ing :Ingredients[]){
        ing.forEach(ingerdient =>{
            this.ShoppingListService.addIngToList(ingerdient)

        })
    }
    addRecipe(recipe :Recipe){
        this.recipes.push(recipe)
        this.changeRecipeArr.next(this.recipes.slice())
    }

    editRecipe(index:number, newRecipe: Recipe){
        this.recipes[index] = newRecipe
        this.changeRecipeArr.next(this.recipes.slice())
    }
    deleteRecipe(id:number){
            this.recipes.splice(id,1)
            this.changeRecipeArr.next(this.recipes.slice())
    }

}