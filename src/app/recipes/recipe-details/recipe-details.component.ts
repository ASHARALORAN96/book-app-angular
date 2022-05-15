import { Component, Input, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipesService } from '../recipes.service';
import { ShoppingListService } from 'src/app/shopping-list/shoppingList.service';
@Component({
  selector: 'app-recipe-details',
  templateUrl: './recipe-details.component.html',
  styleUrls: ['./recipe-details.component.css']
})
export class RecipeDetailsComponent implements OnInit {
@Input('selectedRecipe') selectedRecipe:Recipe
 constructor(private RecipesService:RecipesService){

 }
  ngOnInit(): void {
  }
  addToShoppingList(){
    // this.selectedRecipe.Ingredients.forEach(ing => {
      this.RecipesService.addToShoppingList(this.selectedRecipe.Ingredients)
    // })
  }

}
