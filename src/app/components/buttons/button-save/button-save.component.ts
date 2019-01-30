import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'button-save',
  templateUrl: './button-save.component.html',
  styleUrls: ['./button-save.component.css']
})
export class ButtonSaveComponent implements OnInit {

  @Input() btnType: string = "button";
  constructor() { }

  ngOnInit() {
  }

}
