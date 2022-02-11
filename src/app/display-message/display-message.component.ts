import { Component, Input, OnInit } from '@angular/core';
import { ServerMessage } from '../models/server-message.model';

@Component({
  selector: 'display-message',
  templateUrl: './display-message.component.html',
  styleUrls: ['./display-message.component.scss']
})
export class DisplayMessageComponent implements OnInit {

  @Input() message: ServerMessage;

  constructor() { }

  ngOnInit(): void {
  }

}
