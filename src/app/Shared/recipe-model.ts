import { Ingredient } from "./ingredient.model";

export class Recipe {
  constructor(
public name: string,
public details: string,
public imagePath: string,
public ingredients: Ingredient[]
){}
    }
