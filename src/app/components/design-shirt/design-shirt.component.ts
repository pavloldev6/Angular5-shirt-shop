import { Component, OnInit } from '@angular/core';

const FRACTAL_PATH = '../../../assets/images/Fractal.png';

@Component({
  selector: 'app-design-shirt',
  templateUrl: './design-shirt.component.html',
  styleUrls: ['./design-shirt.component.css']
})
export class DesignShirtComponent implements OnInit {

  bgPath: string = FRACTAL_PATH;

  activeTab: number;
  styles = [
    { imgName: 'MensShirt', imgDescription: 'Mens Fine Jersey Short Sleeve' },
    { imgName: 'WomensShirt', imgDescription: 'Womens Fine Jersey Short Sleeve' }
  ];

  constructor() { }

  ngOnInit() {
    this.activeTab = 1;
  }

}
