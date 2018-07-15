import { Directive, ElementRef, Input, AfterViewInit } from '@angular/core';

@Directive({
    selector: '[ontimeTracker]'
})

export class OnTimeTrackerDirective implements AfterViewInit {
    @Input('status') status: number;

    constructor(private elRef: ElementRef) { }

    ngAfterViewInit(): void {

        if (this.status < 0) {
            this.elRef.nativeElement.innerHTML = 'Early';
            this.elRef.nativeElement.style.color = 'red';
        } else if (0 < this.status && this.status <= 300) {
            this.elRef.nativeElement.innerHTML = 'On Time';
            this.elRef.nativeElement.style.color = 'green';
        } else if (this.status > 300) {
            this.elRef.nativeElement.innerHTML = 'Late';
            this.elRef.nativeElement.style.color = 'blue';
        } else {
            this.elRef.nativeElement.innerHTML = 'Unknown';
            this.elRef.nativeElement.style.color = 'red';
        }
    }
}
