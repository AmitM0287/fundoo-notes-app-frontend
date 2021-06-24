import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-notes',
  templateUrl: './create-notes.component.html',
  styleUrls: ['./create-notes.component.scss']
})
export class CreateNotesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  // Set isExpanded to false
  isExpanded: boolean = false;

  togglePanel() {
    this.isExpanded = !this.isExpanded;
  }

}
