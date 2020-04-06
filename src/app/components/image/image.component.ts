import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AnyMxRecord } from 'dns';
import { Location } from '@angular/common';

@Component({
  selector: 'app-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.css']
})
export class ImageComponent implements OnInit {

  imageUrl: any;
  constructor(
    public route: ActivatedRoute,
    public location:Location
    ) {
    this.route.queryParams.subscribe(params => {
     this.imageUrl = params["imageUrl"]
    })
  }

  ngOnInit(): void {
  }

  goBack(){
    this.location.back();
  }

  

}
