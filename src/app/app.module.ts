import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ApiOpenDataComponent } from './api/api-open-data/api-open-data.component';
import { ApiModule } from './api/api.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    ApiOpenDataComponent
  ],
  imports: [
    BrowserModule,
    ApiModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
