import { EventEmitter } from "@angular/core"
import { Ingredients } from "../models/ingredient.model"

export class ShoppingListService{
    addedIng = new EventEmitter<Ingredients[]>()
   private ingredients : Ingredients[]= [
        new Ingredients('apple', 15),
        new Ingredients ('Tomato', 10)
      ]
      getShoppingList(){
          return this.ingredients.slice()
      }

      addIngToList(ingredient : Ingredients){
        this.ingredients.push(ingredient)
        this.addedIng.emit(this.ingredients.slice())
      }
}