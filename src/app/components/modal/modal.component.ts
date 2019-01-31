import { Component, OnInit, Input } from '@angular/core';
@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {


  @Input() modalId: string = 'modalId';
  @Input() header: string = 'Header';
  
  constructor() { }


  ngOnInit() {
    console.log("header : ", this.header);
  }
}
