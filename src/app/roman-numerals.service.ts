import { Injectable } from '@angular/core';

@Injectable()
export class RomanNumeralsService {

  //To define the different Roman numerals. 
  //We have to add two arrays. One for the Roman numbers, one for or interger.

  roman_array = ["M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"];

  integer_array = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];


  toRoman(interger_number) {
    let output = '';

    for (let i = 0; i <= this.integer_array.length; i++) {

      while (interger_number % this.integer_array[i] < interger_number) {
        output = output + this.roman_array[i];
        interger_number = interger_number - this.integer_array[i];
      }

    }
    return output;
  }

  fromRoman(roman_string) {
    var output = 0;

    for (let i = 0; i <= this.integer_array.length; i++) {

      while (roman_string.indexOf(this.roman_array[i]) === 0) {
        output = output +  this.integer_array[i];
        roman_string = roman_string.replace( this.roman_array[i] , '');
      }

    }
    return output;
  }

}