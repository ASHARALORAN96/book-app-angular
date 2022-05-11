import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import {Recipe} from '../recipe.model'
@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] =[
    new Recipe('test recipe name', 'this is for test only', 'https://static01.nyt.com/images/2021/03/28/dining/mc-shakshuka/mc-shakshuka-articleLarge.jpg')
    ,new Recipe('test recipe name 2', 'Recipe two description', 'https://static01.nyt.com/images/2021/03/28/dining/mc-shakshuka/mc-shakshuka-articleLarge.jpg')
  ]
 @Output('selectedRecipe') selectedRecipe= new EventEmitter<Recipe>()
  constructor() { }

  ngOnInit(): void {
  }
  handleSelectedRecipe(recipe:Recipe, event:Recipe){
  this.selectedRecipe.emit(recipe)
  }
}
