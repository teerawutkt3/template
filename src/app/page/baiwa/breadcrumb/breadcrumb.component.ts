import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumb.component.html',
  styleUrls: ['./breadcrumb.component.css']
})
export class BreadcrumbComponent implements OnInit {

  constructor() { }

  breadcrumb = `
  TS : 
  breadcrumb = [
    {
      label: "test",
      link: "/components/buttons",
    },
    {
      label: "test2",
      link: "#",
    },
  ]

  HTML:
  <app-breadcrumb [breadcrumb]="breadcrumb"></app-breadcrumb>
  `
  ngOnInit() {
  }

}
