import { Component, OnInit, OnDestroy, EventEmitter, Output } from '@angular/core';
import { Shirt } from '../../shared/shirt';
import { ShoppingItem } from '../../shared/shopping-item';
import { ShoppingCartService } from '../../core/shopping-cart.service';
import { Observable, Subscription } from 'rxjs';
import { FormGroup, FormBuilder, FormArray, FormControl } from '@angular/forms';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit, OnDestroy {

  shoppingCartItems: ShoppingItem[];
  subscription: Subscription;
  subtotal: number;
  @Output() showShoppingCartChange = new EventEmitter<boolean>();
  @Output() triggerShippingInfo = new EventEmitter();

  shoppingCartForm: FormGroup;

  constructor(private shoppingCartService: ShoppingCartService, private fb: FormBuilder) { }

  ngOnInit() {
    this.subtotal = 0;
    this.subscription = this.shoppingCartService.getShoppingCartItems().subscribe((items) => {
      this.shoppingCartItems = items;
      this.subtotal = this.calculateSubtotal();
    });
    this.shoppingCartForm = this.fb.group({
      shoppingItems: this.fb.array([

      ])
    });

  }

  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

  calculateSubtotal(): number {
    return this.shoppingCartItems.reduce((total, item) => total + item.shirt.price * item.quantity, 0);
  }

  changeQuantity(item: ShoppingItem): any {
    this.subtotal = this.calculateSubtotal();
  }

  closeShoppingCart(): any {
    this.showShoppingCartChange.emit(false);
  }

  goToShipping(): void {
    this.triggerShippingInfo.emit();
  }

  formInitialized(name: string, form: FormGroup) {
    const items = this.shoppingCartForm.get('shoppingItems') as FormArray;
    items.push(form);
    //this.shoppingCartForm.setControl(name, form);
  }
}
