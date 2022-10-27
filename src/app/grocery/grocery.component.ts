import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Ingredient } from '../Shared/ingredient.model';
import { GroceryService } from '../grocery/grocery.service';

@Component({
  selector: 'app-grocery',
  templateUrl: './grocery.component.html',
  styleUrls: ['./grocery.component.css'],
})
export class GroceryComponent implements OnInit, OnDestroy {
  ingredients: Ingredient[];
  private ingredientsChangedSubscription: Subscription;

  constructor(private GroceryService: GroceryService) {}

  ngOnInit(): void {
    this.ingredients = this.GroceryService.Ingredients;
    this.ingredientsChangedSubscription =
      this.GroceryService.ingredientsChanged.subscribe(
        (ingredients: Ingredient[]) => {
          this.ingredients = ingredients;
        }
      );
  }

  onEdit(id: number) {
    this.GroceryService.startedEditing.next(id);
  }

  ngOnDestroy(): void {
    this.ingredientsChangedSubscription.unsubscribe();
  }
}
