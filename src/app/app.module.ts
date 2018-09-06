import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {MatButtonModule, MatToolbarModule} from "@angular/material";
import { DirectivesComponent } from './directives/directives.component';
import { AppRoutingModule } from './/app-routing.module';
import { ExampleDirective} from './directives/example.directive';

@NgModule({
  declarations: [
    AppComponent,
    DirectivesComponent,
    ExampleDirective
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatToolbarModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
