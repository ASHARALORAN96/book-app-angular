import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HeaderComponent} from '../app/header/header.component';
import { RecipesComponent } from './recipes/recipes.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { ShoppingEditComponent } from './shopping-list/shopping-edit/shopping-edit.component';
import { RecipeListComponent } from './recipes/recipe-list/recipe-list.component';
import { RecipeDetailsComponent } from './recipes/recipe-details/recipe-details.component';
import { RecipeItemComponent } from './recipes/recipe-item/recipe-item.component'
import { FormsModule } from '@angular/forms';
import { DropdownDirectiveDirective } from './directive/dropdown-directive.directive';
// import { ShoppingListService } from './shopping-list/shoppingList.service';
ShoppingListService
import { RecipesService } from './recipes/recipes.service';
import { ShoppingListService } from './shopping-list/shoppingList.service';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RecipesComponent,
    ShoppingListComponent,
    ShoppingEditComponent,
    RecipeListComponent,
    RecipeDetailsComponent,
    RecipeItemComponent,
    DropdownDirectiveDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [ RecipesService ,ShoppingListService],
  bootstrap: [AppComponent]
})
export class AppModule { }
