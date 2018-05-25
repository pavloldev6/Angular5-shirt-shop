import { Component, OnInit, ViewChild } from '@angular/core';
import { NgbTabContent } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  @ViewChild('tab') tab: any;

  verticalLogoPath = '../../../assets/images/Shirtastic-vertical.svg';
  fractalPath = '../../../assets/images/Fractal.png';

  constructor() {
  }

  currentTab = 'signup';
  shippingTabDisabled = true;

  ngOnInit() {
    this.tab.activeId = 'signup';
  }

  goToShipping(event) {
    this.shippingTabDisabled = !event;
    this.tab.activeId = 'shipping';
  }

}
