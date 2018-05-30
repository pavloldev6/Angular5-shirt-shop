import { Component, OnInit, Output, OnDestroy } from '@angular/core';
import { ShirtGenderPipe } from '../../filters/shirt-filter';
import { Shirt } from '../../shared/shirt';
import { ShirtService } from '../../core/shirt.service';
import { Observable } from 'rxjs/Observable';
import { Subscriber, Subscription } from 'rxjs';
import { ShoppingCartService } from '../../core/shopping-cart.service';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.css']
})
export class CatalogComponent implements OnInit, OnDestroy {

  private shirts: Shirt[];
  subscriptions: Subscription[];
  shoppingCartItemsCount: number;
  showShoppingCart = false;

  logoPath = '../../../assets/images/navlogo.png';

  constructor(private shirtService: ShirtService, 
    private shoppingCartService: ShoppingCartService) {

      this.subscriptions = [];
      this.shirts = [];
  }

  ngOnInit(): any {
    // this.shirts = this.shirtService.getShirts().reduce((array, shirt) => {
    //   array.push(shirt);
    //   return array;
    // }, []);
    this.subscriptions.push(this.shirtService.getShirts().subscribe((result) => {
      this.shirts = result;
    }));

    this.subscriptions.push(this.shoppingCartService.getShoppingCartItems().subscribe((items) => {
      this.shoppingCartItemsCount = items.length;
    }));
  }

  ngOnDestroy(): any {
    if (this.subscriptions) {
      this.subscriptions.forEach(element => {
        element.unsubscribe();
      });
    }
    this.subscriptions = [];
  }

  toggleShoppingCart(): void {
    if (!this.showShoppingCart) {
      this.showShoppingCart = true;
    } else {
      this.showShoppingCart = false;
    }
  }

}
