import { Component, OnInit } from '@angular/core';
import { Ingredients } from '../models/ingredient.model';
@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  ingredients : Ingredients[]= [
    new Ingredients('apple', 15),
    new Ingredients ('Tomato', 10)
  ]
  constructor() { }

  ngOnInit(): void {
  }
  addIngToList(ingredient : Ingredients){
    this.ingredients.push(ingredient)
  }

}
