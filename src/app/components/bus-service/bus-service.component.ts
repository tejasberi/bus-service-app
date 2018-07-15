import { Component, Input, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-bus-service',
  templateUrl: './bus-service.component.html',
  styleUrls: ['./bus-service.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class BusServiceComponent {

  @Input() busServiceData: object;

}
