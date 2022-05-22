import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {Recipe} from '../recipe.model'
import { RecipesService } from '../recipes.service';
@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] =[]
//  @Output('selectedRecipe') selectedRecipe= new EventEmitter<Recipe>()
  constructor(private RecipesService:RecipesService, private route :ActivatedRoute) { }

  ngOnInit(): void {
    this.recipes = this.RecipesService.getRecipes();
    // this.RecipesService.selectedRecipe.emit()
  }
  handleSelectedRecipe(recipe:Recipe, event:Recipe){
    // this.RecipesService.selectedRecipe.emit(recipe)
    const id = +this.route.snapshot.params['id']
    this.RecipesService.getRecipeByIndex(id)
  }
}
