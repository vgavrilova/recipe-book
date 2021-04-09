import { Ingredient } from './../shared/ingredient.model';
import { Component } from '@angular/core';

@Component({
  selector: 'app-shopping-list',
  templateUrl: 'shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css'],
})
export class ShoppingListComponent {
  ingredients: Ingredient[] = [
    new Ingredient('Marcarpone', 500, 'g'),
    new Ingredient('Sugar', 100, 'g'),
  ];

  addIngredient(ingr: Ingredient) {
    this.ingredients.push(ingr);
  }

  removeIngredient(index: number) {
    this.ingredients.splice(index, 1);
  }
}
