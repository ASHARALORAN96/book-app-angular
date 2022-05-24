import { Component, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { RecipeDataStorage } from 'src/app/data-storage.service';
import {Recipe} from '../recipe.model'
import { RecipesService } from '../recipes.service';
@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit ,OnDestroy{
  recipes: Recipe[] =[]
  recipeSub:Subscription
//  @Output('selectedRecipe') selectedRecipe= new EventEmitter<Recipe>()
  constructor(private RecipesService:RecipesService, private route :ActivatedRoute, private recipeDatastorage :RecipeDataStorage) { }

  ngOnInit(): void {
    this.recipeSub = this.RecipesService.changeRecipeArr.subscribe(
      ((recipes:Recipe[])=>{
        this.recipes= recipes
      })
    )
    this.recipes = this.RecipesService.getRecipes();
    // this.recipeDatastorage.feachRecipes(recipes)
    // this.RecipesService.selectedRecipe.emit()
  }
  handleSelectedRecipe(recipe:Recipe, event:Recipe){
    // this.RecipesService.selectedRecipe.emit(recipe)
    const id = +this.route.snapshot.params['id']
    this.RecipesService.getRecipeByIndex(id)
  }
  ngOnDestroy() {
    this.recipeSub.unsubscribe();
  }
}
