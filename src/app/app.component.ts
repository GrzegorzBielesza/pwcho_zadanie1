import {Component, OnInit} from '@angular/core';
import {FormControl, ValidationErrors, Validators} from "@angular/forms";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{
  title = 'FibCalc';
  formControl = new FormControl('', [Validators.required]);
  fiboValue: number;

constructor() {
  this.fiboValue = -1;
}

  calculateFibo() {
    if(this.formControl.errors==null){
      const fibonacci = require('fibonacci-series');
      const numberArray = fibonacci(this.formControl.value);
      this.fiboValue = numberArray[numberArray.length-1];
    }
  }
}




