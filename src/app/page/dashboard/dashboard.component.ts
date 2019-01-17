import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Chart } from 'chart.js';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit, AfterViewInit {

  constructor() { }

  ngOnInit() {

  }
  ngAfterViewInit() {
    this.barChart();
    this.polarAear();
    this.lineChart();
    this.radarChart();
  }
  lineChart = () => {
    var canvasLine: any = document.getElementById("line-chart");
    var ctxLine = canvasLine.getContext("2d");
    // var ctx = document.getElementById('myChart').getContext('2d');
    var chart = new Chart(ctxLine, {
      // The type of chart we want to create
      type: 'line',

      // The data for our dataset
      data: {
        labels: ["January", "February", "March", "April", "May", "June", "July"],
        datasets: [{
          label: "My First dataset",
          backgroundColor: 'rgb(255, 99, 132)',
          borderColor: 'rgb(255, 99, 132)',
          data: [0, 10, 5, 2, 20, 30, 45],
        }]
      },

      // Configuration options go here
      options: {}
    });
  }

  polarAear = () => {
    var canvasPolar: any = document.getElementById("polarAear");
    var ctxPolar = canvasPolar.getContext("2d");
    new Chart(ctxPolar, {
      data: {
        datasets: [{
          data: [10, 20, 30],
          backgroundColor: [
            '#FF0000',
            '#FA58F4',
            '#04B4AE'
          ],
          borderColor: [
            '#FF0000',
            '#FA58F4',
            '#04B4AE'
          ],
        }],

        // These labels appear in the legend and in the tooltips when hovering different arcs
        labels: [
          'Red',
          'Yellow',
          'Blue'
        ]
      },
      type: 'polarArea',
      // options: options
    });
  }

  barChart() {
    var canvas: any = document.getElementById("barChart");
    var ctx = canvas.getContext("2d");
    var myBarChart = new Chart(ctx, {
      type: 'bar',
      data: {
        datasets: [{
          data: [0, 50, 60, 70],
          backgroundColor: [
            '#056B19',
            '#2E9AFE',
            '#FA58F4',
            '#E7E700'
          ],
          borderColor: [
            '#056B19',
            '#2E9AFE',
            '#FA58F4',
            '#E7E700'
          ],
        }],

        // These labels appear in the legend and in the tooltips when hovering different arcs
        labels: [
          'Red',
          'Red',
          'Yellow',
          'Blue'
        ]
      },
      options: {
        scales: {
          xAxes: [{
            stacked: true
          }],
          yAxes: [{
            stacked: true
          }]
        }
      }
    });
  }

  radarChart() {

    var canvas: any = document.getElementById("radar-chart");
    var ctx = canvas.getContext("2d");
    var myRadarChart = new Chart(ctx, {
      type: 'radar',
      data: {
        labels: ['Running', 'Swimming', 'Eating', 'Cycling'],
        datasets: [{
          data: [20, 10, 4, 2],
          backgroundColor: [
            '#056B19',
            '#2E9AFE',
            '#FA58F4',
            '#E7E700'
          ],
          borderColor: [
            '#056B19',
            '#2E9AFE',
            '#FA58F4',
            '#E7E700'
          ],
        }]
      }
    });


  }
}
