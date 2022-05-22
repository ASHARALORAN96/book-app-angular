import { Component, Input, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipesService } from '../recipes.service';
import { ShoppingListService } from 'src/app/shopping-list/shoppingList.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
@Component({
  selector: 'app-recipe-details',
  templateUrl: './recipe-details.component.html',
  styleUrls: ['./recipe-details.component.css']
})
export class RecipeDetailsComponent implements OnInit {
@Input('selectedRecipe') selectedRecipe:Recipe
id:number
 constructor(private RecipesService:RecipesService , private route :ActivatedRoute, private router :Router){

 }
  ngOnInit() {
    // const id = +this.route.snapshot.params['id']
    this.route.params.subscribe(
      (params :Params)=>{
        this.id=+params['id']
        this.selectedRecipe= this.RecipesService.getRecipeByIndex(+params['id'])

      }
    )
  }
  addToShoppingList(){
    // this.selectedRecipe.Ingredients.forEach(ing => {
      // this.selectedRecipe.name = this.route.snapshot.params['id']
      this.RecipesService.addToShoppingList(this.selectedRecipe.Ingredients)
    // })
  }
  deleteRecipe(){
    this.RecipesService.deleteRecipe(this.id)
    this.router.navigate(['../'], {relativeTo: this.route})
  }

}
