import { Component } from '@angular/core';
import { RomanNumeralsService } from './roman-numerals.service'

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  
  roman="M";
  integer="1000";
  constructor( private RomanNumerals: RomanNumeralsService ){
    this.fromRoman();
  }
    

  toRoman(){
    this.roman = this.RomanNumerals.toRoman( this.integer );
  }

  fromRoman(){
    this.integer = this.RomanNumerals.fromRoman( this.roman );
  }
  

}
