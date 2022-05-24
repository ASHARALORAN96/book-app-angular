import { Component, ElementRef, EventEmitter, OnDestroy, OnInit, Output, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';
import { Ingredients } from 'src/app/models/ingredient.model';
import { ShoppingListService } from '../shoppingList.service';
ShoppingListService
@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit, OnDestroy {
  // @Output() ingrediant = new EventEmitter<Ingredients>()
  @ViewChild('ShoppingForm', {static:true}) ShoppingForm : NgForm
  editSelectedIng : Ingredients
  editMode =false
  subscription :Subscription
  indexS : number
  // @ViewChild('name', {static:true}) name:ElementRef;
  // @ViewChild('amount', {static:true}) amount :ElementRef;
  constructor(private ShoppingListService:ShoppingListService) { }

  ngOnInit(): void {
    this.subscription =this.ShoppingListService.editIngEvent.subscribe(
      (index : number)=>{
        this.indexS = index
        this.editMode = true
        this.editSelectedIng = this.ShoppingListService.editIng(index);
       this.ShoppingForm.setValue({
         name: this.editSelectedIng.name,
         amount : this.editSelectedIng.amount
       });
        // console.log(this.ShoppingListService.editIng(index), this.ShoppingForm.value.name)
      }
      )
      // console.log(this.subscription)
  }
  // addToShoppingList(){
    //   this.ShoppingListService.addIngToList({name:this.name.nativeElement.value, amount:this.amount.nativeElement.value})
    // }
    submitForm(){
      if(this.editMode){
          this.ShoppingListService.editedIngArr(this.indexS, {name :this.ShoppingForm.value.name, amount :this.ShoppingForm.value.amount})
      }else{
        this.ShoppingListService.addIngToList({name :this.ShoppingForm.value.name, amount :this.ShoppingForm.value.amount})
      }
      this.editMode= false
      this.ShoppingForm.reset()
  }
  clearTheForm(){
    this.ShoppingForm.reset()
    this.editMode= false
  }
  deleteIng(){
  this.ShoppingListService.deleteIng(this.indexS)
  this.clearTheForm()
  }
  ngOnDestroy(): void {
    this.subscription.unsubscribe()
  }

}
