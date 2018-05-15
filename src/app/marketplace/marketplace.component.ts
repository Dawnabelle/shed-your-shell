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

  typeParamSet(type) {
    console.log("typeParamSet at marketplace: " , type);
    this.typeParam = type;
  }

  sizeParamSet(type) {
    this.sizeParam = type;
  }

}
