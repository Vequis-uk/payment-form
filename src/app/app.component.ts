import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name: string ='';
  dateValue: string ='';
  amount: number = 0;
  height: number = 0;
  miles: number = 0;

  car = {
    make: 'Mazda',
    model: 'RX7',
    year: '2001'
  }

  onMilesChange(value: string) {
    this.height = parseFloat(value);
  }

  onHeightChange(value: string) {
    this.height = parseFloat(value);
  }
  
  onNameChange(value: string) {
    this.name = value;
  }

  onDateChange(value: string) {
    this.dateValue = value;
  }

  onAmountChange(value: string) {
    this.amount = parseFloat(value)
  }

}
