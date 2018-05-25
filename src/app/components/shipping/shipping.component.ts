import { Component, OnInit } from '@angular/core';
import { COUNTRIES, REGIONS } from '../../constants/countries-regions.constants';
import { Router } from '@angular/router';

@Component({
  selector: 'app-shipping',
  templateUrl: './shipping.component.html',
  styleUrls: ['./shipping.component.css']
})
export class ShippingComponent implements OnInit {
  private states = REGIONS;
  private countries = COUNTRIES;

  selectedCountry = 'Select Option';
  selectedState = 'Select';

  contactIntro = 'Welcome to the club, where can we ship your shirts to? You can always provide this information at checkout';
  constructor(private router: Router) { }




  ngOnInit() {
  }

  selectCountry(country) {
    this.selectedCountry = country;
    this.selectedState = 'Select';
  }

  selectState(state) {
    this.selectedState = state;
  }

  doLater() {
    this.router.navigateByUrl('/catalog');
  }

  save() {
    this.doLater();
  }

}
