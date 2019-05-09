import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { RomanNumeralsService } from './roman-numerals.service';

@NgModule({
  imports:      [ BrowserModule, FormsModule,NgbModule ],
  declarations: [ AppComponent, HelloComponent ],
  bootstrap:    [ AppComponent ],
  providers: [RomanNumeralsService]
})
export class AppModule { }
