import { Component, OnInit, Input } from '@angular/core';
import { Guitar } from '../../services/guitars.service';

@Component({
  selector: 'app-guitar-product',
  templateUrl: './guitar-product.component.html',
  styleUrls: ['./guitar-product.component.scss']
})
export class GuitarProductComponent implements OnInit {
  guitar: Guitar;

  constructor() { }

  ngOnInit(): void {
    this.guitar = history.state;
    console.log(this.guitar);
  }

  
}
