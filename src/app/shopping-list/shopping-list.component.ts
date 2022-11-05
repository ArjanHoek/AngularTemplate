import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css'],
})
export class ShoppingListComponent implements OnInit {
  ingredients: Ingredient[] = [
    new Ingredient('Apples', 5),
    new Ingredient('Tomatoes', 10),
  ];

  constructor() {}

  ngOnInit(): void {}

  addIngredient(ingredient: Ingredient) {
    const found = this.ingredients.find((i) => i.name === ingredient.name);

    if (found) {
      found.amount += ingredient.amount;
      return;
    }

    this.ingredients.push(ingredient);
  }
}
