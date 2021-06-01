import { Component, Input, OnInit } from '@angular/core';
import { Contato } from 'src/app/models/contato.model';

@Component({
  selector: 'app-contact-card',
  templateUrl: './contact-card.component.html',
  styleUrls: ['./contact-card.component.css']
})
export class ContactCardComponent implements OnInit {

  constructor() { }

  @Input() Contato: Contato;

  ngOnInit(): void {
  }


}
