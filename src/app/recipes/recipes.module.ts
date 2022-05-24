import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { AppRoutingModule } from "../app-routing.module";
import { RecipeDetailsComponent } from "./recipe-details/recipe-details.component";
import { RecipeEditComponent } from "./recipe-edit/recipe-edit.component";
import { RecipeItemComponent } from "./recipe-item/recipe-item.component";
import { RecipeListComponent } from "./recipe-list/recipe-list.component";
import { RecipesRoutesModule } from "./recipes-router.module";
import { RecipesComponent } from "./recipes.component";
import { StartRecipeComponent } from "./start-recipe/start-recipe.component";

@NgModule({
    declarations: [
        RecipesComponent,
        RecipeListComponent,
        RecipeDetailsComponent,
        RecipeItemComponent,
        RecipeEditComponent,
        StartRecipeComponent,
    ],
    imports: [RecipesRoutesModule ,ReactiveFormsModule, CommonModule],
})
export class RecipesModule{}