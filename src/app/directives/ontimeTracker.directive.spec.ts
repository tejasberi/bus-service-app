import { TestBed, ComponentFixture, async } from '@angular/core/testing';
import { Component } from '@angular/core';
import { OnTimeTrackerDirective } from './ontimeTracker.directive';

describe('OnTimeTrackerDirective', () => {

    it(`should return On Time when the timestamp is greater than 0 and less that 300`, () => {
        @Component({
            selector: 'my-test-component',
            template: `<div ontimeTracker [status]="eventString"></div>`
        })
        class TestComponent {
            public eventString = 200;
        }
        let componentFixture: ComponentFixture<TestComponent>;
        TestBed.configureTestingModule({
            declarations: [OnTimeTrackerDirective, TestComponent],
        });
        TestBed.compileComponents();
        componentFixture = TestBed.createComponent(TestComponent);
        componentFixture.detectChanges();
        const element = componentFixture.nativeElement.innerHTML;
        expect(element).toContain('On Time');
    });

    it(`should return On Early when the timestamp is less than 0 `, () => {
        @Component({
            selector: 'my-test-component',
            template: `<div ontimeTracker [status]="eventString"></div>`
        })
        class TestComponent {
            public eventString = -200;
        }
        let componentFixture: ComponentFixture<TestComponent>;
        TestBed.configureTestingModule({
            declarations: [OnTimeTrackerDirective, TestComponent],
        });
        TestBed.compileComponents();
        componentFixture = TestBed.createComponent(TestComponent);
        componentFixture.detectChanges();
        const element = componentFixture.nativeElement.innerHTML;
        expect(element).toContain('Early');
    });

    it(`should return On Late when the timestamp is greate than 300 `, () => {
        @Component({
            selector: 'my-test-component',
            template: `<div ontimeTracker [status]="eventString"></div>`
        })
        class TestComponent {
            public eventString = 301;
        }
        let componentFixture: ComponentFixture<TestComponent>;
        TestBed.configureTestingModule({
            declarations: [OnTimeTrackerDirective, TestComponent],
        });
        TestBed.compileComponents();
        componentFixture = TestBed.createComponent(TestComponent);
        componentFixture.detectChanges();
        const element = componentFixture.nativeElement.innerHTML;
        expect(element).toContain('Late');
    });

    it(`should return unknown when the timestamp is null `, () => {
        @Component({
            selector: 'my-test-component',
            template: `<div ontimeTracker [status]="eventString"></div>`
        })
        class TestComponent {
            public eventString: number = null;
        }
        let stub: any = {}, componentFixture: ComponentFixture<TestComponent>;
        TestBed.configureTestingModule({
            declarations: [OnTimeTrackerDirective, TestComponent],
        });
        TestBed.compileComponents();
        componentFixture = TestBed.createComponent(TestComponent);
        componentFixture.detectChanges();
        const element = componentFixture.nativeElement.innerHTML;
        expect(element).toContain('Unknown');
    });

});