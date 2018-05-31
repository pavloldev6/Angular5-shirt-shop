import { Component, OnInit, Output, OnDestroy, Renderer2, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { ShirtGenderPipe } from '../../filters/shirt-filter';
import { Shirt } from '../../shared/shirt';
import { ShirtService } from '../../core/shirt.service';
import { Observable } from 'rxjs/Observable';
import { Subscriber, Subscription } from 'rxjs';
import { ShoppingCartService } from '../../core/shopping-cart.service';
import { ShoppingCartComponent } from '../shopping-cart/shopping-cart.component';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.css']
})
export class CatalogComponent implements OnInit, OnDestroy, AfterViewInit {

  private shirts: Shirt[];
  private shippingPanelWidth: number;
  subscriptions: Subscription[];
  shoppingCartItemsCount: number;
  showShoppingCart = false;
  showShippingInfo = false;

  @ViewChild('shoppingCartPanel') shoppingCartPanel: ElementRef;
  @ViewChild('shippingInfoPanel') shippingInfoPanel: ElementRef;

  logoPath = '../../../assets/images/navlogo.png';

  constructor(private shirtService: ShirtService, 
    private shoppingCartService: ShoppingCartService,
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

    this.shippingPanelWidth = this.shippingInfoPanel.nativeElement.offsetWidth;
  }

  ngOnDestroy(): any {
    if (this.subscriptions) {
      this.subscriptions.forEach(element => {
        element.unsubscribe();
      });
    }
    this.subscriptions = [];
  }

  ngAfterViewInit(): any {
    let width = this.shippingInfoPanel.nativeElement.offsetWidth;
  }

  toggleShoppingCart(): void {
    if (!this.showShoppingCart) {
      this.showShoppingCart = true;
    } else {
      this.showShoppingCart = false;
    }
  }

  openShipping(): void {
    this.showShippingInfo = true;
    this.renderer.setStyle(this.shoppingCartPanel.nativeElement,
      'right',
      this.shippingPanelWidth + 'px');
  }

  closeAllPanels(): void {
    this.showShippingInfo = false;
    this.showShoppingCart = false;
    this.setShoppingPanelOriginal();
  }

  closeAllButShoppingCart(): void {
    this.showShippingInfo = false;
    this.showShoppingCart = true;
    this.setShoppingPanelOriginal();
  }

  private setShoppingPanelOriginal(): void {
    this.renderer.setStyle(this.shoppingCartPanel.nativeElement,
      'right',
      '0');
  }
}
