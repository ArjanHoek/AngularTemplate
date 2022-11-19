import { EventEmitter } from '@angular/core';
import { Recipe } from './recipe.model';

export class RecipeService {
  private recipes: Recipe[] = [
    new Recipe(
      'A test recipe 1',
      'This is a test 1',
      '../../../assets/images/recipe-1.jpg'
    ),
    new Recipe(
      'A test recipe 2',
      'This is a test 2',
      '../../../assets/images/recipe-1.jpg'
    ),
  ];

  selectedRecipe = new EventEmitter<Recipe>();

  getRecipes() {
    return this.recipes.slice();
  }
}
