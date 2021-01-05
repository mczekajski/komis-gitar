import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = "komis-gitar";

  onMainClick() {
    document.querySelector(".header__menu-list").classList.add("header__menu-list--hidden");
  }
}
