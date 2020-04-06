import { Component, OnInit } from '@angular/core';
import { ComplaintService } from 'src/app/services/complaint.service';
import {STATUS} from '../../constants/status.constant';
import { Router, NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  complaints:any;
  cols: { field: string; header: string; }[];
  loading: boolean;
  constructor(
    public complaintService:ComplaintService,
    public router:Router
    ) {
   }

  ngOnInit(): void {
    this.getComplaints();
  }

  getComplaints(){
    this.loading = true;
    this.complaintService.getAllComplaints().subscribe(res=>{
      this.loading = false;
      this.complaints = res;
      this.complaints.forEach(item=>{
        item["show_status"] = STATUS[item["status"]]
      })
      this.cols = [
        { field: 'complaint_number', header: '#' },
        { field: 'name', header: 'Name' },
        { field: 'phone', header: 'Phone' },
        { field: 'date', header: 'Complaint Date' },
        { field: 'show_status', header: 'Status' },

    ];
    })
  }

  reviewComplaint(item){
    let navigationExtras : NavigationExtras = {
      queryParams :{
        "complaint": JSON.stringify(item)
      }
    }
    this.router.navigate(['/complaint'],navigationExtras)
  }

}
