import { Component, OnInit, Input, Output } from '@angular/core';
import { Shirt } from '../../shared/shirt';
import { Subscription } from 'rxjs';
import { ShirtService } from '../../core/shirt.service';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-colour-picker',
  templateUrl: './colour-picker.component.html',
  styleUrls: ['./colour-picker.component.css']
})
export class ColourPickerComponent implements OnInit {

  colours = [
    { name: 'White', value: '#FFFFFF' }, 
    { name: 'Grey', value: '#CDCDCD' }, 
    { name: 'Black', value: '#444444' }, 
    { name: 'Blue', value: '#2674A8' }, 
    { name: 'Green', value: '#44A265' }, 
    { name: 'Yellow', value: '#F4DA70' }, 
    { name: 'Purple', value: '#6E5BD6' }, 
    { name: 'Red', value: '#A7386B' }
  ];

  @Input() selectedColour: string;
  @Output() selectedColourChange: EventEmitter<string>;

  constructor(private shirtService: ShirtService) {
    this.selectedColourChange = new EventEmitter<string>();
  }

  ngOnInit() {
  }

  pickColour(colourName: string): void {
    this.selectedColourChange.emit(colourName);
  }
}
