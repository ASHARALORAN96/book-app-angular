import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { Ingredients } from 'src/app/models/ingredient.model';
@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  @Output() ingrediant = new EventEmitter<Ingredients>()
  @ViewChild('name', {static:true}) name:ElementRef;
  @ViewChild('amount', {static:true}) amount :ElementRef;
  constructor() { }

  ngOnInit(): void {
  }
  addToShoppingList(){
    // console.log(this.name.nativeElement.value)
    // console.log(this.amount.nativeElement.value)
    const ing = new Ingredients(this.name.nativeElement.value,this.amount.nativeElement.value)
    this.ingrediant.emit(ing)
    // console.log(this.ingrediant)
  }
}
