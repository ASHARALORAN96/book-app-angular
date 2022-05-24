import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from '../app/header/header.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { ShoppingEditComponent } from './shopping-list/shopping-edit/shopping-edit.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// import { ShoppingListService } from './shopping-list/shoppingList.service';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
ShoppingListService
import { RecipesService } from './recipes/recipes.service';
import { ShoppingListService } from './shopping-list/shoppingList.service';
import { authComponent } from './auth/auth.component';
import { AuthIntercptor } from './auth/auth-intersptor.service';
import { RecipesModule } from './recipes/recipes.module';
import { ShoppingListModule } from './shopping-list/shoppingList.module';
import { SharedModule } from './shared/shared.module';
import { CoreModule } from './core.module';
import { AuthModule } from './auth/auth.module';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule,
    SharedModule,
    CoreModule,

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
