import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {

  constructor() { }

  cardHeader: string = `
        Ts : import  CardsComponent

        <app-card-header header="Title">
            <p>content</p>
        </app-card-header>`

  cardBody: string = `
        Ts : import  CardsComponent

        <app-card-body>
            <p>content</p>
        </app-card-body>`
  ngOnInit() {
  }

}
