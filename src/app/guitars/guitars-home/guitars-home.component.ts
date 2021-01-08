import { Component, OnInit } from '@angular/core';
import { GuitarsService } from '../../services/guitars.service';

@Component({
  selector: 'app-guitars-home',
  templateUrl: './guitars-home.component.html',
  styleUrls: ['./guitars-home.component.scss']
})
export class GuitarsHomeComponent implements OnInit {
  guitars;

  constructor(private guitarsService: GuitarsService) { }

  ngOnInit(): void {
    this.getGuitars();
  }

  getGuitars() {
    this.guitarsService.getGuitars().subscribe(data => {
      this.guitars = data;
    })
  }

}
