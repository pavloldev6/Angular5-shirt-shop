import { Injectable } from '@angular/core';
import { Shirt } from '../shared/shirt';
import { Observable } from 'rxjs';

@Injectable()
export class ShirtService {

    private shirts: Shirt[] = [
        new Shirt(1, 'Happy Shirt', 'Womens Fine Jersey Short Sleeve', 14.99, '/assets/images/WomensShirtDesigns-3.jpg', 'F'),
        new Shirt(2, '4 Coders', 'Mens Fine Jersey Short Sleeve', 14.99, '/assets/images/MensShirtDesigns-2.jpg', 'M'),
        new Shirt(3, 'Emoji Shirt', 'Womens Fine Jersey Short Sleeve', 15.99, '/assets/images/WomensShirtDesigns-2.jpg', 'F'),
        new Shirt(4, 'Falcon on black', 'Mens Fine Jersey Short Sleeve', 19.99, '/assets/images/MensShirtDesigns-3.jpg', 'M'),
        new Shirt(5, 'Falcon on white', 'Mens Fine Jersey Short Sleeve', 19.99, '/assets/images/MensShirtDesigns-4.jpg', 'M'),
        new Shirt(6, 'Office Space', 'Womens Fine Jersey Short Sleeve', 14.99, './assets/images/WomensShirtDesigns-1.jpg', 'F'),
        new Shirt(7, 'Smile', 'Mens Fine Jersey Short Sleeve', 15.99, '/assets/images/MensShirtDesigns-1.jpg', 'M'),
        new Shirt(8, 'Dabbing Skeleton', 'Mens Fine Jersey Short Sleeve', 19.99, '/assets/images/MensShirtDesigns-5.jpg', 'M'),
    ];

    constructor() {}

    getShirts(): Observable<Shirt> {
        return Observable.from(this.shirts);
    }

    getShirt(id: number): Observable<Shirt> {
        return this.getShirts()
            .filter(shirt => shirt.id === id)
            .first();
    }

    getShoppingCartShirts(): Shirt[] {
        return this.shirts.filter(s => s.id === 4 || s.id === 3 || s.id === 8 || s.id === 1 || s.id === 7);
    }
}

