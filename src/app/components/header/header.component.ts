import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  adminName:any;
  constructor() {
    let admin = JSON.parse(localStorage.getItem('user'))
    this.adminName = admin["username"]
   }

  ngOnInit(): void {
  }


}
