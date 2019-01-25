import { Injectable } from '@angular/core';
declare var $: any;
@Injectable({
  providedIn: 'root'
})
export class AlertService {

  constructor() { }

  public alert() {
    $("#notificationModal").modal('show');
  }
}
