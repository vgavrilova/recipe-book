import { RecipesService } from './../../recipes.service';
import { Recipe } from '../../recipe.model';
import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css'],
})
export class RecipeItemComponent implements OnInit {
  @Input() recipeItem: Recipe;

  constructor(private recipesService: RecipesService) {}

  ngOnInit(): void {}

  onShowDetails() {
    this.recipesService.recipeSelected.emit(this.recipeItem);
  }
}
