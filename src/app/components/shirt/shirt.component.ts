import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { Shirt } from '../../shared/shirt';
import { ShoppingCartService } from '../../core/shopping-cart.service';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-shirt',
  templateUrl: './shirt.component.html',
  styleUrls: ['./shirt.component.css']
})
export class ShirtComponent implements OnInit, OnDestroy {

  @Input() shirt: Shirt;
  subs: Subscription[] = [];

  constructor(private shoppingCartService: ShoppingCartService, private router: Router) { }

  ngOnInit() {
  }

  ngOnDestroy(): any {
    if (this.subs) {
      this.subs.forEach(sub => sub.unsubscribe());
    }
    this.subs = [];
  }

  renderImage(image) {
    return '../../../assets/images/image';
  }

  addToBasket(shirt: Shirt): any {
    this.shoppingCartService.addToShoppingCart(shirt);
  }

}
