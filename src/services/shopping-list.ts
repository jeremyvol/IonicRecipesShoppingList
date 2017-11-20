import { Ingredient } from './../models/ingredient';

export class ShoppingListService {
    private ingredients: Ingredient[] = [];

    addIngredient(ingredient: Ingredient) {
        this.ingredients.push(ingredient);
    }

    addItem(name: string, amount: number) {
        this.ingredients.push(new Ingredient(name, amount));
    }

    addItems(ingredients: Ingredient[]) {
        this.ingredients.push(...ingredients);
    }

    removeIngredient(index: number) {
        this.ingredients.splice(index, 1);
    }

    getItems() {
        return this.ingredients.slice();
    }
}
