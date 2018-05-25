import { Component, Input } from '@angular/core';
import { ShirtSize } from './shirt-size';

@Component({
    selector: 'app-size-select',
    template: `<select class="form-control form-control-sm size-select" [ngModel]="selectedSize">
                <option *ngFor="let s of sizes" value="{{s}}">{{s}}</option>
               </select>`,
    styles: [`.size-select {
                font-size: 12px;
                font-weight: bold;
                width: 174px;
                color: #10A2DC;
            }`]
})
export class SizeSelectComponent {
    @Input() selectedSize: ShirtSize;
    sizes = Object.values(ShirtSize);

    constructor() {}
}
