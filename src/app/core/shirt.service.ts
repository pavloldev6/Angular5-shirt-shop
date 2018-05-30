import { Injectable } from '@angular/core';
import { Shirt } from '../shared/shirt';
import { Observable, BehaviorSubject, Subject } from 'rxjs';

@Injectable()
export class ShirtService {

    private shirts: Shirt[];
    private shirtsSubject: BehaviorSubject<Shirt[]>;

    private lastUsedId: number = 8;

    constructor() {
        this.shirtsSubject = new BehaviorSubject<Shirt[]>([]);
        this.shirts = [
            new Shirt(1, 'Happy Shirt', 'Womens Fine Jersey Short Sleeve', 14.99, '/assets/images/WomensShirtDesigns-3.jpg', 'F'),
            new Shirt(2, '4 Coders', 'Mens Fine Jersey Short Sleeve', 14.99, '/assets/images/MensShirtDesigns-2.jpg', 'M'),
            new Shirt(3, 'Emoji Shirt', 'Womens Fine Jersey Short Sleeve', 15.99, '/assets/images/WomensShirtDesigns-2.jpg', 'F'),
            new Shirt(4, 'Falcon on black', 'Mens Fine Jersey Short Sleeve', 19.99, '/assets/images/MensShirtDesigns-3.jpg', 'M'),
            new Shirt(5, 'Falcon on white', 'Mens Fine Jersey Short Sleeve', 19.99, '/assets/images/MensShirtDesigns-4.jpg', 'M'),
            new Shirt(6, 'Office Space', 'Womens Fine Jersey Short Sleeve', 14.99, './assets/images/WomensShirtDesigns-1.jpg', 'F'),
            new Shirt(7, 'Smile', 'Mens Fine Jersey Short Sleeve', 15.99, '/assets/images/MensShirtDesigns-1.jpg', 'M'),
            new Shirt(8, 'Dabbing Skeleton', 'Mens Fine Jersey Short Sleeve', 19.99, '/assets/images/MensShirtDesigns-5.jpg', 'M'),
        ];
        this.setShirts();
    }

    private setShirts() {
        this.shirtsSubject.next(this.shirts);
    }

    getShirts(): Observable<Shirt[]> {
        return this.shirtsSubject.asObservable();
    }

    // getShirt(id: number): Shirt {

    //     this.getShirts().subscribe((shirts) => {
    //         return shirts.filter(shirt => shirt.id === id);
    //     });
        

    // }

    deleteShirt(shirt: Shirt): void {
        
        let idx: number = this.shirts.findIndex(existingShirt => existingShirt.id === shirt.id);
        if ( idx != -1 ) {
            this.shirts.splice(idx, 1);
            this.shirtsSubject.next(this.shirts);
        }
    }

    getShoppingCartShirts(): Shirt[] {
        return this.shirts.filter(s => s.id === 4 || s.id === 3 || s.id === 8 || s.id === 1 || s.id === 7);
    }
}

