import {
  Component,
  ElementRef,
  EventEmitter,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import { Ingredient } from 'src/app/Shared/ingredient.model';

@Component({
  selector: 'app-grocery-edit',
  templateUrl: './grocery-edit.component.html',
  styleUrls: ['./grocery-edit.component.css'],
})
export class GroceryEditComponent implements OnInit {
 @ViewChild('name') name: ElementRef<HTMLInputElement>;
 @ViewChild('amount') amount: ElementRef<HTMLInputElement>;
 @Output() ingredientAdded = new EventEmitter<Ingredient>();

  constructor() {}

  ngOnInit(): void {}

public onAdd() {
  const name = this.name.nativeElement.value;
  const amount = +this.amount.nativeElement.value;
  const ingredient = new Ingredient(name, amount);
  this.ingredientAdded.emit(ingredient);
}
}
