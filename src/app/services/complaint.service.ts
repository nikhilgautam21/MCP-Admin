import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { SYSTEM_CONSTANT } from '../constants/system.constant';
import { API_CONSTANT } from '../constants/api.constant';
import { UtilityService } from './utility.service';

@Injectable({
  providedIn: 'root'
})
export class ComplaintService {
  baseUrl: any = environment.apiUrl + SYSTEM_CONSTANT.API_TAG
  constructor(private httpClient: HttpClient,public utils:UtilityService) {
  }

  createAuthorizationHeader(headers: HttpHeaders) {
  }

  getAllComplaints() {
    let token = this.utils.getToken();
    let headers = new HttpHeaders({"x-access-token": token});
    return this.httpClient.get(`${this.baseUrl}${API_CONSTANT.GET_COMPLAINTS}`,{headers})
  }

  changeComplaintStatus(data) {
    let token = this.utils.getToken();
    let headers = new HttpHeaders({"x-access-token": token});
    return this.httpClient.post(`${this.baseUrl}${API_CONSTANT.CHANGE_STATUS}`,data,{headers})
  }


}
