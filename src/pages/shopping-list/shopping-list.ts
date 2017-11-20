import { Ingredient } from './../../models/ingredient';
import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ShoppingListService } from '../../services/shopping-list';

@Component({
    selector: 'page-shopping-list',
    templateUrl: 'shopping-list.html'
})
export class ShoppingListPage {
    listItems: Ingredient[];

    constructor(private shoppingListService: ShoppingListService) {}

    ionViewWillEnter() {
        this.loadItems();
    }

    onSubmit(form: NgForm): void {
        this.shoppingListService.addItem(
            form.value.ingredientName,
            form.value.amount
        );
        form.reset();
        this.loadItems();
    }

    onRemoveItem(index: number) {
        this.shoppingListService.removeIngredient(index);
        this.loadItems();
    }

    private loadItems() {
        this.listItems = this.shoppingListService.getItems();
    }
}
