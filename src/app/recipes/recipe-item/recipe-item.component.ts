import { Component, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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
@Input() index: number
  constructor(private RecipesService:RecipesService ,private route:ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
  }

}
