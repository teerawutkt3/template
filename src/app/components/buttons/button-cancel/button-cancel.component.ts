import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'button-cancel',
  templateUrl: './button-cancel.component.html',
  styleUrls: ['./button-cancel.component.css']
})
export class ButtonCancelComponent implements OnInit {

  @Input() btnType: string = "button";
  constructor() { }

  ngOnInit() {
  }

}
