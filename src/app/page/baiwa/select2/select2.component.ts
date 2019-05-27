import { Component, OnInit } from '@angular/core';
import { Select2OptionData } from 'ng-select2';

@Component({
  selector: 'app-select2',
  templateUrl: './select2.component.html',
  styleUrls: ['./select2.component.css']
})
export class Select2Component implements OnInit {

  exampleData: Select2OptionData[]
  text: string = `
  Import :  NgSelect2Module
  Ts :
  exampleData: Select2OptionData[]
  //==> init data
  this.exampleData = [
    { id: "1", text: "text1" },
    { id: "2", text: "text2" },
    { id: "3", text: "text3" },
  ]

  Html:
  <ng-select2 [data]="exampleData"></ng-select2>

  <ng-select2
      [(ngModel)]="fruit"
      [data]="fruitList"
      [placeholder]="'Please select a fruit...'">
  </ng-select2>
  `
  constructor() { }

  ngOnInit() {

    this.exampleData = [
      {
        id: "1",
        text: "text1"
      },
      {
        id: "2",
        text: "text2"
      },
      {
        id: "3",
        text: "text3"
      },
    ]
  }

}
