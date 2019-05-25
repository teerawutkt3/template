import { Injectable } from '@angular/core';
declare var $: any;
@Injectable({
  providedIn: 'root'
})
export class AlertService {

  constructor() { }

  public alert() {
    console.log("Call alert");
    $("#notificationModal").modal('show');
  }

  public onAlertSeccess = () => {
    $('#alert-success').show();
    setTimeout(() => {
      $('#alert-success').hide("slow");
    }, 2000);
  }

  public onAlertDanger = () => {
    $('#alert-danger').show();
    setTimeout(() => {
      $('#alert-danger').hide("slow");
    }, 2000);
  }
  public onAlertWarning = () => {
    $('#alert-warning').show();
    setTimeout(() => {
      $('#alert-warning').hide("slow");
    }, 2000);
  }
}
