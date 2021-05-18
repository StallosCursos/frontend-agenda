import { Component, OnInit } from '@angular/core';
import { ToastService } from './toast.service';

@Component({
  selector: 'app-toast',
  templateUrl: './toast.component.html',
  styleUrls: ['./toast.component.css']
})

export class ToastComponent implements OnInit {
  public MessageToast: string;  
  public Visible: boolean;

  constructor(ToastService: ToastService) { 
     ToastService.NewToast.subscribe(message => this.ChangeMessage(message));
  }

  ngOnInit(): void {
  }

  ChangeMessage(Message: string) {
    this.MessageToast = Message;
    this.Visible = true;

    setTimeout(() => this.Visible = false, 2500);
  }
}