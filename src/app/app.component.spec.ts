import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { HttpService } from './services/http.service';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BUS_SERVICE_DATA } from './mocks/busService.mock';
import { Observable } from 'rxjs';
import 'rxjs/add/observable/of';
import 'rxjs/add/observable/throw';

class HttpServiceMock {
  getBusServiceDetails() { return Observable.of(BUS_SERVICE_DATA); }
}

describe('Bus reporting app', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
      schemas: [
        CUSTOM_ELEMENTS_SCHEMA
      ],
      providers: [
        { provide: HttpService, useClass: HttpServiceMock }
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
  });

  it('should create the Bus reporting app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    fixture.detectChanges();
    expect(app).toBeTruthy();
  }));

  describe('API call to get bus data', () => {

    describe('on success', () => {
      it('should get the bus service data', async(() => {
        const service = TestBed.get(HttpService);
        const spy = spyOn(service, 'getBusServiceDetails').and.returnValue(Observable.of(BUS_SERVICE_DATA));
        component.getBusServiceDetails();
        expect(component.busServiceData).toEqual(BUS_SERVICE_DATA.data);
      }));
    });

    describe('on failure', () => {
      it('cannot populate the data on the screen', async(() => {
        const service = TestBed.get(HttpService);
        const spy = spyOn(service, 'getBusServiceDetails').and.returnValue(Observable.throw({}));
        component.getBusServiceDetails();
        expect(component.busServiceData).toEqual(null);
      }));
    });
  });
});
