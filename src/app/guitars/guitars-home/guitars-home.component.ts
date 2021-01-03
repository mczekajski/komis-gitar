import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-guitars-home',
  templateUrl: './guitars-home.component.html',
  styleUrls: ['./guitars-home.component.scss']
})
export class GuitarsHomeComponent implements OnInit {
  guitars = [
    {
      name: '',
      imageUrl: 'assets/img/strat.jpg',
      description: '',
    },
    {
      name: '',
      imageUrl: 'assets/img/jag.jpg',
      description: '',
    },
    {
      name: '',
      imageUrl: 'assets/img/tele.jpg',
      description: '',
    },
    {
      name: '',
      imageUrl: 'assets/img/strat.jpg',
      description: '',
    },
    {
      name: '',
      imageUrl: 'assets/img/jag.jpg',
      description: '',
    },
    {
      name: '',
      imageUrl: 'assets/img/tele.jpg',
      description: '',
    },
    {
      name: '',
      imageUrl: 'assets/img/strat.jpg',
      description: '',
    },
    {
      name: '',
      imageUrl: 'assets/img/jag.jpg',
      description: '',
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
