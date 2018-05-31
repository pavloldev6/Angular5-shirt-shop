import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-shipping-info',
  templateUrl: './shipping-info.component.html',
  styleUrls: ['./shipping-info.component.css']
})
export class ShippingInfoComponent implements OnInit {


  shippingInfoForm: FormGroup;

  constructor(private fb: FormBuilder) { } 

  ngOnInit() {
    this.shippingInfoForm = this.fb.group({
      
    });
  }

}
