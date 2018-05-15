import { Component, Output, EventEmitter, OnInit } from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {
@Output() typeSender = new EventEmitter();
@Output() sizeSender = new EventEmitter();

filterByType: string = "";
filterBySize: string = "";



  constructor() { }

  ngOnInit() {
  }

  onChangeType(optionFromMenu) {
      this.filterByType = optionFromMenu;
      this.typeSender.emit(optionFromMenu);
  }

  onChangeSize(optionFromMenu) {
      this.filterBySize = optionFromMenu;
      this.sizeSender.emit(optionFromMenu);
  }
}
