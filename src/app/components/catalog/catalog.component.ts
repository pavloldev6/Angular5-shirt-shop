import { Component, OnInit, Output } from '@angular/core';
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
export class CatalogComponent implements OnInit {

  private shirts: Observable<Shirt[]>;
  subscription: Subscription;
  shoppingCartItemsCount: number;
  showShoppingCart = false;

  logoPath = '../../../assets/images/navlogo.png';

  constructor(private shirtService: ShirtService, 
    private shoppingCartService: ShoppingCartService) { }

  ngOnInit(): any {
    this.shirts = this.shirtService.getShirts().reduce((array, shirt) => {
      array.push(shirt);
      return array;
    }, []);
    this.subscription = this.shoppingCartService.getShoppingCartItems().subscribe((items) => {
      this.shoppingCartItemsCount = items.length;
    });
  }

  toggleShoppingCart(): void {
    if (!this.showShoppingCart) {
      this.showShoppingCart = true;
    } else {
      this.showShoppingCart = false;
    }
  }

}
