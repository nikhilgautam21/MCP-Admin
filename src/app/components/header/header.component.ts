import { Component, OnInit, Input } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  admin:any;

  constructor(public loginService:LoginService,public router:Router) {
  }

  ngOnInit(): void {
  }

  logout(){
    localStorage.removeItem("admin")
    localStorage.removeItem("x-auth-token")
    this.router.navigate(["/login"])
  }

  get user(): any {
    return JSON.parse(localStorage.getItem('admin'));
  }


}
