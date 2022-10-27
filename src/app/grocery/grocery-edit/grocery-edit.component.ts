import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { GroceryService } from '../grocery.service';

@Component({
  selector: 'app-grocery-edit',
  templateUrl: './grocery-edit.component.html',
  styleUrls: ['./grocery-edit.component.css'],
})
export class GroceryEditComponent implements OnInit, OnDestroy {
  @ViewChild('editForm') editForm: NgForm;
  subscription: Subscription;
  editMode = false;
  editedIndex: number;
  editedIngredient: Ingredient;

  constructor(private groceryService: GroceryService) {}

  ngOnInit(): void {
    this.subscription = this.groceryService.startedEditing.subscribe(
      (id: number) => {
        this.editMode = true;
        this.editedIndex = id;
        this.editedIngredient = this.groceryService.Ingredients[id];
        this.editForm.setValue({
          name: this.editedIngredient.name,
          amount: this.editedIngredient.amount,
        });
      }
    );
  }

  public onSubmit() {
    const value = this.editForm.value;
    const ingredient = new Ingredient(value.name, value.amount);
    if (this.editMode) {
      this.groceryService.updateIngredient(this.editedIndex, ingredient);
    } else {
      this.groceryService.addIngredients([ingredient]);
    }
    this.editMode = false;
    this.editForm.reset();
  }

  public onClear() {
    this.editForm.reset();
    this.editMode = false;
  }

  public onDelete() {
    this.groceryService.deleteIngredient(this.editedIndex);
    this.onClear();
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
