import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Recipe } from '../recipes.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css'],
})
export class RecipeListComponent implements OnInit {
  @Output() showDetails = new EventEmitter<Recipe>();

  recipes: Recipe[] = [
    new Recipe(
      'Tiramisu',
      'A famous italian dessert',
      'https://static01.nyt.com/images/2017/04/05/dining/05COOKING-TIRAMISU1/05COOKING-TIRAMISU1-articleLarge.jpg'
    ),
    new Recipe(
      'Tiramisu',
      'A famous italian dessert',
      'https://static01.nyt.com/images/2017/04/05/dining/05COOKING-TIRAMISU1/05COOKING-TIRAMISU1-articleLarge.jpg'
    ),
    new Recipe(
      'Veggie Burger',
      'No meat, no milk, no fear',
      'https://assets.tmecosys.com/image/upload/t_web767x639/img/recipe/ras/Assets/1B8CA0A3-8D58-43D9-A2EB-1E834BA97F97/Derivates/EDCCBF93-5A3C-49E3-B4D6-CE86A55117FE.jpg'
    ),
  ];

  constructor() {}

  ngOnInit(): void {}

  onShowDetails(recipe: Recipe) {
    this.showDetails.emit(recipe);
  }
}
