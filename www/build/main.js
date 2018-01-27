webpackJsonp([0],{

/***/ 112:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RecipesService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(118);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__(338);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__auth__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__models_recipe__ = __webpack_require__(840);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var RecipesService = (function () {
    function RecipesService(http, authService) {
        this.http = http;
        this.authService = authService;
        this.recipes = [];
    }
    RecipesService.prototype.addRecipe = function (title, description, difficulty, ingredients) {
        this.recipes.push(new __WEBPACK_IMPORTED_MODULE_4__models_recipe__["a" /* Recipe */](title, description, difficulty, ingredients));
    };
    RecipesService.prototype.getRecipes = function () {
        return this.recipes.slice();
    };
    RecipesService.prototype.updateRecipe = function (index, title, description, difficulty, ingredients) {
        this.recipes[index] = new __WEBPACK_IMPORTED_MODULE_4__models_recipe__["a" /* Recipe */](title, description, difficulty, ingredients);
    };
    RecipesService.prototype.removeRecipe = function (index) {
        this.recipes.splice(index, 1);
    };
    RecipesService.prototype.storeList = function (token) {
        var userId = this.authService.getActiveUser().uid;
        return this.http
            .put("https://ionic3-recipe-book-e5b5c.firebaseio.com/" + userId + "/recipes.json?auth=" + token, this.recipes)
            .map(function (response) { return response.json(); });
    };
    RecipesService.prototype.fetchList = function (token) {
        var _this = this;
        var userId = this.authService.getActiveUser().uid;
        return this.http
            .get("https://ionic3-recipe-book-e5b5c.firebaseio.com/" + userId + "/recipes.json?auth=" + token)
            .map(function (response) {
            var recipes = response.json()
                ? response.json()
                : [];
            for (var _i = 0, recipes_1 = recipes; _i < recipes_1.length; _i++) {
                var item = recipes_1[_i];
                if (!item.hasOwnProperty('ingredients')) {
                    item.ingredients = [];
                }
            }
            return recipes;
        })
            .do(function (recipes) {
            if (recipes) {
                _this.recipes = recipes;
            }
            else {
                _this.recipes = [];
            }
        });
    };
    RecipesService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */], __WEBPACK_IMPORTED_MODULE_3__auth__["a" /* AuthService */]])
    ], RecipesService);
    return RecipesService;
}());

//# sourceMappingURL=recipes.js.map

/***/ }),

/***/ 176:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ShoppingListService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__models_ingredient__ = __webpack_require__(561);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(118);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__auth__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Rx__ = __webpack_require__(338);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_Rx__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ShoppingListService = (function () {
    function ShoppingListService(http, authService) {
        this.http = http;
        this.authService = authService;
        this.ingredients = [];
    }
    ShoppingListService.prototype.addIngredient = function (ingredient) {
        this.ingredients.push(ingredient);
    };
    ShoppingListService.prototype.addItem = function (name, amount) {
        this.ingredients.push(new __WEBPACK_IMPORTED_MODULE_0__models_ingredient__["a" /* Ingredient */](name, amount));
    };
    ShoppingListService.prototype.addItems = function (ingredients) {
        (_a = this.ingredients).push.apply(_a, ingredients);
        var _a;
    };
    ShoppingListService.prototype.removeIngredient = function (index) {
        this.ingredients.splice(index, 1);
    };
    ShoppingListService.prototype.getItems = function () {
        return this.ingredients.slice();
    };
    ShoppingListService.prototype.storeList = function (token) {
        var userId = this.authService.getActiveUser().uid;
        return this.http
            .put("https://ionic3-recipe-book-e5b5c.firebaseio.com/" + userId + "/shopping-list.json?auth=" + token, this.ingredients)
            .map(function (response) {
            return response.json();
        });
    };
    ShoppingListService.prototype.fetchList = function (token) {
        var _this = this;
        var userId = this.authService.getActiveUser().uid;
        return this.http
            .get("https://ionic3-recipe-book-e5b5c.firebaseio.com/" + userId + "/shopping-list.json?auth=" + token)
            .map(function (response) {
            return response.json();
        })
            .do(function (ingredients) {
            if (ingredients) {
                _this.ingredients = ingredients;
            }
            else {
                _this.ingredients = [];
            }
        });
    };
    ShoppingListService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Http */], __WEBPACK_IMPORTED_MODULE_3__auth__["a" /* AuthService */]])
    ], ShoppingListService);
    return ShoppingListService;
}());

//# sourceMappingURL=shopping-list.js.map

/***/ }),

/***/ 191:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DatabaseOptionsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_ionic_angular__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DatabaseOptionsPage = (function () {
    function DatabaseOptionsPage(viewCtrl) {
        this.viewCtrl = viewCtrl;
    }
    DatabaseOptionsPage.prototype.onAction = function (action) {
        this.viewCtrl.dismiss({ action: action });
    };
    DatabaseOptionsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["m" /* Component */])({
            selector: 'page-database-optioms',
            template: "\n        <ion-grid text-center>\n            <ion-row>\n                <ion-col>\n                    <h3>Store & Load</h3>\n                </ion-col>\n            </ion-row>\n\n            <ion-row>\n                <ion-col>\n                    <button ion-button outline (click)=\"onAction('load')\">Load List</button>\n                </ion-col>\n            </ion-row>\n            <ion-row>\n                <ion-col>\n                    <button ion-button outline (click)=\"onAction('store')\">Save List</button>\n                </ion-col>\n            </ion-row>\n        </ion-grid>\n    "
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0_ionic_angular__["l" /* ViewController */]])
    ], DatabaseOptionsPage);
    return DatabaseOptionsPage;
}());

//# sourceMappingURL=database-options.js.map

/***/ }),

/***/ 192:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditRecipePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_recipes__ = __webpack_require__(112);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var EditRecipePage = (function () {
    function EditRecipePage(navParams, actionSheetController, alertCtrl, toastCtrl, recipesService, navCtrl) {
        this.navParams = navParams;
        this.actionSheetController = actionSheetController;
        this.alertCtrl = alertCtrl;
        this.toastCtrl = toastCtrl;
        this.recipesService = recipesService;
        this.navCtrl = navCtrl;
        this.mode = 'New';
        this.selectOptions = ['Easy', 'Medium', 'Hard'];
    }
    EditRecipePage.prototype.ngOnInit = function () {
        this.mode = this.navParams.get('mode');
        if (this.mode === 'Edit') {
            this.recipe = this.navParams.get('recipe');
            this.index = this.navParams.get('index');
        }
        this.initializeForm();
    };
    EditRecipePage.prototype.onSubmit = function () {
        var value = this.recipeForm.value;
        var ingredients = [];
        if (value.ingredients.length > 0) {
            ingredients = value.ingredients.map(function (name) {
                return { name: name, amount: 1 };
            });
        }
        if (this.mode === 'Edit') {
            this.recipesService.updateRecipe(this.index, value.title, value.description, value.difficulty, ingredients);
        }
        else {
            this.recipesService.addRecipe(value.title, value.description, value.difficulty, ingredients);
        }
        this.recipeForm.reset();
        this.navCtrl.popToRoot();
    };
    EditRecipePage.prototype.onManageIngredients = function () {
        var _this = this;
        var actionSheet = this.actionSheetController.create({
            title: 'What do you want to do?',
            buttons: [
                {
                    text: 'Add Ingredient',
                    handler: function () {
                        _this.createNewIngredientAlert().present();
                    }
                },
                {
                    text: 'Remove all ingredients',
                    role: 'destructive',
                    handler: function () {
                        var fArray = _this.recipeForm.get('ingredients');
                        var len = fArray.length;
                        if (len > 0) {
                            for (var i = len - 1; i >= 0; i--) {
                                fArray.removeAt(i);
                            }
                        }
                        var toast = _this.toastCtrl.create({
                            message: 'All ingredients were deleted!',
                            duration: 1500,
                            position: 'bottom'
                        });
                        toast.present();
                    }
                },
                {
                    text: 'Cancel',
                    role: 'cancel'
                }
            ]
        });
        actionSheet.present();
    };
    EditRecipePage.prototype.createNewIngredientAlert = function () {
        var _this = this;
        return this.alertCtrl.create({
            title: 'Add Ingredient',
            inputs: [
                {
                    name: 'name',
                    placeholder: 'Name'
                }
            ],
            buttons: [
                {
                    text: 'Cancel',
                    role: 'cancel'
                },
                {
                    text: 'Add',
                    handler: function (data) {
                        if (data.name.trim() === '' || data.name === null) {
                            var toast_1 = _this.toastCtrl.create({
                                message: 'Please enter a valid value!',
                                duration: 1500,
                                position: 'bottom'
                            });
                            toast_1.present();
                            return;
                        }
                        _this.recipeForm.get('ingredients').push(new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormControl */](data.name, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].required));
                        var toast = _this.toastCtrl.create({
                            message: 'Item added!',
                            duration: 1500,
                            position: 'bottom'
                        });
                        toast.present();
                    }
                }
            ]
        });
    };
    EditRecipePage.prototype.initializeForm = function () {
        var title = null;
        var description = null;
        var difficulty = 'Medium';
        var ingredients = [];
        if (this.mode === 'Edit') {
            title = this.recipe.title;
            description = this.recipe.description;
            difficulty = this.recipe.difficulty;
            for (var _i = 0, _a = this.recipe.ingredients; _i < _a.length; _i++) {
                var ingredient = _a[_i];
                ingredients.push(new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormControl */](ingredient.name, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].required));
            }
        }
        this.recipeForm = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* FormGroup */]({
            title: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormControl */](title, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].required),
            description: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormControl */](description, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].required),
            difficulty: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormControl */](difficulty, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].required),
            ingredients: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormArray */](ingredients)
        });
    };
    EditRecipePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-edit-recipe',template:/*ion-inline-start:"D:\WebDev\apps\Udemy\Ionic\recipes\src\pages\edit-recipe\edit-recipe.html"*/'<ion-header>\n    <ion-navbar>\n        <ion-title>{{ mode }} Recipe</ion-title>\n    </ion-navbar>\n</ion-header>\n\n\n<ion-content padding>\n    <form [formGroup]="recipeForm" (ngSubmit)="onSubmit()">\n        <ion-list>\n            <ion-item>\n                <ion-label floating>Title</ion-label>\n                <ion-input formControlName="title" type="text"></ion-input>\n            </ion-item>\n            <ion-item>\n                <ion-label floating>Description</ion-label>\n                <ion-textarea formControlName="description"></ion-textarea>\n            </ion-item>\n            <ion-item>\n                <ion-label floating>Difficulty</ion-label>\n                <ion-select formControlName="difficulty">\n                    <ion-option *ngFor="let option of selectOptions" [value]="option">{{ option }}</ion-option>\n                </ion-select>\n            </ion-item>\n        </ion-list>\n        <button type="button" clear ion-button block (click)="onManageIngredients()">Manage Ingredients</button>\n        <ion-list formArrayName="ingredients">\n            <ion-item *ngFor="let igControl of recipeForm.get(\'ingredients\').controls; let i = index">\n                <ion-label floating>Name</ion-label>\n                <ion-input type="text" [formControlName]="i"></ion-input>\n            </ion-item>\n        </ion-list>\n        <button type="submit" ion-button block [disabled]="recipeForm.invalid">{{ mode }} Recipe</button>\n    </form>\n</ion-content>\n'/*ion-inline-end:"D:\WebDev\apps\Udemy\Ionic\recipes\src\pages\edit-recipe\edit-recipe.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_3__services_recipes__["a" /* RecipesService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */]])
    ], EditRecipePage);
    return EditRecipePage;
}());

//# sourceMappingURL=edit-recipe.js.map

/***/ }),

/***/ 205:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 205;

/***/ }),

/***/ 250:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 250;

/***/ }),

/***/ 336:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shopping_list_shopping_list__ = __webpack_require__(337);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__recipes_recipes__ = __webpack_require__(428);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var TabsPage = (function () {
    function TabsPage() {
        this.shoppingListPage = __WEBPACK_IMPORTED_MODULE_1__shopping_list_shopping_list__["a" /* ShoppingListPage */];
        this.recipesPage = __WEBPACK_IMPORTED_MODULE_2__recipes_recipes__["a" /* RecipesPage */];
    }
    TabsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"D:\WebDev\apps\Udemy\Ionic\recipes\src\pages\tabs\tabs.html"*/'<ion-tabs>\n    <ion-tab [root]="shoppingListPage" tabTitle="Shopping List" tabIcon="list-box"></ion-tab>\n    <ion-tab [root]="recipesPage" tabTitle="Recipes" tabIcon="book"></ion-tab>\n</ion-tabs>\n'/*ion-inline-end:"D:\WebDev\apps\Udemy\Ionic\recipes\src\pages\tabs\tabs.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], TabsPage);
    return TabsPage;
}());

//# sourceMappingURL=tabs.js.map

/***/ }),

/***/ 337:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ShoppingListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_shopping_list__ = __webpack_require__(176);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__database_options_database_options__ = __webpack_require__(191);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ShoppingListPage = (function () {
    function ShoppingListPage(shoppingListService, popoverCtrl, authService, loadingCtrl, alertCtrl) {
        this.shoppingListService = shoppingListService;
        this.popoverCtrl = popoverCtrl;
        this.authService = authService;
        this.loadingCtrl = loadingCtrl;
        this.alertCtrl = alertCtrl;
    }
    ShoppingListPage.prototype.ionViewWillEnter = function () {
        this.loadItems();
    };
    ShoppingListPage.prototype.onSubmit = function (form) {
        this.shoppingListService.addItem(form.value.ingredientName, form.value.amount);
        form.reset();
        this.loadItems();
    };
    ShoppingListPage.prototype.onRemoveItem = function (index) {
        this.shoppingListService.removeIngredient(index);
        this.loadItems();
    };
    ShoppingListPage.prototype.onShowOptions = function (ev) {
        var _this = this;
        var loading = this.loadingCtrl.create({ content: 'Please wait...' });
        var popover = this.popoverCtrl.create(__WEBPACK_IMPORTED_MODULE_4__database_options_database_options__["a" /* DatabaseOptionsPage */]);
        popover.present({ ev: ev });
        popover.onDidDismiss(function (data) {
            if (!data) {
                return;
            }
            if (data.action === 'load') {
                loading.present();
                _this.authService
                    .getActiveUser()
                    .getToken()
                    .then(function (token) {
                    _this.shoppingListService.fetchList(token).subscribe(function (list) {
                        loading.dismiss();
                        if (list) {
                            _this.listItems = list;
                        }
                        else {
                            _this.listItems = [];
                        }
                    }, function (error) {
                        loading.dismiss();
                        _this.handleError(error.json().error);
                    });
                });
            }
            else if (data.action === 'store') {
                loading.present();
                _this.authService
                    .getActiveUser()
                    .getToken()
                    .then(function (token) {
                    _this.shoppingListService.storeList(token).subscribe(function () {
                        loading.dismiss();
                    }, function (error) {
                        loading.dismiss();
                        _this.handleError(error.json().error);
                    });
                });
            }
        });
    };
    ShoppingListPage.prototype.loadItems = function () {
        this.listItems = this.shoppingListService.getItems();
    };
    ShoppingListPage.prototype.handleError = function (errorMessage) {
        var alert = this.alertCtrl.create({
            title: 'An error occurred!',
            message: errorMessage,
            buttons: ['Ok']
        });
        alert.present();
    };
    ShoppingListPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-shopping-list',template:/*ion-inline-start:"D:\WebDev\apps\Udemy\Ionic\recipes\src\pages\shopping-list\shopping-list.html"*/'<ion-header>\n    <ion-navbar>\n        <ion-buttons start>\n            <button ion-button icon-only menuToggle>\n                <ion-icon name="menu"></ion-icon>\n            </button>\n        </ion-buttons>\n\n        <ion-buttons end>\n            <button ion-button icon-only (click)="onShowOptions($event)">\n                <ion-icon name="more"></ion-icon>\n            </button>\n        </ion-buttons>\n\n        <ion-title>Shopping List</ion-title>\n    </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n    <form #f="ngForm" (ngSubmit)="onSubmit(f)">\n        <ion-list>\n            <ion-item>\n                <ion-label fixed>Name</ion-label>\n                <ion-input ngModel required type="text" name="ingredientName" placeholder="Milk"></ion-input>\n            </ion-item>\n            <ion-item>\n                <ion-label fixed>Amount</ion-label>\n                <ion-input ngModel required type="number" name="amount" placeholder="2"></ion-input>\n            </ion-item>\n        </ion-list>\n        <button ion-button type="submit" block [disabled]="f.invalid">Add Item</button>\n    </form>\n    <ion-list>\n        <ion-item *ngFor="let item of listItems; let i = index" (press)="onRemoveItem(i)">\n            <h3>{{item.name}} ({{item.amount}})</h3>\n\n        </ion-item>\n    </ion-list>\n</ion-content>\n'/*ion-inline-end:"D:\WebDev\apps\Udemy\Ionic\recipes\src\pages\shopping-list\shopping-list.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__services_shopping_list__["a" /* ShoppingListService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* PopoverController */],
            __WEBPACK_IMPORTED_MODULE_2__services_auth__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */]])
    ], ShoppingListPage);
    return ShoppingListPage;
}());

//# sourceMappingURL=shopping-list.js.map

/***/ }),

/***/ 428:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RecipesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_recipes__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__database_options_database_options__ = __webpack_require__(191);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__edit_recipe_edit_recipe__ = __webpack_require__(192);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__recipe_recipe__ = __webpack_require__(429);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var RecipesPage = (function () {
    function RecipesPage(navCtrl, recipesService, popoverCtrl, authService, loadingCtrl, alertCtrl) {
        this.navCtrl = navCtrl;
        this.recipesService = recipesService;
        this.popoverCtrl = popoverCtrl;
        this.authService = authService;
        this.loadingCtrl = loadingCtrl;
        this.alertCtrl = alertCtrl;
    }
    RecipesPage.prototype.ionViewWillEnter = function () {
        this.recipes = this.recipesService.getRecipes();
    };
    RecipesPage.prototype.onNewRecipe = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__edit_recipe_edit_recipe__["a" /* EditRecipePage */], { mode: 'New' });
    };
    RecipesPage.prototype.onLoadRecipe = function (recipe, index) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__recipe_recipe__["a" /* RecipePage */], { recipe: recipe, index: index });
    };
    RecipesPage.prototype.onShowOptions = function (ev) {
        var _this = this;
        var loading = this.loadingCtrl.create({ content: 'Please wait...' });
        var popover = this.popoverCtrl.create(__WEBPACK_IMPORTED_MODULE_4__database_options_database_options__["a" /* DatabaseOptionsPage */]);
        popover.present({ ev: ev });
        popover.onDidDismiss(function (data) {
            if (!data) {
                return;
            }
            if (data.action === 'load') {
                loading.present();
                _this.authService
                    .getActiveUser()
                    .getToken()
                    .then(function (token) {
                    _this.recipesService.fetchList(token).subscribe(function (list) {
                        loading.dismiss();
                        if (list) {
                            _this.recipes = list;
                        }
                        else {
                            _this.recipes = [];
                        }
                    }, function (error) {
                        loading.dismiss();
                        _this.handleError(error.json().error);
                    });
                });
            }
            else if (data.action === 'store') {
                loading.present();
                _this.authService
                    .getActiveUser()
                    .getToken()
                    .then(function (token) {
                    _this.recipesService.storeList(token).subscribe(function () {
                        loading.dismiss();
                    }, function (error) {
                        loading.dismiss();
                        _this.handleError(error.json().error);
                    });
                });
            }
        });
    };
    // private loadItems() {
    //     this.recipes = this.recipesService.getRecipes();
    // }
    RecipesPage.prototype.handleError = function (errorMessage) {
        var alert = this.alertCtrl.create({
            title: 'An error occurred!',
            message: errorMessage,
            buttons: ['Ok']
        });
        alert.present();
    };
    RecipesPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-recipes',template:/*ion-inline-start:"D:\WebDev\apps\Udemy\Ionic\recipes\src\pages\recipes\recipes.html"*/'<ion-header>\n    <ion-navbar>\n        <ion-buttons start>\n            <button ion-button icon-only menuToggle>\n                <ion-icon name="menu"></ion-icon>\n            </button>\n        </ion-buttons>\n        <ion-buttons end>\n            <button ion-button icon-only (click)="onNewRecipe()">\n                <ion-icon name="add"></ion-icon>\n            </button>\n            <button ion-button icon-only (click)="onShowOptions($event)">\n                <ion-icon name="more"></ion-icon>\n            </button>\n        </ion-buttons>\n        <ion-title>\n            Recipes\n        </ion-title>\n    </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n    <ion-list>\n        <button ion-item *ngFor="let recipe of recipes; let i = index" (click)="onLoadRecipe(recipe, i)">\n            <h2>{{ recipe.title }}</h2>\n            <ion-note>{{ recipe.difficulty }}</ion-note>\n        </button>\n    </ion-list>\n</ion-content>\n'/*ion-inline-end:"D:\WebDev\apps\Udemy\Ionic\recipes\src\pages\recipes\recipes.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_3__services_recipes__["a" /* RecipesService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* PopoverController */],
            __WEBPACK_IMPORTED_MODULE_2__services_auth__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */]])
    ], RecipesPage);
    return RecipesPage;
}());

//# sourceMappingURL=recipes.js.map

/***/ }),

/***/ 429:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RecipePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_ionic_angular__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__edit_recipe_edit_recipe__ = __webpack_require__(192);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_shopping_list__ = __webpack_require__(176);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_recipes__ = __webpack_require__(112);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var RecipePage = (function () {
    function RecipePage(navCtrl, navParams, slService, recipesService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.slService = slService;
        this.recipesService = recipesService;
    }
    RecipePage.prototype.ngOnInit = function () {
        this.recipe = this.navParams.get('recipe');
        this.index = this.navParams.get('index');
    };
    RecipePage.prototype.onEditRecipe = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__edit_recipe_edit_recipe__["a" /* EditRecipePage */], {
            mode: 'Edit',
            recipe: this.recipe,
            index: this.index
        });
    };
    RecipePage.prototype.onAddIngredients = function () {
        this.slService.addItems(this.recipe.ingredients);
    };
    RecipePage.prototype.onDeleteRecipe = function () {
        this.recipesService.removeRecipe(this.index);
        this.navCtrl.popToRoot();
    };
    RecipePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["m" /* Component */])({
            selector: 'page-recipe',template:/*ion-inline-start:"D:\WebDev\apps\Udemy\Ionic\recipes\src\pages\recipe\recipe.html"*/'<ion-header>\n    <ion-navbar>\n        <ion-title>{{ recipe.title }}</ion-title>\n    </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n    <ion-grid>\n        <ion-row>\n            <ion-col text-center>\n                <h2>{{ recipe.title }}</h2>\n                <div class="subtitle">{{ recipe.difficulty }}</div>\n            </ion-col>\n        </ion-row>\n        <ion-row>\n            <ion-col text-center>\n                <p>{{ recipe.description }}</p>\n            </ion-col>\n        </ion-row>\n        <ion-row>\n            <ion-col>\n                <ion-list>\n                    <ion-item *ngFor="let ingredient of recipe.ingredients">\n                        {{ ingredient.name }}\n                    </ion-item>\n                </ion-list>\n            </ion-col>\n        </ion-row>\n        <ion-row *ngIf="recipe.ingredients.length > 0">\n            <ion-col text-center>\n                <button ion-button clear (click)="onAddIngredients()">Add Ingredients to Shopping List</button>\n            </ion-col>\n        </ion-row>\n        <ion-row>\n            <ion-col>\n                <button ion-button outline block (click)="onEditRecipe()">Edit Recipe</button>\n            </ion-col>\n            <ion-col>\n                <button ion-button outline block color="danger" (click)="onDeleteRecipe()">Delete Recipe</button>\n            </ion-col>\n        </ion-row>\n    </ion-grid>\n</ion-content>\n'/*ion-inline-end:"D:\WebDev\apps\Udemy\Ionic\recipes\src\pages\recipe\recipe.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0_ionic_angular__["g" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["h" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_3__services_shopping_list__["a" /* ShoppingListService */],
            __WEBPACK_IMPORTED_MODULE_4__services_recipes__["a" /* RecipesService */]])
    ], RecipePage);
    return RecipePage;
}());

//# sourceMappingURL=recipe.js.map

/***/ }),

/***/ 430:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SigninPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth__ = __webpack_require__(47);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SigninPage = (function () {
    function SigninPage(authService, loadingCtrl, alertCtrl) {
        this.authService = authService;
        this.loadingCtrl = loadingCtrl;
        this.alertCtrl = alertCtrl;
    }
    SigninPage.prototype.onSignin = function (form) {
        var _this = this;
        var loading = this.loadingCtrl.create({
            content: 'Signing you in...'
        });
        loading.present();
        this.authService
            .signin(form.value.email, form.value.password)
            .then(function (data) {
            loading.dismiss();
        })
            .catch(function (error) {
            loading.dismiss();
            var alert = _this.alertCtrl.create({
                title: 'Signup failed!',
                message: error.message,
                buttons: ['Ok']
            });
            alert.present();
        });
    };
    SigninPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-signin',template:/*ion-inline-start:"D:\WebDev\apps\Udemy\Ionic\recipes\src\pages\signin\signin.html"*/'<ion-header>\n\n    <ion-navbar>\n        <ion-buttons start>\n            <button ion-button icon-only menuToggle>\n                <ion-icon name="menu"></ion-icon>\n            </button>\n        </ion-buttons>\n        <ion-title>Signin</ion-title>\n    </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n    <form #f="ngForm" (ngSubmit)="onSignin(f)">\n        <ion-list>\n            <ion-item>\n                <ion-label fixed>Mail </ion-label>\n                <ion-input type="email" ngModel name="email" required></ion-input>\n            </ion-item>\n\n            <ion-item>\n                <ion-label fixed>Password </ion-label>\n                <ion-input type="password" ngModel name="password" required></ion-input>\n            </ion-item>\n        </ion-list>\n        <button ion-button block type="submit" [disabled]="f.invalid">Signin</button>\n    </form>\n</ion-content>\n'/*ion-inline-end:"D:\WebDev\apps\Udemy\Ionic\recipes\src\pages\signin\signin.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_auth__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */]])
    ], SigninPage);
    return SigninPage;
}());

//# sourceMappingURL=signin.js.map

/***/ }),

/***/ 431:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignupPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth__ = __webpack_require__(47);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SignupPage = (function () {
    function SignupPage(authService, loadingCtrl, alertCtrl) {
        this.authService = authService;
        this.loadingCtrl = loadingCtrl;
        this.alertCtrl = alertCtrl;
    }
    SignupPage.prototype.onSignup = function (form) {
        var _this = this;
        var loading = this.loadingCtrl.create({
            content: 'Signing you up...'
        });
        loading.present();
        this.authService
            .signup(form.value.email, form.value.password)
            .then(function (data) {
            loading.dismiss();
        })
            .catch(function (error) {
            loading.dismiss();
            var alert = _this.alertCtrl.create({
                title: 'Signup failed!',
                message: error.message,
                buttons: ['Ok']
            });
            alert.present();
        });
    };
    SignupPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-signup',template:/*ion-inline-start:"D:\WebDev\apps\Udemy\Ionic\recipes\src\pages\signup\signup.html"*/'<ion-header>\n\n    <ion-navbar>\n        <ion-buttons start>\n            <button ion-button icon-only menuToggle>\n                <ion-icon name="menu"></ion-icon>\n            </button>\n        </ion-buttons>\n        <ion-title>Signup</ion-title>\n    </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n    <form #f="ngForm" (ngSubmit)="onSignup(f)">\n        <ion-list>\n            <ion-item>\n                <ion-label fixed>Mail </ion-label>\n                <ion-input type="email" ngModel name="email" required></ion-input>\n            </ion-item>\n\n            <ion-item>\n                <ion-label fixed>Password </ion-label>\n                <ion-input type="password" ngModel name="password" required [minlength]="8"></ion-input>\n            </ion-item>\n        </ion-list>\n        <button ion-button block type="submit" [disabled]="f.invalid">Signup</button>\n    </form>\n</ion-content>\n'/*ion-inline-end:"D:\WebDev\apps\Udemy\Ionic\recipes\src\pages\signup\signup.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_auth__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */]])
    ], SignupPage);
    return SignupPage;
}());

//# sourceMappingURL=signup.js.map

/***/ }),

/***/ 432:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(433);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(437);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 437:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(118);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__(474);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_tabs_tabs__ = __webpack_require__(336);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_edit_recipe_edit_recipe__ = __webpack_require__(192);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_recipe_recipe__ = __webpack_require__(429);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_recipes_recipes__ = __webpack_require__(428);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_shopping_list_shopping_list__ = __webpack_require__(337);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__services_shopping_list__ = __webpack_require__(176);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__services_recipes__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__services_auth__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__ionic_native_status_bar__ = __webpack_require__(290);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__ionic_native_splash_screen__ = __webpack_require__(295);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_signin_signin__ = __webpack_require__(430);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_signup_signup__ = __webpack_require__(431);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_database_options_database_options__ = __webpack_require__(191);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


















var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_6__pages_edit_recipe_edit_recipe__["a" /* EditRecipePage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_recipe_recipe__["a" /* RecipePage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_recipes_recipes__["a" /* RecipesPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_shopping_list_shopping_list__["a" /* ShoppingListPage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_signin_signin__["a" /* SigninPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_signup_signup__["a" /* SignupPage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_database_options_database_options__["a" /* DatabaseOptionsPage */]
            ],
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */], __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* HttpModule */], __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["e" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* MyApp */], {}, {
                    links: []
                })],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["c" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_6__pages_edit_recipe_edit_recipe__["a" /* EditRecipePage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_recipe_recipe__["a" /* RecipePage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_recipes_recipes__["a" /* RecipesPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_shopping_list_shopping_list__["a" /* ShoppingListPage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_signin_signin__["a" /* SigninPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_signup_signup__["a" /* SignupPage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_database_options_database_options__["a" /* DatabaseOptionsPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_10__services_shopping_list__["a" /* ShoppingListService */],
                __WEBPACK_IMPORTED_MODULE_11__services_recipes__["a" /* RecipesService */],
                __WEBPACK_IMPORTED_MODULE_12__services_auth__["a" /* AuthService */],
                __WEBPACK_IMPORTED_MODULE_13__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_14__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["d" /* IonicErrorHandler */] }
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 47:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_firebase__ = __webpack_require__(296);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_firebase__);

var AuthService = (function () {
    function AuthService() {
    }
    AuthService.prototype.signup = function (email, password) {
        return __WEBPACK_IMPORTED_MODULE_0_firebase___default.a.auth().createUserWithEmailAndPassword(email, password);
    };
    AuthService.prototype.signin = function (email, password) {
        return __WEBPACK_IMPORTED_MODULE_0_firebase___default.a.auth().signInWithEmailAndPassword(email, password);
    };
    AuthService.prototype.logout = function () {
        __WEBPACK_IMPORTED_MODULE_0_firebase___default.a.auth().signOut();
    };
    AuthService.prototype.getActiveUser = function () {
        return __WEBPACK_IMPORTED_MODULE_0_firebase___default.a.auth().currentUser;
    };
    return AuthService;
}());

//# sourceMappingURL=auth.js.map

/***/ }),

/***/ 474:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(290);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(295);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_firebase__ = __webpack_require__(296);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_tabs_tabs__ = __webpack_require__(336);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_signin_signin__ = __webpack_require__(430);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_signup_signup__ = __webpack_require__(431);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__services_auth__ = __webpack_require__(47);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


//MenuController







var MyApp = (function () {
    function MyApp(platform, statusBar, splashScreen, authService //,private menuCtrl: MenuController
    ) {
        var _this = this;
        this.authService = authService; //,private menuCtrl: MenuController
        this.rootPage = __WEBPACK_IMPORTED_MODULE_5__pages_tabs_tabs__["a" /* TabsPage */];
        this.signinPage = __WEBPACK_IMPORTED_MODULE_6__pages_signin_signin__["a" /* SigninPage */];
        this.signupPage = __WEBPACK_IMPORTED_MODULE_7__pages_signup_signup__["a" /* SignupPage */];
        this.isAuthenticated = false;
        __WEBPACK_IMPORTED_MODULE_4_firebase___default.a.initializeApp({
            apiKey: 'AIzaSyAbJ3jTOLYnqDF5xqe5sZPd5r18n8eb9iw',
            authDomain: 'ionic3-recipe-book-e5b5c.firebaseapp.com'
        });
        __WEBPACK_IMPORTED_MODULE_4_firebase___default.a.auth().onAuthStateChanged(function (user) {
            if (user) {
                _this.isAuthenticated = true;
                _this.nav.setRoot(_this.rootPage);
                //this.rootPage = TabsPage;
            }
            else {
                _this.isAuthenticated = false;
                _this.nav.setRoot(_this.signinPage);
                //this.rootPage = SigninPage;
            }
        });
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp.prototype.onLoad = function (page) {
        this.nav.setRoot(page);
    };
    MyApp.prototype.onLogout = function () {
        this.authService.logout();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('nav'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */])
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"D:\WebDev\apps\Udemy\Ionic\recipes\src\app\app.html"*/'<ion-menu [content]="nav">\n    <ion-header>\n        <ion-toolbar>\n            <ion-title>Menu</ion-title>\n        </ion-toolbar>\n    </ion-header>\n    <ion-content>\n        <ion-list>\n            <button ion-item icon-left menuClose (click)="onLoad(rootPage)" *ngIf="isAuthenticated">\n                <ion-icon name="book"></ion-icon>\n                Recipe Book\n            </button>\n            <button ion-item icon-left menuClose (click)="onLoad(signinPage)" *ngIf="!isAuthenticated">\n                <ion-icon name="log-in"></ion-icon>\n                Signin\n            </button>\n            <button ion-item icon-left menuClose (click)="onLoad(signupPage)" *ngIf="!isAuthenticated">\n                <ion-icon name="person"></ion-icon>\n                Signup\n            </button>\n            <button ion-item icon-left menuClose (click)="onLogout()" *ngIf="isAuthenticated">\n                <ion-icon name="log-out"></ion-icon>\n                Logout\n            </button>\n        </ion-list>\n    </ion-content>\n</ion-menu>\n\n\n\n<ion-nav [root]="rootPage" #nav></ion-nav>\n'/*ion-inline-end:"D:\WebDev\apps\Udemy\Ionic\recipes\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
            __WEBPACK_IMPORTED_MODULE_8__services_auth__["a" /* AuthService */] //,private menuCtrl: MenuController
        ])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 561:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Ingredient; });
var Ingredient = (function () {
    function Ingredient(name, amount) {
        this.name = name;
        this.amount = amount;
    }
    return Ingredient;
}());

//# sourceMappingURL=ingredient.js.map

/***/ }),

/***/ 840:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Recipe; });
var Recipe = (function () {
    function Recipe(title, description, difficulty, ingredients) {
        this.title = title;
        this.description = description;
        this.difficulty = difficulty;
        this.ingredients = ingredients;
    }
    return Recipe;
}());

//# sourceMappingURL=recipe.js.map

/***/ })

},[432]);
//# sourceMappingURL=main.js.map