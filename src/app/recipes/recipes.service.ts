import { EventEmitter , Injectable } from "@angular/core";
import { Ingredients } from "../models/ingredient.model";
import { ShoppingListService } from "../shopping-list/shoppingList.service";
import { Recipe } from "./recipe.model";

@Injectable()
export class RecipesService{
    selectedRecipe = new EventEmitter<Recipe>()
    private recipes: Recipe[] = [
        new Recipe('test recipe name', 'this is for test only', 'https://static01.nyt.com/images/2021/03/28/dining/mc-shakshuka/mc-shakshuka-articleLarge.jpg', [new Ingredients('bread', 1), new Ingredients('Souce', 15)])
        ,new Recipe('test recipe name 2', 'Recipe two description', 'https://static01.nyt.com/images/2021/03/28/dining/mc-shakshuka/mc-shakshuka-articleLarge.jpg', [new Ingredients('meat', 2)])
      ]
    constructor(private ShoppingListService:ShoppingListService){}
    getRecipes(){
        return this.recipes.slice()
    }
    addToShoppingList (ing :Ingredients[]){
        ing.forEach(ingerdient =>{
            this.ShoppingListService.addIngToList(ingerdient)

        })
    }
}