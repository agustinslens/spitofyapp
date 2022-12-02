import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-error-controller',
  templateUrl: './error-controller.component.html',
  styleUrls: ['./error-controller.component.css']
})
export class ErrorControllerComponent implements OnInit {
  @Input() x: string = "";
error:boolean=false
  constructor() { }

  ngOnInit(): void {
  }

}
