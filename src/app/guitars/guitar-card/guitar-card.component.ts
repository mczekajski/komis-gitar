import { Component, OnInit, Input } from '@angular/core';
import { Guitar } from '../../services/guitars.service';

@Component({
  selector: 'app-guitar-card',
  templateUrl: './guitar-card.component.html',
  styleUrls: ['./guitar-card.component.scss']
})
export class GuitarCardComponent implements OnInit {
  @Input() guitar: Guitar;

  constructor() { }

  ngOnInit(): void {
  }

}
