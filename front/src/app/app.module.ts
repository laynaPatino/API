import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import{FormsModule} from "@angular/forms";

import{HttpClientModule} from "@angular/common/http";

import { AppComponent } from './app.component';
import { EduBITComponent } from './components/edu-bit/edu-bit.component';


import { EduBITService } from './services/edu-bit.service';



@NgModule({
  declarations: [
    AppComponent,
    EduBITComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [EduBITService],
  bootstrap: [AppComponent]
})
export class AppModule { }
