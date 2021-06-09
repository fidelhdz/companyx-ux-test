import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-counting-status',
  templateUrl: './counting-status.component.html',
  styleUrls: ['./counting-status.component.scss']
})
export class CountingStatusComponent implements OnInit {

  @Input('ordersCounted') ordersCounted: any;

  constructor() { }

  ngOnInit(): void {
  }

}
