import { Component, OnInit, EventEmitter, Output } from '@angular/core';

const SHIRT_ICON = '../../../assets/images/ShirtIcon.svg';

@Component({
  selector: 'app-payment-complete',
  templateUrl: './payment-complete.component.html',
  styleUrls: ['./payment-complete.component.css']
})
export class PaymentCompleteComponent implements OnInit {

  @Output() close;
  shirtIconPath = SHIRT_ICON;

  constructor() {
    this.close = new EventEmitter();  
  }

  ngOnInit() {
  }

  goToCatalog(): void {
    this.close.emit();
  }

}
