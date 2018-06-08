import { Component, OnInit } from '@angular/core';
import { ShirtService } from '../../core/shirt.service';

const FRACTAL_PATH = '../../../assets/images/Fractal.png';

@Component({
  selector: 'app-design-shirt',
  templateUrl: './design-shirt.component.html',
  styleUrls: ['./design-shirt.component.css']
})
export class DesignShirtComponent implements OnInit {

  bgPath: string = FRACTAL_PATH;

  activeTab: number;
  

  constructor(private shirtService: ShirtService) { }

  ngOnInit() {
    this.activeTab = 1;
  }

  toggleTab(tabId: number): void {
    this.activeTab = tabId;
  }

  getStyleImagePath(): string {
    return this.shirtService.getStyleImagePath();
  }

}
