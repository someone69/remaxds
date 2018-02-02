import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  brandImg = "assets/images/ballon2.png";

  constructor() { }

  ngOnInit() {
  }

}
