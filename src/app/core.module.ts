import { HTTP_INTERCEPTORS } from "@angular/common/http";
import { Injectable, NgModule } from "@angular/core";
import { AuthIntercptor } from "./auth/auth-intersptor.service";
import { RecipesService } from "./recipes/recipes.service";
import { ShoppingListService } from "./shopping-list/shoppingList.service";

@NgModule({
    providers: [RecipesService, ShoppingListService, { provide: HTTP_INTERCEPTORS, useClass: AuthIntercptor, multi: true }]
})
export class CoreModule{

}