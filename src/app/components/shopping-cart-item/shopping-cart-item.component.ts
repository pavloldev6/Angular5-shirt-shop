import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Shirt } from '../../shared/shirt';
import { ShoppingItem } from '../../shared/shopping-item';
import { ShirtSize } from '../../shared/shirt-size';
import { Observable } from 'rxjs/Observable';
import { ShoppingCartService } from '../../core/shopping-cart.service';

@Component({
  selector: 'app-shopping-cart-item',
  templateUrl: './shopping-cart-item.component.html',
  styleUrls: ['./shopping-cart-item.component.css']
})
export class ShoppingCartItemComponent implements OnInit {

  @Input() item: ShoppingItem;
  @Output() quantityChange = new EventEmitter();

  constructor(private shoppingCartService: ShoppingCartService) { }

  ngOnInit() {
  }

  changeQuantity(q) {
    this.item.quantity = q;
    this.quantityChange.emit(this.item);
  }

  removeCartItem(item: ShoppingItem): any {
    this.shoppingCartService.removeFromShoppingCart(item);
  }

}
