import { EventEmitter, Injectable, Output } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class ToastService {
  @Output() NewToast: EventEmitter<string>;  
  
  constructor() { 
      this.NewToast = new EventEmitter();
  }

  public SendToast(Message: string) {
    this.NewToast.emit(Message);

  }  
}
