import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { Ingredients } from 'src/app/models/ingredient.model';
import { ShoppingListService } from '../shoppingList.service';
ShoppingListService
@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  // @Output() ingrediant = new EventEmitter<Ingredients>()
  @ViewChild('name', {static:true}) name:ElementRef;
  @ViewChild('amount', {static:true}) amount :ElementRef;
  constructor(private ShoppingListService:ShoppingListService) { }

  ngOnInit(): void {
  }
  addToShoppingList(){
    this.ShoppingListService.addIngToList({name:this.name.nativeElement.value, amount:this.amount.nativeElement.value})
  }
}
