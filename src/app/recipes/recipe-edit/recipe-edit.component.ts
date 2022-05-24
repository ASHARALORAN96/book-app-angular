import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Recipe } from '../recipe.model';
import { RecipesService } from '../recipes.service';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.css']
})
export class RecipeEditComponent implements OnInit {
  recipe : Recipe;
  subscription : Subscription
  id: number;
  recipesForm:FormGroup= new FormGroup({
    'name': new FormControl('', Validators.required),
    'imgUrl': new FormControl('' , Validators.required),
    'description': new FormControl('' ,Validators.required),
      'Ingredients' : new FormArray([])
  });
  editMode= false;
 
  
  constructor(private route: ActivatedRoute, private recipeService : RecipesService,private router :Router ) { }

  ngOnInit() {
 this.subscription=   this.route.params
    .subscribe(
      (parms :Params)=>{
        this.id = +parms['id']
        this.editMode = parms['id'] != null;
        // console.log(this.editMode, "sdfghjk")
        this.initForm()
      }
    )
    
  }
  private initForm(){
    let recipeName = '';
    let recipeImg = '';
    let recipeDescription = '';
    let recipeIngreduent = new FormArray([])
    if(this.editMode){
      const recipe = this.recipeService.getRecipeByIndex(this.id)
      console.log(recipe)
      recipeName = recipe.name;
      recipeImg= recipe.imgUrl;
      recipeDescription= recipe.description;
      if(recipe['Ingredients']){
        for(let ing of recipe.Ingredients){
          recipeIngreduent.push(
            new FormGroup({
              name: new FormControl(ing.name, Validators.required),
              amount: new FormControl(ing.amount, [Validators.required, Validators.pattern(/^[1-9]+[0-9]*$/)])
            })
          )
        }

      }
    } 
    this.recipesForm = new FormGroup({
      name: new FormControl(recipeName, Validators.required),
      imgUrl: new FormControl(recipeImg , Validators.required),
      description: new FormControl(recipeDescription ,Validators.required),
        ingredient : recipeIngreduent
    })
   
  }
  submitForm(){
    const newRecipe = new Recipe(this.recipesForm.value['name'], this.recipesForm.value['discription'],this.recipesForm.value['imgUrl'], this.recipesForm.value['ingredients'])
    if(this.editMode){
      this.recipeService.editRecipe(this.id,this.recipesForm.value)
      this.onClear()
    

    }else{
      this.recipeService.addRecipe(this.recipesForm.value)
      this.onClear()
    }
  }
  get Ingerdient(){
    return (this.recipesForm.get('Ingredients') as FormArray).controls
  }

  addIngredientTotheList(){
    (<FormArray>this.recipesForm.get('Ingredients')).push(
      new FormGroup({
        'name': new FormControl(null, Validators.required),
        'amount': new FormControl(null ,  [Validators.required, Validators.pattern(/^[1-9]+[0-9]*$/)])
      })
    )
  }
  onClear(){
    this.router.navigate(['../'], {relativeTo: this.route})
  }
  deleteIngredientForRecipe(index: number){
    (<FormArray>this.recipesForm.get('Ingredients')).removeAt(index)
  }
  ngOnDestroy(): void {
    this.subscription.unsubscribe()
    this.editMode = false
  }
}
