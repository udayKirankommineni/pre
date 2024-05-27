import { Component, OnInit } from '@angular/core';
import { PropertyService } from '../property.service';
import { Property } from '../property.model';

@Component({
  selector: 'app-seller-dashboard',
  templateUrl: './seller-dashboard.component.html',
  styleUrls: ['./seller-dashboard.component.css']
})
export class SellerDashboardComponent implements OnInit {
  properties: Property[] = [];

  constructor(private propertyService: PropertyService) { }

  ngOnInit() {
    this.propertyService.getPropertiesBySeller(1).subscribe(data => { // Assume userId 1 for now
      this.properties = data;
    });
  }

  deleteProperty(id: number) {
    this.propertyService.deleteProperty(id).subscribe(() => {
      this.properties = this.properties.filter(property => property.id !== id);
    });
  }
}
