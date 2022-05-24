import { EventEmitter } from "@angular/core"
import { Subject } from "rxjs"
import { Ingredients } from "../models/ingredient.model"

export class ShoppingListService{
    addedIng = new Subject<Ingredients[]>()
    editIngEvent = new Subject<number>()
   private ingredients : Ingredients[]= [
        new Ingredients('apple', 15),
        new Ingredients ('Tomato', 10)
      ]
      getShoppingList(){
          return this.ingredients.slice()
      }

      addIngToList(ingredient : Ingredients){
        this.ingredients.push(ingredient)
        this.addedIng.next(this.ingredients.slice())
      }

      editIng(index : number){
        return this.ingredients[index]

      }
      editedIngArr(index: number, newIng : Ingredients){
        // this.editIng(index)
        this.ingredients[index] = newIng
        return this.addedIng.next(this.ingredients.slice())
      }
      deleteIng(index: number){
        this.ingredients.splice(index,1)
        return this.addedIng.next(this.ingredients.slice())
      }
}