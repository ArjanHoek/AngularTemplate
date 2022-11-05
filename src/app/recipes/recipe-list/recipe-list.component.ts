import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css'],
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
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

  @Output() onRecipeChange = new EventEmitter<Recipe>();

  constructor() {}

  ngOnInit(): void {}

  handleRecipeChange(recipe: Recipe) {
    this.onRecipeChange.emit(recipe);
  }
}
