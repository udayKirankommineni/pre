import { Component, OnInit } from '@angular/core';
import { PropertyService } from '../property.service';
import { Property } from '../property.model';

@Component({
  selector: 'app-buyer-dashboard',
  templateUrl: './buyer-dashboard.component.html',
  styleUrls: ['./buyer-dashboard.component.css']
})
export class BuyerDashboardComponent implements OnInit {
  properties: Property[] = [];

  constructor(private propertyService: PropertyService) { }

  ngOnInit() {
    this.propertyService.getAllProperties().subscribe(data => {
      this.properties = data;
    });
  }
}
