import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { BusTripDetailsComponent } from './bus-trip-details.component';
import { OnTimeTrackerDirective } from '../../directives/ontimeTracker.directive';
import { FormsModule } from '@angular/forms';
import { BUS_SERVICE_DATA } from '../../mocks/busService.mock';

describe('BusTripDetailsComponent', () => {
  let component: BusTripDetailsComponent;
  let fixture: ComponentFixture<BusTripDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [BusTripDetailsComponent, OnTimeTrackerDirective],
      imports: [FormsModule]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BusTripDetailsComponent);
    component = fixture.componentInstance;
    component.busService = BUS_SERVICE_DATA.data[0];
    component.isOpen = true;
    fixture.detectChanges();
  });

  it('should create BusTripDetailsComponent', () => {
    expect(component).toBeTruthy();
  });

  describe('Test data bindings', () => {
    it('should populate the bus service title and date', () => {
      const de = fixture.debugElement.query(By.css('.bus-service-title'));
      const el: HTMLElement = de.nativeElement;
      expect(el.innerHTML).toContain('Sydney Buses - 25/09/2015');
    });

    it('should populate all the bus trip data', () => {
      const de = fixture.debugElement.queryAll(By.css('.bus-trip'));
      expect(de.length).toEqual(5);
    });
  })

  describe('Adding the notes', () => {
    it('should add the notes when the save button is clicked', () => {
      component.notesArray = ['abc'];
      component.saveNotes('test');
      expect(component.notesArray.length).toEqual(2);
      expect(component.notesArray[1]).toEqual('test');
    });
  })
});
