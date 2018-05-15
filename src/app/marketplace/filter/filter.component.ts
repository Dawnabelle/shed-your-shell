import { Component, Output, EventEmitter, OnInit } from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {
@Output() typeSender = new EventEmitter();
@Output() sizeSender = new EventEmitter();
@Output() cutSender = new EventEmitter();
@Output() conditionSender = new EventEmitter();
@Output() colorSender = new EventEmitter();

filterByType: string = "";
filterBySize: string = "";
filterByCut: string = "";
filterByCondition: string = "";
filterByColor: string = "";



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

  onChangeCut(optionFromMenu) {
    this.filterByCut = optionFromMenu;
    this.cutSender.emit(optionFromMenu);
  }

  onChangeCondition(optionFromMenu) {
    this.filterByCondition = optionFromMenu;
    this.conditionSender.emit(optionFromMenu);
  }

  onChangeColor(optionFromMenu) {
    this.filterByColor = optionFromMenu;
    this.colorSender.emit(optionFromMenu);
  }
}
