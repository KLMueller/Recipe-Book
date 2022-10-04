import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Recipe } from '../../../app/Shared/recipe-model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
 @Output() recipeSelected = new EventEmitter<Recipe>();
recipes: Recipe[] = [
new Recipe('Caramel Salted Chocolate Chip Cookies', 'the perfect combination of sweet and salty', 'https://images.unsplash.com/photo-1589431683447-2c0abd8d99e2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80'),
new Recipe('Broiled Brussel Sprouts', 'add full flavor with cumin and cayenne pepper', 'https://images.unsplash.com/photo-1607189760730-a330bf941e9c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8YnJ1c3NlbCUyMHNwcm91dHN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60'),
new Recipe('Pumpkin Pie', 'the graham cracker crust is a big hit with kids', 'https://images.unsplash.com/photo-1509461399763-ae67a981b254?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=876&q=80'),
];

constructor() { }

  ngOnInit(): void {}

public onRecipeSelected(recipe : Recipe){
this.recipeSelected.emit(recipe);
}
}
