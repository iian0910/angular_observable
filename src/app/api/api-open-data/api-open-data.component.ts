import { Component, OnInit } from '@angular/core';
import { ApiDataService } from 'src/app/share/api-data.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-api-open-data',
  templateUrl: './api-open-data.component.html',
  styleUrls: ['./api-open-data.component.css']
})
export class ApiOpenDataComponent implements OnInit {

  data;
  constructor(private apisvc: ApiDataService) { }

  ngOnInit(): void {
    this.apisvc.getData().subscribe((response: any) => {
      this.data = response.records.location;
      this.data = this.data.sort((a, b) => {
        return a.parameter[0].parameterValue > b.parameter[0].parameterValue ? 1 : -1;
      });
    });
  }

}
