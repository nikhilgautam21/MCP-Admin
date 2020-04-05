import { Component, OnInit } from '@angular/core';
import { LoginService } from './services/login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  
  constructor(public loginService:LoginService){

  }
  
  ngOnInit(){
    // debugger
    let data ={
      username : "nikhil",
      password: "admin"
    }
    this.loginService.login(data).subscribe(res=>{
      if(res){
        localStorage.setItem("x-auth-token",res["x-auth-token"])
        localStorage.setItem("user",JSON.stringify(res["admin"]))
      }
    })
  }

}
