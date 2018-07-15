import { Component, ChangeDetectionStrategy, Input } from '@angular/core';

@Component({
  selector: 'app-bus-trip-details',
  templateUrl: './bus-trip-details.component.html',
  styleUrls: ['./bus-trip-details.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class BusTripDetailsComponent {

  @Input() busService;
  public isOpen = false;
  public notesArray = [];
  public notesData: string;

// Handling the notes entered by user
  saveNotes(note): void {
    this.notesArray.push(note);
    this.notesData = null;
  }

}
