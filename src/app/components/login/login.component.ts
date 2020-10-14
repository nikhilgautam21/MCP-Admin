import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoginService } from 'src/app/services/login.service';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public loading:boolean = false;
  loginForm: FormGroup;
  formValid: boolean = true
  constructor(
    public router: Router,
    private formBuilder: FormBuilder,
    public loginService: LoginService,
    public messageService: MessageService
    ) {
    this.loginForm = this.formBuilder.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required]]
    })
  }

  ngOnInit(): void {
  }

  login() {
    if (this.loginForm.valid) {
      this.loading = true;
      this.loginService.login(this.loginForm.value).subscribe(res => {
        this.loading = false;
        if(res["success"]){
          localStorage.setItem("x-auth-token",res["x-auth-token"])
          localStorage.setItem("admin",JSON.stringify(res["admin"]["username"]))
          this.router.navigate(["/dashboard"])
        }
        else{
          this.messageService.add({severity:'error', summary:'Error', detail: "Incorrect username or password"});
        }
      })
    }
  }

}
