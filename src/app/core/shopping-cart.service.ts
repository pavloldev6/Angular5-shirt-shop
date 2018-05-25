import { Injectable } from '@angular/core';
import { ShoppingItem } from '../shared/shopping-item';
import { ShirtService } from '../core/shirt.service';
import { Shirt } from '../shared/shirt';
import { ShirtSize } from '../shared/shirt-size';
import { Observable, Subject, BehaviorSubject } from 'rxjs';

@Injectable()
export class ShoppingCartService {

    private shoppingItems: ShoppingItem[] = [];
    private _shoppingItems: BehaviorSubject<ShoppingItem[]>  = new BehaviorSubject<ShoppingItem[]>([]);

    constructor(private shirtService: ShirtService) {

    }

    private setShoppingCartItems() {
        this._shoppingItems.next(this.shoppingItems);
    }

    getShoppingCartItems(): Observable<ShoppingItem[]> {
        // if (!this._shoppingItems) {
        //     this._shoppingItems = [];

        //     const shirts: Shirt[] = this.shirtService.getShoppingCartShirts();
        //     for (const shirt of shirts) {
        //         this._shoppingItems.push(new ShoppingItem(shirt, 1, ShirtSize.Small));
        //     }
        // }
        // return Observable.from(this.shoppingItems);
        return this._shoppingItems.asObservable();
    }

    addToShoppingCart(shirt: Shirt, shirtSize?: ShirtSize): any {
        const quantity = 1; // default quantity
        const size = (shirtSize) ? shirtSize : ShirtSize.Small;

        if (!this.shoppingItems) {
            this.shoppingItems = [];
        }

        //check if this exact shirt already added to shopping cart, increment quantity if yes
        let idx: number = this.shoppingItems.findIndex(si => si.shirt.id === shirt.id);
        if (idx !== -1) {
            this.shoppingItems[idx].quantity++;
        } else {
            const shoppingItem: ShoppingItem = new ShoppingItem(shirt, quantity, size);
            this.shoppingItems.push(shoppingItem);
        }
        this.setShoppingCartItems();

        // return new Observable<ShoppingItem>((observer) => {
        //     if (!this.shoppingItems) {
        //         this.shoppingItems = [];
        //     }
        //     const shoppingItem: ShoppingItem = new ShoppingItem(shirt, quantity, size);
        //     this.shoppingItems.push(shoppingItem);
        //     observer.next(shoppingItem);
        //     observer.complete();
        // });
    }

    removeFromShoppingCart(item: ShoppingItem): any {
        let idx: number = this.shoppingItems.findIndex(si => si.shirt.id === item.shirt.id);
        if (idx !== -1) {
            this.shoppingItems.splice(idx, 1);
            this.setShoppingCartItems();
        }
    }
}
