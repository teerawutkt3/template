import { Component, OnInit } from '@angular/core';
declare var $: any;
@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})

export class LayoutComponent implements OnInit {

  constructor() {
  }


  ngOnInit() {
    $(document).ready(function () {
      $('#sidebarCollapse').on('click', function () {
        $('#sidebar').toggleClass('active');
      });
    });

    // $("#sidebarCollapse").click(() => {
    //     $(".dataTables_scrollHeadInner").css('width', '100%');      
    // })
  }




}
