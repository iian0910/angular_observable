import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApiDataService } from '../share/api-data.service';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  providers: [ApiDataService]
})
export class ApiModule { }
