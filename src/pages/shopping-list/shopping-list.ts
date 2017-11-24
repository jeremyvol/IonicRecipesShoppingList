import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import {
    AlertController,
    LoadingController,
    PopoverController
} from 'ionic-angular';

import { Ingredient } from './../../models/ingredient';

import { AuthService } from '../../services/auth';
import { ShoppingListService } from '../../services/shopping-list';

import { SLOptionsPage } from './sl-options/sl-options';

@Component({
    selector: 'page-shopping-list',
    templateUrl: 'shopping-list.html'
})
export class ShoppingListPage {
    listItems: Ingredient[];

    constructor(
        private shoppingListService: ShoppingListService,
        private popoverCtrl: PopoverController,
        private authService: AuthService,
        private loadingCtrl: LoadingController,
        private alertCtrl: AlertController
    ) {}

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

    onShowOptions(ev: MouseEvent) {
        const loading = this.loadingCtrl.create({ content: 'Plese wait...' });
        const popover = this.popoverCtrl.create(SLOptionsPage);
        popover.present({ ev });
        popover.onDidDismiss(data => {
            if (data.action === 'load') {
                loading.present();
                this.authService
                    .getActiveUser()
                    .getToken()
                    .then((token: string) => {
                        this.shoppingListService.fetchList(token).subscribe(
                            (list: Ingredient[]) => {
                                loading.dismiss();
                                if (list) {
                                    this.listItems = list;
                                } else {
                                    this.listItems = [];
                                }
                            },
                            error => {
                                loading.dismiss();
                                this.handleError(error.message);
                            }
                        );
                    });
            } else if (data.action === 'store') {
                loading.present();
                this.authService
                    .getActiveUser()
                    .getToken()
                    .then((token: string) => {
                        this.shoppingListService.storeList(token).subscribe(
                            () => {
                                loading.dismiss();
                            },
                            error => {
                                loading.dismiss();
                                this.handleError(error.message);
                            }
                        );
                    });
            }
        });
    }

    private loadItems() {
        this.listItems = this.shoppingListService.getItems();
    }
    private handleError(errorMessage: string) {
        const alert = this.alertCtrl.create({
            title: 'An error occurred!',
            message: errorMessage,
            buttons: ['Ok']
        });
        alert.present();
    }
}
