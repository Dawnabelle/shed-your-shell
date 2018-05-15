import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-marketplace',
  templateUrl: './marketplace.component.html',
  styleUrls: ['./marketplace.component.css']
})
export class MarketplaceComponent implements OnInit {


  constructor() { }

  ngOnInit() {
  }

  typeParam = null;
  sizeParam = null;
  cutParam = null;

  typeParamSet(type) {
    this.typeParam = type;
  }

  sizeParamSet(size) {
    this.sizeParam = size;
  }

  cutParamSet(cut) {
    this.cutParam = cut;
  }

}
