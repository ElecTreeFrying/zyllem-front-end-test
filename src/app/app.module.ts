import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';

const MODULES = [
  BrowserModule,
  BrowserAnimationsModule,
  MatButtonModule,
  AppRoutingModule
];

const DECLARATIONS = [
  AppComponent
];
@NgModule({
  imports: [
    ...MODULES
  ],
  declarations: [
    ...DECLARATIONS
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
