import { Component, OnInit, Output, OnDestroy, Renderer2, ViewChild, ElementRef, EventEmitter } from '@angular/core';
import { ShirtGenderPipe } from '../../filters/shirt-filter';
import { Shirt } from '../../shared/shirt';
import { ShirtService } from '../../core/shirt.service';
import { Subscription } from 'rxjs';
import { ShoppingCartService } from '../../core/shopping-cart.service';
import { ShoppingCartComponent } from '../shopping-cart/shopping-cart.component';
import { SlidingPanelsService } from '../../core/sliding-panels.service';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.css']
})
export class CatalogComponent implements OnInit, OnDestroy {

  private shirts: Shirt[];
  private shippingInfoPanelWidth: number;
  private paymentMethodPanelWidth: number;
  subscriptions: Subscription[];
  shoppingCartItemsCount: number;
  showShoppingCart = false;
  showShippingInfo = false;
  showPaymentMethod = false;
  showPaymentComplete = false;
  showDesignShirt = false;

  @ViewChild('shoppingCartPanel') shoppingCartPanel: ElementRef;
  @ViewChild('shippingInfoPanel') shippingInfoPanel: ElementRef;
  @ViewChild('paymentMethodPanel') paymentMethodPanel: ElementRef;

  logoPath = '../../../assets/images/navlogo.png';

  constructor(private shirtService: ShirtService, 
    private shoppingCartService: ShoppingCartService,
    private slidingPanelsService: SlidingPanelsService,
    private renderer: Renderer2) {

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

    this.subscriptions.push(
      this.slidingPanelsService.shippingInfo$.subscribe((state) => {
        if (state) {
          this.openShipping();
        }
      })
    );

    this.subscriptions.push(
      this.slidingPanelsService.shoppingCart$.subscribe((state) => {
        if (!state) {
          this.toggleShoppingCart(state);
        }
      })
    );

    this.subscriptions.push(
      this.slidingPanelsService.paymentMethod$.subscribe((state) => {
        if (state) {
          this.openPayment();
        }
      })
    );

    this.shippingInfoPanelWidth = this.shippingInfoPanel.nativeElement.offsetWidth;
    this.paymentMethodPanelWidth = this.paymentMethodPanel.nativeElement.offsetWidth;
  }

  ngOnDestroy(): any {
    if (this.subscriptions) {
      this.subscriptions.forEach(element => {
        element.unsubscribe();
      });
    }
    this.subscriptions = [];
  }

  openNewDesign(): void {
    this.showDesignShirt = true;
  }

  toggleShoppingCart(state?: boolean): void {
    if (state !== undefined) {
      this.showShoppingCart = state;
    }
    else {
      if (!this.showShoppingCart) {
        this.showShoppingCart = true;
      } else {
        this.showShoppingCart = false;
      }
    }
  }

  openShipping(): void {
    this.showShippingInfo = true;
    this.renderer.setStyle(this.shoppingCartPanel.nativeElement,
      'right',
      this.shippingInfoPanelWidth + 'px');
  }

  openPayment(): void {
    this.showPaymentMethod = true;
    this.renderer.setStyle(this.shoppingCartPanel.nativeElement,
      'right',
      this.shippingInfoPanelWidth + this.paymentMethodPanelWidth + 'px');
    this.renderer.setStyle(this.shippingInfoPanel.nativeElement,
      'right',
      this.paymentMethodPanelWidth + 'px');
    this.renderer.setStyle(this.shippingInfoPanel.nativeElement,
      'border-left',
      '1px solid #CDCDCD');
  }

  closeAllPanels(): void {
    this.showShippingInfo = false;
    this.showShoppingCart = false;
    this.showPaymentMethod = false;
    this.setShoppingPanelOriginal();
    this.setShippingPanelOriginal();
  }

  closeAllButShoppingCart(): void {
    this.showShippingInfo = false;
    this.showPaymentMethod = false;
    this.showShoppingCart = true;
    this.setShoppingPanelOriginal();
    this.setShippingPanelOriginal();
  }

  closePaymentMethodPanel(): void {
    this.showPaymentMethod = false;
    this.renderer.setStyle(this.shoppingCartPanel.nativeElement,
      'right',
      this.shippingInfoPanelWidth + 'px');
    this.setShippingPanelOriginal();
  }

  checkedOut(): void {
    this.closeAllPanels();
    this.showPaymentComplete = true;
  }

  closePaymentComplete(): void {
    this.showPaymentComplete = false;
  }

  private setShoppingPanelOriginal(): void {
    this.renderer.removeStyle(this.shoppingCartPanel.nativeElement, 'right');
  }

  private setShippingPanelOriginal(): void {
    this.renderer.removeStyle(this.shippingInfoPanel.nativeElement, 'right');
    this.renderer.removeStyle(this.shippingInfoPanel.nativeElement, 'border-left');
  }
}
