import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AuthGuard } from "../auth/auth-guard.service";
import { recipesResolverService } from "../recipes-data-resolver.service";
import { RecipeDetailsComponent } from "./recipe-details/recipe-details.component";
import { RecipeEditComponent } from "./recipe-edit/recipe-edit.component";
import { RecipesComponent } from "./recipes.component";
import { StartRecipeComponent } from "./start-recipe/start-recipe.component";


const recipesRoutes: Routes= [
    {
        path: '',
        component: RecipesComponent,
        canActivate: [AuthGuard],
        children: [
          { path: '', component: StartRecipeComponent },
          { path: 'new', component: RecipeEditComponent },
          {
            path: ':id',
            component: RecipeDetailsComponent,
            resolve: [recipesResolverService]
          },
          {
            path: ':id/edit',
            component: RecipeEditComponent,
            resolve: [recipesResolverService]
          }
        ]
      },
]
@NgModule({
    imports: [RouterModule.forChild(recipesRoutes)],
    exports: [RouterModule]
})
export class RecipesRoutesModule{

}