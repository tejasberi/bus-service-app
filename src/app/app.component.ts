import { Component, OnInit } from '@angular/core';
import { HttpService } from './services/http.service';
import { BusServiceData } from './interfaces/busService.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {

  public busServiceData: object;

  constructor(private httpService: HttpService) { }

  ngOnInit() {
    this.getBusServiceDetails();
  }

  // To fetch the bus service data
  getBusServiceDetails(): void {
    this.httpService.getBusServiceDetails()
      .subscribe((data: BusServiceData) => {
        this.busServiceData = data.data;
      }, () => {
        this.busServiceData = null;
      });
  }
}
