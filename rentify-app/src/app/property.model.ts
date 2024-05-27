export class Property {
    id: number;
    title: string;
    description: string;
    placeArea: string;
    bedrooms: number;
    bathrooms: number;
    hospitalsNearby: string;
    collegesNearby: string;
    userId: number;
    constructor() {
        this.id = 0;
        this.title = "";
        this.description = "";
        this.placeArea = "";
        this.bedrooms = 0;
        this.bathrooms = 0;
        this.hospitalsNearby ="";
        this.collegesNearby = "";
        this.userId = 0;
    }
  }
  