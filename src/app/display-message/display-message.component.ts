import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'display-message',
  templateUrl: './display-message.component.html',
  styleUrls: ['./display-message.component.scss']
})
export class DisplayMessageComponent implements OnInit {

  @Input() level: string;
  @Input() message: string;

  constructor() { }

  ngOnInit(): void {
  }

}
