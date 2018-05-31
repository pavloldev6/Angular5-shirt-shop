import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-payment-method',
  templateUrl: './payment-method.component.html',
  styleUrls: ['./payment-method.component.css']
})
export class PaymentMethodComponent implements OnInit {


  paymentMethodForm: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.paymentMethodForm = this.fb.group({});
  }

}
