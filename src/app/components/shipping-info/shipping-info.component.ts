import { Component, OnInit, Output, EventEmitter} from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-shipping-info',
  templateUrl: './shipping-info.component.html',
  styleUrls: ['./shipping-info.component.css']
})
export class ShippingInfoComponent implements OnInit {

  @Output() triggerPaymentMethod;
  shippingInfoForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.triggerPaymentMethod = new EventEmitter();
  } 

  ngOnInit() {
    this.shippingInfoForm = this.fb.group({
      
    });
  }

  goToPayment(): void {
    this.triggerPaymentMethod.emit();
  }

}
