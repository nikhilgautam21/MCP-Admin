import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment"
import { HttpClient } from '@angular/common/http';
import { SYSTEM_CONSTANT } from '../constants/system.constant';
import { API_CONSTANT } from '../constants/api.constant';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  baseUrl:any = environment.apiUrl + SYSTEM_CONSTANT.API_TAG

  constructor(private httpClient: HttpClient) { }

  login(data){
    return this.httpClient.post(`${this.baseUrl}${API_CONSTANT.ADMIN_LOGIN}`,data)
  }
  
}
