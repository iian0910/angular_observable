import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ApiOpenDataComponent } from './api/api-open-data/api-open-data.component';
import { ApiModule } from './api/api.module';

@NgModule({
  declarations: [
    AppComponent,
    ApiOpenDataComponent
  ],
  imports: [
    BrowserModule,
    ApiModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
