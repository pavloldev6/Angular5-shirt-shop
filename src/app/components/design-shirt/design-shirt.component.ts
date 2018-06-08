import { Component, OnInit } from '@angular/core';
import { ShirtService } from '../../core/shirt.service';
import { Shirt } from '../../shared/shirt';
import { Subscription } from 'rxjs';

const FRACTAL_PATH = '../../../assets/images/Fractal.png';

@Component({
  selector: 'app-design-shirt',
  templateUrl: './design-shirt.component.html',
  styleUrls: ['./design-shirt.component.css']
})
export class DesignShirtComponent implements OnInit {

  bgPath: string = FRACTAL_PATH;

  activeTab: number;
  editableShirt: Shirt;
  sub: Subscription;

  colourPickerTitle: string = 'Choose a shirt colour';

  constructor(private shirtService: ShirtService) { }

  ngOnInit() {
    this.activeTab = 3;
    this.sub = this.shirtService.getEditableShirt().subscribe((shirt) => {
      this.editableShirt = shirt;
    });
  }

  toggleTab(tabId: number): void {
    this.activeTab = tabId;
  }

  getStyleImagePath(): string {
    return this.shirtService.getStyleImagePath();
  }

}
