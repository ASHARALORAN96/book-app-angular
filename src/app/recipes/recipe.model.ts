import { Ingredients } from "../models/ingredient.model";

export class Recipe {
    constructor(public name: string, public description: string, public imgUrl: string, public Ingredients : Ingredients[]) {}
}