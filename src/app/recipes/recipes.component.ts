import { Recipe } from './recipes.model';
import { Component, OnInit } from '@angular/core';
import { RecipesService } from './recipes.service';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css'],
  providers: [RecipesService],
})
export class RecipesComponent implements OnInit {
  currentRecipe: Recipe;

  constructor(private recipesService: RecipesService) {}

  ngOnInit(): void {
    this.recipesService.recipeSelected.subscribe((recipe: Recipe) => {
      this.currentRecipe = recipe;
    });
  }
}
