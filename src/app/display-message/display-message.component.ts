import { Component, Input, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
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
    // this.toastr.success('Hello world!', 'Toastr fun!');
  }

}
