import { Component, Input, OnInit } from '@angular/core';
import { Recipe } from '../Shared/recipe-model';

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.css'],
})
export class RecipeComponent implements OnInit {
  @Input() selectedRecipe: Recipe;

  constructor() {}

  ngOnInit(): void {}
}