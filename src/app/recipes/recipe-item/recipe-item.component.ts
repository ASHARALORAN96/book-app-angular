import { Component, Input, OnInit, Output } from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipesService } from '../recipes.service';
RecipesService
@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {
@Input('recipeData') recipe : Recipe;
  constructor(private RecipesService:RecipesService) { }

  ngOnInit(): void {
  }
  onSelect (){
    this.RecipesService.selectedRecipe.emit(this.recipe)
  }

}
