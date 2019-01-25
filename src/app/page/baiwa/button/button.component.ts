import { Component, OnInit } from '@angular/core';
import { AlertService } from 'src/app/components/notification/alert/alert.service';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit {

  constructor(
    private alertService : AlertService
  ) { }

  btn: string = `
  Ts : import ButtonModule

  <button-add></button-add>
  <button-back></button-back>
  <button-cancel></button-cancel>
  <button-delete></button-delete>
  <button-edit></button-edit>
  <button-next></button-next>
  <button-print></button-print>
  <button-save></button-save>
  <button-select></button-select>



  <button-custom color="warning">Custom!!</button-custom>
  `;

  ngOnInit() {
    this.alertService.alert();
  }

}
