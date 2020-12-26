import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-guitars-home',
  templateUrl: './guitars-home.component.html',
  styleUrls: ['./guitars-home.component.scss']
})
export class GuitarsHomeComponent implements OnInit {
  guitars = [
    {
      name: 'Fender Stratocaster',
      imageUrl: 'assets/img/strat.jpg',
      description: 'Beautiful Fender Stratocaster escpecially for you!',
    },
    {
      name: 'Fender Jaguar',
      imageUrl: 'assets/img/jag.jpg',
      description: 'Fender Jaguar Vintera Series',
    },
    {
      name: 'Fender Telecaster',
      imageUrl: 'assets/img/tele.jpg',
      description: 'Beautiful Fender Stratocaster escpecially for you!',
    },
    {
      name: 'Fender Stratocaster',
      imageUrl: 'assets/img/strat.jpg',
      description: 'Beautiful Fender Stratocaster escpecially for you!',
    },
    {
      name: 'Fender Stratocaster',
      imageUrl: 'assets/img/strat.jpg',
      description: 'Beautiful Fender Stratocaster escpecially for you!',
    },
    {
      name: 'Fender Stratocaster',
      imageUrl: 'assets/img/strat.jpg',
      description: 'Beautiful Fender Stratocaster escpecially for you!',
    },
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
