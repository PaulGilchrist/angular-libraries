import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { ConnectivityService } from '../../projects/angular-connectivity/src/public-api';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [ConnectivityService],
  bootstrap: [AppComponent]
})
export class AppModule { }
