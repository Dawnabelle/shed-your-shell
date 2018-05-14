import { Component, Output, EventEmitter, OnInit } from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {
@Output() typeSender = new EventEmitter();

filterByType: string = "";

  constructor() { }

  ngOnInit() {
  }

  onChange(optionFromMenu) {
    this.filterByType = optionFromMenu;
    this.typeSender.emit(optionFromMenu);
  }

}
