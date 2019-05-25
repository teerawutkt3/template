import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-card2',
  templateUrl: './card2.component.html',
  styleUrls: ['./card2.component.css']
})
export class Card2Component implements OnInit {

  @Input() icon: string = 'fa-address-book';
  @Input() number: number = 0;
  @Input() subTitle: string = 'sub title';
  @Input() text: string = 'text';
  @Input() color: string = '';

  constructor() { }

  ngOnInit() {
  }

}
