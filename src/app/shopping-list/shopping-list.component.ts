import { Component, OnInit } from '@angular/core';
import { Ingredients } from '../models/ingredient.model';
import { ShoppingListService } from './shoppingList.service';
@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  ingredients: Ingredients[] = []
  constructor(private ShoppingListService: ShoppingListService) {
    this.ingredients = this.ShoppingListService.getShoppingList()
  }
  
  ngOnInit(): void {
    this.ShoppingListService.addedIng.subscribe(
      (ing: Ingredients[]) => {
        this.ingredients = ing
      }
    )
  }
  editIng(index: number){
    this.ShoppingListService.editIngEvent.next(index)
    console.log(this.ShoppingListService.editIngEvent)
  }


}
