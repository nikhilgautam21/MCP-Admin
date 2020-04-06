import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, NavigationExtras } from '@angular/router';
import { ComplaintService } from 'src/app/services/complaint.service';
import { STATUS } from 'src/app/constants/status.constant';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-complaint',
  templateUrl: './complaint.component.html',
  styleUrls: ['./complaint.component.css']
})
export class ComplaintComponent implements OnInit {

  complaint: any;
  showModal: boolean = false;
  statuses: any;
  loading: any
  selectedStatus: any;
  constructor(
    public route: ActivatedRoute,
    public complaintService: ComplaintService,
    public messageService: MessageService,
    public router: Router
  ) {
    this.statuses = [
      { "label": "On Hold", "value": "onhold" },
      { "label": "In Progress", "value": "inprogress" },
      { "label": "Completed", "value": "completed" },
      { "label": "Invalid", "value": "invalid" }
    ]
    this.route.queryParams.subscribe(params => {
      this.complaint = JSON.parse(params["complaint"])
      this.selectedStatus = this.complaint["status"]
    })
  }

  ngOnInit(): void {
  }

  changeStatus() {
    if (this.complaint.status != this.selectedStatus) {
      this.loading = true;
      let data = {
        "id": this.complaint._id,
        "status": this.selectedStatus
      }
      this.complaintService.changeComplaintStatus(data).subscribe(res => {
        this.complaint = res;
        this.complaint["show_status"] = STATUS[this.complaint["status"]]
        this.selectedStatus = this.complaint["status"]
        this.loading = false;
        this.messageService.add({ severity: 'success', summary: 'Success', detail: "Status changed successfully" });
      })

    } else {
      this.messageService.add({ severity: 'info', summary: 'Alert', detail: "Choose a different status" });
    }
  }

  showFullImage(url){
    let navigationExtras : NavigationExtras = {
      queryParams :{
        "imageUrl": url
      }
    }
    this.router.navigate(['/image'],navigationExtras)
  }

}
