import { MessageService } from './../message.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-alert-button',
  templateUrl: './alert-button.component.html',
  styleUrls: ['./alert-button.component.css']
})
export class AlertButtonComponent implements OnInit {

  jose: Observable<any>;
  hiddenContent = true;
  severity = 423;
  // jose =  'you have been warned';

  constructor(private messageService: MessageService) { }

  ngOnInit(): void {
    this.jose = this.messageService.getContent();
  }


  toogle(): void {
    this.hiddenContent = !this.hiddenContent;
  }

}
