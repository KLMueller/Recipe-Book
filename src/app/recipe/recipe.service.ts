import { Subject } from 'rxjs';
import { Recipe } from '../Shared/recipe-model';
import { Ingredient } from '../Shared/ingredient.model';

export class RecipeService {
  recipesChanged = new Subject<Recipe[]>();

  private recipes: Recipe[] = [
    new Recipe(
      'Caramel Salted Chocolate Chip Cookies',
      'the perfect combination of sweet and salty',
      'https://images.unsplash.com/photo-1589431683447-2c0abd8d99e2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80',
      [new Ingredient('Flour', 1), new Ingredient('Eggs', 3)]
    ),
    new Recipe(
      'Broiled Brussel Sprouts',
      'add full flavor with cumin and cayenne pepper',
      'https://images.unsplash.com/photo-1607189760730-a330bf941e9c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8YnJ1c3NlbCUyMHNwcm91dHN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
      [new Ingredient('Brussel Sprouts', 20)]
    ),
    new Recipe(
      'Pumpkin Pie',
      'the graham cracker crust is a big hit with kids',
      'https://images.unsplash.com/photo-1509461399763-ae67a981b254?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=876&q=80',

      [new Ingredient('Graham Crackers', 1), new Ingredient('Brown Sugar', 1)]
    ),
  ];

  public get Recipes() {
    return this.recipes.slice(); // return a copy
  }

  public set Recipes(recipes: Recipe[]) {
    this.recipes = recipes;
    this.recipesChanged.next(this.recipes.slice());
  }

  public getRecipe(index: number) {
    return this.recipes[index];
  }

  public addRecipe(recipe: Recipe) {
    this.recipes.push(recipe);
    this.recipesChanged.next(this.recipes.slice());
  }

  public updateRecipe(id: number, recipe: Recipe) {
    this.recipes[id] = recipe;
    this.recipesChanged.next(this.recipes.slice());
  }

  public deleteRecipe(id: number) {
    this.recipes.splice(id, 1);
    this.recipesChanged.next(this.recipes.slice());
  }
}
