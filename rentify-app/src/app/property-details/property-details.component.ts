import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PropertyService } from '../property.service';
import { Property } from '../property.model';
import { User } from '../user.model';
import { UserService } from '../user.service';

@Component({
  selector: 'app-property-details',
  templateUrl: './property-details.component.html',
  styleUrls: ['./property-details.component.css']
})
export class PropertyDetailsComponent implements OnInit {
  property: Property = new Property;
  seller: User = new User;

  constructor(private route: ActivatedRoute, private propertyService: PropertyService, private userService: UserService) { }

  ngOnInit() {
    const id: number = +this.route.snapshot.paramMap.get('id')!;
    this.propertyService.getPropertyById(id).subscribe(data => {
      this.property = data;
      this.userService.getUserById(this.property.userId).subscribe(userData => {
        this.seller = userData;
      });
    });
  }
}
