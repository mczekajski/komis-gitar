import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-guitars-home',
  templateUrl: './guitars-home.component.html',
  styleUrls: ['./guitars-home.component.scss']
})
export class GuitarsHomeComponent implements OnInit {
  guitars = [];

  constructor() { }

  ngOnInit(): void {
  }

}
