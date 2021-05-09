import { EventEmitter } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { Recipe } from './recipe.model';

export class RecipesService {
  recipeSelected = new EventEmitter<Recipe>();
  private recipes: Recipe[] = [
    new Recipe(
      'Tiramisu',
      'A famous italian dessert',
      'https://static01.nyt.com/images/2017/04/05/dining/05COOKING-TIRAMISU1/05COOKING-TIRAMISU1-articleLarge.jpg',
      [
        new Ingredient('eggs', 6, 'item(s)'),
        new Ingredient('mascarpone', 250, 'g'),
        new Ingredient('ladyfinger biscuits', 300, 'g'),
      ]
    ),
    new Recipe(
      'Tiramisu',
      'A famous italian dessert',
      'https://static01.nyt.com/images/2017/04/05/dining/05COOKING-TIRAMISU1/05COOKING-TIRAMISU1-articleLarge.jpg',
      [
        new Ingredient('eggs', 6, 'item(s)'),
        new Ingredient('mascarpone', 250, 'g'),
        new Ingredient('ladyfinger biscuits', 300, 'g'),
      ]
    ),
    new Recipe(
      'Veggie Burger',
      'No meat, no milk, no fear',
      'https://assets.tmecosys.com/image/upload/t_web767x639/img/recipe/ras/Assets/1B8CA0A3-8D58-43D9-A2EB-1E834BA97F97/Derivates/EDCCBF93-5A3C-49E3-B4D6-CE86A55117FE.jpg',
      [
        new Ingredient('salad', 1, 'item(s)'),
        new Ingredient('bun', 2, 'item(s)'),
        new Ingredient('veggie patty', 2, 'item(s)'),
        new Ingredient('tomato', 1, 'item(s)'),
      ]
    ),
  ];

  getRecipes() {
    return [...this.recipes];
  }
}
