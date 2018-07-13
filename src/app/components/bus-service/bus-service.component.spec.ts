import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { By } from '@angular/platform-browser';
import { BusServiceComponent } from './bus-service.component';
import { BUS_SERVICE_DATA } from '../../mocks/busService.mock';

describe('BusServiceComponent', () => {
  let component: BusServiceComponent;
  let fixture: ComponentFixture<BusServiceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [BusServiceComponent],
      schemas: [NO_ERRORS_SCHEMA]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BusServiceComponent);
    component = fixture.componentInstance;
    component.busServiceData = BUS_SERVICE_DATA.data;
  });

  it('should create BusServiceComponent', () => {
    fixture.detectChanges();
    expect(component).toBeTruthy();
  });

  it('should render the available bus services', () => {
    fixture.detectChanges();
    const de = fixture.debugElement.queryAll(By.css('.bus-service'));
    expect(de.length).toEqual(2);
  });
});
