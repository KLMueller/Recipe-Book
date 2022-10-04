import { Component, Input, OnInit } from '@angular/core';
import { Ingredient } from '../Shared/ingredient.model';

@Component({
  selector: 'app-grocery',
  templateUrl: './grocery.component.html',
  styleUrls: ['./grocery.component.css']
})
export class GroceryComponent implements OnInit {
@Input() ingredientAdded: Ingredient;
  ingredients: Ingredient[]= [
  new Ingredient('Apples', 3),
  new Ingredient('Caramel', 1),
];

  constructor() { }

  ngOnInit(): void {
  }
public onIngredientAdded(ingredient: Ingredient) {
  this.ingredients.push(ingredient);
}
}
