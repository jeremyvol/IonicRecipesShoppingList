import { Ingredient } from './../models/ingredient';
import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { AuthService } from './auth';
import 'rxjs/Rx';

@Injectable()
export class ShoppingListService {
    private ingredients: Ingredient[] = [];

    constructor(private http: Http, private authService: AuthService) {}

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

    storeList(token: string) {
        const userId = this.authService.getActiveUser().uid;
        return this.http
            .put(
                `https://ionic3-recipe-book-e5b5c.firebaseio.com/${
                    userId
                }/shopping-list.json?auth=${token}`,
                this.ingredients
            )
            .map((response: Response) => {
                return response.json();
            });
    }

    fetchList(token: string) {
        const userId = this.authService.getActiveUser().uid;
        return this.http
            .get(
                `https://ionic3-recipe-book-e5b5c.firebaseio.com/${
                    userId
                }/shopping-list.json?auth=${token}`
            )
            .map((response: Response) => {
                return response.json();
            })
            .do((ingredients: Ingredient[]) => {
                if (ingredients) {
                    this.ingredients = ingredients;
                } else {
                    this.ingredients = [];
                }
            });
    }
}
