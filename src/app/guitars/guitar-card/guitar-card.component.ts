import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-guitar-card',
  templateUrl: './guitar-card.component.html',
  styleUrls: ['./guitar-card.component.scss']
})
export class GuitarCardComponent implements OnInit {
  @Input() name = "";
  @Input() imageUrl = "";
  @Input() description = "";

  constructor() { }

  ngOnInit(): void {
  }

}
