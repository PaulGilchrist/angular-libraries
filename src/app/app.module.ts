import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { ConnectivityService } from '../../projects/angular-connectivity/src/public-api';
import { FilterObjectsPipe, SortObjectsPipe } from '../../projects/angular-pipes-module/src/public-api';

@NgModule({
  declarations: [
    AppComponent,
    FilterObjectsPipe,
    SortObjectsPipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [ConnectivityService],
  bootstrap: [AppComponent]
})
export class AppModule { }
