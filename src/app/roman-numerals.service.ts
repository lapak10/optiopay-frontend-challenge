import { Injectable } from '@angular/core';

@Injectable()
export class RomanNumeralsService {

  integer_array = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];

  roman_array = ["M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"];

  toRoman(interger_number) {
    let output = '';


    for (let i = 0; i <= this.integer_array.length; i++) {

      while (interger_number % this.integer_array[i] < interger_number) {
        output += this.roman_array[i];
        interger_number -= this.integer_array[i];
      }

    }
    return output;
  }

  fromRoman(roman_string) {
    var output = 0;

    for (let i = 0; i <= this.integer_array.length; i++) {

      while (roman_string.indexOf(this.roman_array[i]) === 0) {
        output += this.integer_array[i];
        roman_string = roman_string.replace(this.roman_array[i], '');
      }

    }
    return output;
  }

}