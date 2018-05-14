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

  typeParamSet(type) {
    console.log(type);
    this.typeParam = type;
    console.log(this.typeParam);
  }

}
