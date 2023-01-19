import { Subject } from 'rxjs';
import { Ingredient } from '../shared/ingredient.model';

export class ShoppingListService {
  private ingredients: Ingredient[] = [
    new Ingredient('Apples', 5),
    new Ingredient('Tomatoes', 10),
  ];

  ingredientAdded = new Subject<Ingredient[]>();

  getIngredients() {
    return this.ingredients.slice();
  }

  emitIngredients() {
    console.log('Emitted');
    this.ingredientAdded.next(this.getIngredients());
  }

  addIngredient(ingredient: Ingredient, preventEmit: boolean = false) {
    const found = this.ingredients.find((i) => i.name === ingredient.name);

    if (found) {
      found.amount += ingredient.amount;
      return;
    }

    this.ingredients.push(ingredient);

    if (!preventEmit) {
      this.emitIngredients();
    }
  }

  addIngredients(ingredients: Ingredient[]) {
    ingredients.forEach((ingredient: Ingredient) =>
      this.addIngredient(ingredient, true)
    );

    this.emitIngredients();
  }
}
