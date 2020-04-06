import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UtilityService {

  constructor() { }

  getUser(){
    return JSON.parse(localStorage.getItem("admin"))
  }

  getToken(){
    return localStorage.getItem("x-auth-token")
  }
}
